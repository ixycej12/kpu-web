<script setup lang="ts">
import { onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import { remove, tree } from '@/api/modules/devOperation/application/defResource.ts'
import { query } from '@/api/modules/devOperation/application/defApplication.ts'
import { eachTree, findNodeByKey } from '@/util/helper/treeHelper.ts'
import type { KeyType } from '@/components/BasicTree/tree.ts'
import { getResourceTagColor } from '@/util/color.ts'

const emits = defineEmits<{
  select: [any, any]
  add: [any, any]
  edit: [any, any]
}>()

const { t } = useI18n()

const dataTree = ref({
  search: {
    applicationId: '',
    applicationName: '',
  },
  loading: false,
  // 列表数据
  tree: [] as any[],
  applicationList: [] as any[],
  current: {} as { [key: string]: any },
  // 批量操作
  batch: {
    enable: true,
    selectionDataList: [] as { [key: string]: any }[],
  },
})
onMounted(async () => {
  const applications = await query()
  dataTree.value.applicationList = applications.map(item => ({
    label: item.name,
    value: item.id,
    key: item.id,
  }))
  if (applications && applications.length > 0) {
    dataTree.value.search.applicationId = applications[0]?.id
    dataTree.value.search.applicationName = applications[0]?.name || ''
    await getTreeList()
  }
})

async function getTreeList() {
  dataTree.value.loading = true
  try {
    dataTree.value.tree = await tree({ ...dataTree.value.search })
    eachTree(
      dataTree.value.tree,
      (item, parent) => {
        item.key = item.id
        // eslint-disable-next-line no-self-assign
        item.title = item.title
        item.keyLinks = [...(parent.keyLinks || []), item.id]
        return item
      },
      {},
    )
  }
  finally {
    setTimeout(() => {
      dataTree.value.loading = false
    }, 100)
  }
}

function handleTreeSelect(keys: KeyType[]) {
  if (keys[0]) {
    const node = findNodeByKey(keys[0], dataTree.value.tree)
    const parent = findNodeByKey(node?.parentId, dataTree.value.tree, { name: 'title' })
    if (node) {
      node.applicationId = dataTree.value.search.applicationId
      node.applicationName = dataTree.value.search.applicationName
    }

    emits('select', parent, node)
  }
}
function onMove(data?: any) {
  // eslint-disable-next-line no-console
  console.log(data)
}
function onAdd(key?: string) {
  const parent = findNodeByKey(key || '0', dataTree.value.tree, { name: 'title' })
  let sort: number
  if (key) {
    sort = parent.children.length + 1
  }
  else {
    sort = dataTree.value.tree.length + 1
  }
  emits('add', parent, {
    applicationId: dataTree.value.search.applicationId,
    applicationName: dataTree.value.search.applicationName,
    sort,
  })
}
function onEdit(node: any) {
  const current = findNodeByKey(node?.id, dataTree.value.tree)
  const parent = findNodeByKey(node?.parentId, dataTree.value.tree, { name: 'title' })
  current.applicationName = dataTree.value.search.applicationName
  emits('edit', parent, current)
}
function onDel(row?: any) {
  let ids: string[] = []
  if (row) {
    ids.push(row.id)
  }
  else {
    ids = dataTree.value.batch.selectionDataList.map(item => item.id)
  }
  ElMessageBox.confirm(`确认删除数量「${ids.length}」吗？`, '确认信息').then(() => {
    remove(ids).then(() => {
      getTreeList()
      ElMessage.success({
        message: '删除成功',
        center: true,
      })
    })
  }).catch(() => {
  })
}
defineExpose({ getTreeList })
</script>

<template>
  <div>
    <div>
      <ElSelect
        v-model="dataTree.search.applicationId" clearable placeholder="" size="default"
        class="mb w-full"
        @change="() => getTreeList()"
      >
        <ElOption
          v-for="item in dataTree.applicationList || []" :key="item.value" :label="item.label"
          :value="item.value"
        />
      </ElSelect>
      <ElButton @click="() => onAdd()">
        {{ t('common.title.addRoot') }}
      </ElButton>
      <ElButton @click="() => onDel()">
        {{ t('common.title.delete') }}
      </ElButton>
      <ElButton @click="() => getTreeList()">
        {{ t('common.redo') }}
      </ElButton>
    </div>

    <BasicTree :tree-data="dataTree.tree" title="资源列表" checkable toolbar search @select="handleTreeSelect">
      <template #title="{ data }">
        <span class="h-6 flex flex-items-center lh-6">
          <SvgIcon v-if="data.icon" :name="data.icon" :size="16" class="ml-1 mr-1" />
          <ElTag :type="getResourceTagColor(data.resourceType, data.isHidden)" class="mr-1">
            {{ data?.echoMap?.resourceType }}
          </ElTag>
          <span>{{ data.title }}</span>
        </span>
      </template>
      <template #action="{ data }">
        <a class="tree__action" @click.stop="onMove(data)"> {{ t('common.title.move') }} </a>
        <a class="tree__action" @click.stop="onAdd(data.id)"> 新增 </a>
        <a class="tree__action" style="margin-left: 8px;" @click.stop="onEdit(data)"> 编辑 </a>
        <a class="tree__action" style="margin-left: 8px;" @click.stop="onDel(data)"> 删除 </a>
      </template>
    </BasicTree>
  </div>
</template>

<style scoped lang="scss">
.absolute-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .page-header {
    margin-bottom: 0;
  }

  .page-main {
    flex: 1;
    overflow: auto;

    :deep(.main-container) {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: auto;
    }

    .flex-container {
      position: static;
    }
  }
}

.flex-container {
  :deep(.left-side) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  :deep(.main) {
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    .empty {
      font-size: 32px;
      color: var(--el-text-color-placeholder);
      text-align: center;
    }
  }
}
</style>

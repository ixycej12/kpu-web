<script lang="ts" setup>
import { ElMessageBox, ElTable } from 'element-plus'
import type {
  DefGenTablePageQuery,
  DefGenTableResultVO,
} from '@/api/modules/devOperation/developer/model/defGenTableModel'
import type { DataConfig } from '#/global'
import { query } from '@/api/modules/devOperation/tenant/datasourceConfig'
import { importCheck, importTable, selectTableList } from '@/api/modules/devOperation/developer/defGenTable.ts'
import eventBus from '@/util/eventBus'
import usePagination from '@/util/usePagination'

const {
  pagination,
  getParams,
  onSizeChange,
  onCurrentChange,
} = usePagination()

const data = ref<DataConfig>({
  loading: false,
  tableAutoHeight: true,
  /**
   * 详情展示模式
   * router 路由跳转
   * dialog 对话框
   * drawer 抽屉
   */
  formMode: 'router',
  // 详情
  formModeProps: {
    visible: false,
    id: '',
  },
  // 搜索
  search: {
    dsId: '',
  },
  searchFold: false,
  // 批量操作
  batch: {
    enable: true,
    selectionDataList: [],
  },
  // 列表数据
  dataList: [],
  dicts: new Map(),
})
const list = ref<DefGenTableResultVO[]>([])
const table = ref<InstanceType<typeof ElTable>>()

async function getDataList(current?: number) {
  if (current && current === 1) {
    pagination.value.page = current
  }

  const params = getParams<DefGenTablePageQuery>({
    ...data.value.search,
  })
  data.value.dataList = list.value.filter((item, index) => {
    return index >= params.current - 1 && index < (params.current - 1 + params.size)
  })
  pagination.value.total = list.value.length
  // pagination.value.page = params.page
  // pagination.value.size = res.size
}

const dsLoading = ref(false)

function dsList() {
  dsLoading.value = true
  query().then((records) => {
    data.value.dicts.set('DsEnum', records.map(item => ({
      label: item.name,
      value: item.id,
    })))
    data.value.search.dsId = records![0]?.id
    dsLoading.value = false
    getDataLists()
  })
}

async function getDataLists() {
  data.value.loading = true
  const params = getParams<DefGenTablePageQuery>({
    ...data.value.search,
  })
  try {
    list.value = await selectTableList(params)
  }
  catch (e) {
    list.value = []
    console.error(e)
  }
  finally {
    setTimeout(() => {
      data.value.loading = false
    }, 100)
  }
  getDataList()
}

// onMounted(() => {
//
// })
// 每页数量切换
function sizeChange(size: number) {
  onSizeChange(size).then(() => getDataList())
}

// 当前页码切换（翻页）
function currentChange(page = 1) {
  onCurrentChange(page).then(() => getDataList())
}

let isAdd = false

async function onOk() {
  const tableNames = data.value.batch.selectionDataList.map(item => item.name)
  try {
    await importCheck(tableNames) && importTable({ dsId: data.value.search.dsId, tableNames })
    isAdd = true
  }
  catch (e: any) {
    if (e?.response?.data?.msg?.indexOf('是否覆盖导入') > -1) {
      const msg = e?.response?.data?.msg ?? '是否确认导入此表？'
      await ElMessageBox.confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
      await importTable({ dsId: data.value.search.dsId, tableNames })
      isAdd = true
    }
  }
}

function visibleChange(visible: boolean) {
  if (visible) {
    isAdd = false
    dsList()
  }
  else {
    if (isAdd) {
      eventBus.emit('get-data-list')
    }
  }
}

function onDsChange() {
  getDataLists()
}
</script>

<template>
  <BaseDialog
    :ok-button-props="{ disabled: !data.batch.selectionDataList.length }" loading-tip="加载"
    title="导入表结构" width="80%"
    @ok="onOk"
    @visible-change="visibleChange"
  >
    <SearchBar
      :fold="data.searchFold"
      :show-toggle="false"
    >
      <template #default="{ fold }">
        <ElForm
          :model="data.search" class="search-form" inline-message inline label-suffix="：" label-width="100px"
          size="default"
        >
          <ElFormItem label="数据源">
            <ElSelect
              v-model="data.search.dsId" :disabled="data.loading" :loading="dsLoading" placeholder="" size="default"
              w-50
              @change="onDsChange"
            >
              <ElOption
                v-for="item in data?.dicts?.get('DsEnum') || []" :key="item.value" :label="item.label"
                :value="item.value"
              />
            </ElSelect>
          </ElFormItem>
          <ElFormItem>
            <ElButton :disabled="data.loading" type="primary" @click="getDataLists()">
              <template #icon>
                <SvgIcon name="ep:search" />
              </template>
              筛选
            </ElButton>
            <ElButton link type="primary" @click="data.searchFold = !fold">
              <template #icon>
                <SvgIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top'" />
              </template>
              {{ fold ? '展开' : '收起' }}
            </ElButton>
          </ElFormItem>
        </ElForm>
      </template>
    </SearchBar>
    <ElTable
      ref="table" v-loading="data.loading" :data="data.dataList" class="list-table" height="100%"
      highlight-current-row stripe border @selection-change="data.batch.selectionDataList = $event"
    >
      <ElTableColumn v-if="data.batch.enable" align="center" fixed type="selection" />
      <ElTableColumn align="center" label="序号" width="100">
        <template #default="{ $index }">
          {{ (pagination.size * (pagination.page - 1)) + $index + 1 }}
        </template>
      </ElTableColumn>
      <ElTableColumn label="表名称" prop="name" />
      <ElTableColumn label="表描述" prop="comment" />
    </ElTable>
    <ElPagination
      :current-page="pagination.page" :hide-on-single-page="false" :layout="pagination.layout"
      :page-size="pagination.size" :page-sizes="pagination.sizes" :total="pagination.total"
      background class="pagination" @size-change="sizeChange" @current-change="currentChange"
    />
  </BaseDialog>
</template>

<style lang="scss" scoped>
// scss
</style>

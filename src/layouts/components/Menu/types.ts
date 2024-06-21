import { createInjectionKey } from '@/util/injectionKeys'
import type { Menu } from '#/global'

export interface MenuItem {
  index: string
  indexPath: string[]
  active?: boolean
}

export interface MenuProps {
  menu: Menu.recordRaw[]
  value: string
  accordion?: boolean
  defaultOpeneds?: string[]
  alwaysOpeneds?: string[]
  mode?: 'horizontal' | 'vertical'
  collapse?: boolean
  showCollapseName?: boolean
  rounded: boolean
}

export interface MenuInjection {
  props: MenuProps
  items: Record<string, MenuItem>
  subMenus: Record<string, MenuItem>
  activeIndex: MenuProps['value']
  openedMenus: string[]
  alwaysOpenedsMenus: string[]
  mouseInMenu: string[]
  isMenuPopup: boolean
  openMenu: (index: string, indexPath: string[]) => void
  closeMenu: (index: string | string[]) => void
  handleMenuItemClick: (index: string, meta?: Menu.recordRaw['meta']) => void
  handleSubMenuClick: (index: string, indexPath: string[]) => void
}

export const rootMenuInjectionKey = createInjectionKey<MenuInjection>('rootMenu')
export interface I18nTitle {
  (key: string | undefined | (() => string) | Function): string
}
export const i18nTitleInjectionKey = createInjectionKey<I18nTitle>('i18nTitle')

export interface SubMenuProps {
  uniqueKey: string[]
  menu: Menu.recordRaw
  level?: number
}

export interface SubMenuItemProps {
  uniqueKey: string[]
  item: Menu.recordRaw
  level?: number
  subMenu?: boolean
  expand?: boolean
  alwaysExpand?: boolean
}

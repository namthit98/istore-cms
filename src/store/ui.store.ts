import { observable, action, runInAction } from 'mobx'
import { RootStore } from './root.store'
import { ClickParam } from 'antd/lib/menu'

export class UIStore {
  rootStore!: RootStore
  loadRootStore(rootStore: RootStore) {
    runInAction(() => {
      this.rootStore = rootStore
    })
  }

  @observable openKeys: string[] = ['sub1', 'sub2', 'sub3']
  @observable selectedKeys: string = '0'
  @observable collapsed: boolean = false

  @action
  handleOpenChange = (data: string[]) => {
    this.openKeys = data
  }

  @action
  handleClick = (value: ClickParam) => {
    if (value.key === '1') {
      this.selectedKeys = '0'
      return
    }

    this.selectedKeys = value.key
  }

  @action
  handleCollapsed = (value: boolean) => {
    this.openKeys = value ? [] : ['sub1', 'sub2', 'sub3']
    this.collapsed = value
  }
}

export default new UIStore()

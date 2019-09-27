import { observable, action, runInAction } from 'mobx'
import { RootStore } from './root.store'
import { ClickParam } from 'antd/lib/menu'

export class SaleLayoutUIStore {
  rootStore!: RootStore
  loadRootStore(rootStore: RootStore) {
    runInAction(() => {
      this.rootStore = rootStore
    })
  }

  @observable selectedKeys: string = '1'

  @action
  handleClick = (value: ClickParam) => {
    if (value.key === '0') {
      this.selectedKeys = '1'
      return
    }

    this.selectedKeys = value.key
  }
}

export default new SaleLayoutUIStore()

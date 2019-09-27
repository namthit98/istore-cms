import { TodoStore } from './todo.store'
import { MainLayoutUIStore } from './main-layout-ui.store'
import { runInAction } from 'mobx'
import { Agent } from '../libs/agent'
import { SaleLayoutUIStore } from './sale-layout-ui.store'

export class RootStore {
  todoStore!: TodoStore
  mainLayoutUIStore!: MainLayoutUIStore
  saleLayoutUIStore!: SaleLayoutUIStore
  agent!: Agent

  constructor() {
    runInAction(() => {
      this.agent = new Agent()
      this.agent.loadRootStore(this)

      this.mainLayoutUIStore = new MainLayoutUIStore()
      this.mainLayoutUIStore.loadRootStore(this)

      this.saleLayoutUIStore = new SaleLayoutUIStore()
      this.saleLayoutUIStore.loadRootStore(this)

      this.todoStore = new TodoStore()
      this.todoStore.loadRootStore(this)
    })
  }
}

export const rootStore = new RootStore()

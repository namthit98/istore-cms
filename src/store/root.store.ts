import { TodoStore } from './todo.store'
import { UIStore } from './ui.store'
import { runInAction } from 'mobx'
import { Agent } from '../libs/agent'

export class RootStore {
  todoStore!: TodoStore
  uiStore!: UIStore
  agent!: Agent

  constructor() {
    runInAction(() => {
      this.agent = new Agent()
      this.agent.loadRootStore(this)

      this.uiStore = new UIStore()
      this.uiStore.loadRootStore(this)

      this.todoStore = new TodoStore()
      this.todoStore.loadRootStore(this)
    })
  }
}

export const rootStore = new RootStore()

import { observable, action, runInAction, set } from 'mobx'
import { RootStore } from './root.store'

export interface ITodo {
  _id?: number
  title: string
}

export class TodoStore {
  rootStore!: RootStore
  loadRootStore(rootStore: RootStore) {
    runInAction(() => {
      this.rootStore = rootStore
    })
  }

  @observable todos: ITodo[] = []
  @observable todo: ITodo | null = null
  @observable loading: boolean = false

  @action
  setLoading(state: boolean) {
    this.loading = state
  }

  @action
  setTodos(todos: ITodo[]) {
    this.todos = todos
  }

  @action
  setTodo(todo: ITodo | null) {
    this.todo = todo
  }

  @action
  changeTodo(property: keyof ITodo, value: any) {
    if (this.todo) {
      set(this.todo, { [property]: value })
    }
  }

  @action
  updateTodoByIndex(todo: ITodo, index: number) {
    this.todos[index] = todo
  }

  async fetchTodos(callback: Function | null = null) {
    try {
      this.setLoading(true)
      const todos: ITodo[] = await this.rootStore!.agent.get<ITodo[]>('/todos')
      console.log(todos)
      this.setTodos(todos.reverse())
      if (callback) callback()
    } catch (error) {
      console.log('Lỗi rồi nehs')
    } finally {
      this.setLoading(false)
    }
  }

  async createTodo(todo: ITodo, callback: Function | null = null) {
    try {
      this.setLoading(true)
      const response: ITodo = await this.rootStore!.agent.post<ITodo>('/todos', todo)
      this.setTodos([response, ...this.todos])
      if (callback) callback()
    } catch (error) {
      console.log('lỗi rồi nhé')
    } finally {
      this.setLoading(false)
    }
  }

  async deleteTodo(todo: ITodo, callback: Function | null = null) {
    try {
      this.setLoading(true)
      const response: ITodo = await this.rootStore!.agent.delete<ITodo>(`/todos/${todo._id}`)
      this.setTodos(this.todos.filter((element: any) => element.id !== response._id))
      if (callback) callback()
    } catch (eror) {
      console.log('lỗi rồi nhé!')
    } finally {
      this.setLoading(false)
    }
  }

  async fetchTodo(todo: ITodo, callback: Function | null = null) {
    try {
      this.setLoading(true)
      const response: ITodo = await this.rootStore!.agent.get<ITodo>(`/todos/${todo._id}`)
      this.setTodo(response)
      if (callback) callback()
    } catch (error) {
      console.log('loi rồi nhessssssss')
    } finally {
      this.setLoading(false)
    }
  }

  async updateTodo(callback: Function | null = null) {
    try {
      if (this.todo == null) return
      this.setLoading(true)

      const response: ITodo = await this.rootStore!.agent.put<ITodo>(
        `/todos/${this.todo._id}`,
        this.todo,
      )
      const index = this.todos.findIndex((todo: any) => todo.id === this.todo!._id)

      this.updateTodoByIndex(response, index)
      this.setTodo(null)
      if (callback) callback()
    } catch (error) {
      console.log('Lỗi rồi nehs')
    } finally {
      this.setLoading(false)
    }
  }
}

export default new TodoStore()

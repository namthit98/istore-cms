import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { runInAction } from 'mobx'
import { RootStore } from '../store/root.store'

const WORK_URL = 'https://5d84ee69baffda001476b595.mockapi.io/api'

export class Agent {
  rootStore!: RootStore
  loadRootStore(rootStore: RootStore) {
    runInAction(() => {
      this.rootStore = rootStore
    })
  }
  agent: AxiosInstance = axios.create()
  get<T = any>(endpointUrl: string, config?: AxiosRequestConfig): Promise<T> {
    return this.agent.get<T>(WORK_URL + endpointUrl, config).then(response => response.data)
  }
  post<T = any>(endpointUrl: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.agent.post<T>(WORK_URL + endpointUrl, data, config).then(response => response.data)
  }
  put<T = any>(endpointUrl: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.agent.put<T>(WORK_URL + endpointUrl, data, config).then(response => response.data)
  }
  delete<T = any>(endpointUrl: string, config?: AxiosRequestConfig): Promise<T> {
    return this.agent.delete<T>(WORK_URL + endpointUrl, config).then(response => response.data)
  }
  // authenticationReact = reaction(
  //   () => {
  //     return this.rootStore.authenticationStore.token
  //   },
  //   token => {
  //     if (token) {
  //       this.agent = axios.create({
  //         headers: { Authorization: `Bearer ${token}` }
  //       })
  //     } else {
  //       this.agent = axios.create()
  //     }
  //   },
  //   {
  //     fireImmediately: true
  //   }
  // )
}

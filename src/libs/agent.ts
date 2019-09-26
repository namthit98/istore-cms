import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { runInAction } from 'mobx'
import { RootStore } from '../store/root.store'
import { SERVER_URL } from '../constants'

export class Agent {
  rootStore!: RootStore
  loadRootStore(rootStore: RootStore) {
    runInAction(() => {
      this.rootStore = rootStore
    })
  }
  agent: AxiosInstance = axios.create()
  get<T = any>(endpointUrl: string, config?: AxiosRequestConfig): Promise<T> {
    return this.agent.get<T>(`${SERVER_URL}${endpointUrl}`, config).then(response => response.data)
  }
  post<T = any>(endpointUrl: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.agent
      .post<T>(`${SERVER_URL}${endpointUrl}`, data, config)
      .then(response => response.data)
  }
  put<T = any>(endpointUrl: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.agent
      .put<T>(`${SERVER_URL}${endpointUrl}`, data, config)
      .then(response => response.data)
  }
  delete<T = any>(endpointUrl: string, config?: AxiosRequestConfig): Promise<T> {
    return this.agent
      .delete<T>(`${SERVER_URL}${endpointUrl}`, config)
      .then(response => response.data)
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

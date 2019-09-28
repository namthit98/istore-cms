import React from 'react'
import { Provider } from 'mobx-react'
import { rootStore } from './store/root.store'
import { Router } from 'react-router-dom'
import { configure } from 'mobx'
import 'antd/dist/antd.css'

import history from './history'

import saleLayoutUIStore from './store/sale-layout-ui.store'
import mainLayoutUIStore from './store/main-layout-ui.store'
import ListRoute from './config/Routes'

configure({ enforceActions: 'always' })

const App: React.FC = () => {
  // return <Auth />

  return (
    <Provider
      rootStore={rootStore}
      saleLayoutUIStore={saleLayoutUIStore}
      mainLayoutUIStore={mainLayoutUIStore}
    >
      <Router history={history}>
        <ListRoute />
      </Router>
    </Provider>
  )
}

export default App

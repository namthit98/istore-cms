import React from 'react'
import { Provider } from 'mobx-react'
import { rootStore } from './store/root.store'
import { Router, Route, Switch } from 'react-router-dom'
import Dashboard from './views/dashboard/Dashboard'
import Order from './views/order/Order'
import Product from './views/product/Product'
import Shop from './views/shop/Shop'
import { configure } from 'mobx'
import 'antd/dist/antd.css'
import withMainLayout from './layouts/MainLayout'
import withSaleLayout from './layouts/SaleLayout'
import uiStore from './store/ui.store'
import history from './history'
import Sale from './views/sale/Sale'

configure({ enforceActions: 'always' })

const App: React.FC = () => {
  return (
    <Provider rootStore={rootStore} uiStore={uiStore}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={withMainLayout(Dashboard)} />
          <Route path="/order" exact component={withMainLayout(Order)} />
          <Route path="/product" exact component={withMainLayout(Product)} />
          <Route path="/shop" exact component={withMainLayout(Shop)} />
          <Route path="/sale" exact component={withSaleLayout(Sale)} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

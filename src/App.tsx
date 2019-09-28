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
import history from './history'
import Sale from './views/sale/Sale'
import SaleEntry from './views/sale-entry/SaleEntry'
import saleLayoutUIStore from './store/sale-layout-ui.store'
import mainLayoutUIStore from './store/main-layout-ui.store'
// import Auth from './views/Auth/Auth'

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
        <Switch>
          <Route path="/" exact component={withMainLayout(Dashboard)} />
          <Route path="/orders" exact component={withMainLayout(Order)} />
          <Route path="/products" exact component={withMainLayout(Product)} />
          <Route path="/shops" exact component={withMainLayout(Shop)} />
          <Route path="/sales" exact component={withSaleLayout(Sale)} />
          <Route path="/sale-entries" exact component={withSaleLayout(SaleEntry)} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

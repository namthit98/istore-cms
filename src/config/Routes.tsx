import React from 'react'
import withSaleLayout from '../layouts/SaleLayout'
import Sale from '../views/sale/Sale'
import Dashboard from '../views/dashboard/Dashboard'
import withMainLayout from '../layouts/MainLayout'
import Order from '../views/order/Order'
import Product from '../views/product/Product'
import Shop from '../views/shop/Shop'
import SaleEntry from '../views/sale-entry/SaleEntry'
import { Switch, Route } from 'react-router-dom'
import Staff from '../views/staff/Staff'
import CreateStaff from '../views/staff/CreateStaff'
import { has } from 'lodash'
export interface IRoute {
  id: number | string
  icon?: string
  text: string | undefined
  path?: string
  exact: boolean
  main?: React.FunctionComponent
  subRoute?: IRoute[]
  visibleOnMenu: boolean
  layout: 'main' | 'sale' | 'main-sale'
}

let routeIndex = 0
let subRouteIndex = 0
export const routes: IRoute[] = [
  {
    id: routeIndex++,
    icon: 'printer',
    text: 'Bán Hàng',
    path: '/sales',
    exact: true,
    main: withSaleLayout(Sale),
    visibleOnMenu: true,
    layout: 'main-sale',
  },
  {
    id: routeIndex++,
    icon: 'dashboard',
    text: 'Dashboard',
    path: '/',
    exact: true,
    main: withMainLayout(Dashboard),
    visibleOnMenu: true,
    layout: 'main-sale',
  },
  {
    id: `sub${subRouteIndex++}`,
    icon: 'shopping',
    text: 'Quản lý nhân viên',
    exact: true,
    visibleOnMenu: true,
    layout: 'main',
    subRoute: [
      {
        id: routeIndex++,
        text: 'Tất cả nhân viên',
        path: '/staffs',
        exact: true,
        main: withMainLayout(Staff),
        visibleOnMenu: true,
        layout: 'main',
      },
      {
        id: routeIndex++,
        text: 'Thêm nhân viên',
        path: '/staffs/create',
        exact: true,
        main: withMainLayout(CreateStaff),
        visibleOnMenu: true,
        layout: 'main',
      },
    ],
  },
  {
    id: `sub${subRouteIndex++}`,
    icon: 'shopping',
    text: 'Quản lý sản phẩm',
    exact: true,
    visibleOnMenu: true,
    layout: 'main',
    subRoute: [
      {
        id: routeIndex++,
        text: 'Tất cả sản phẩm',
        path: '/products',
        exact: true,
        main: withMainLayout(Product),
        visibleOnMenu: true,
        layout: 'main',
      },
      {
        id: routeIndex++,
        text: 'Thêm sản phẩm',
        path: '/products/create',
        exact: true,
        main: withMainLayout(Product),
        visibleOnMenu: true,
        layout: 'main',
      },
    ],
  },
  {
    id: `sub${subRouteIndex++}`,
    icon: 'book',
    text: 'Quản lý đơn hàng',
    exact: true,
    visibleOnMenu: true,
    layout: 'main',
    subRoute: [
      {
        id: routeIndex++,
        text: 'Tất cả đơn hàng',
        path: '/orders',
        exact: true,
        main: withMainLayout(Order),
        visibleOnMenu: true,
        layout: 'main',
      },
    ],
  },
  {
    id: `sub${subRouteIndex++}`,
    icon: 'shop',
    text: 'Quản lý cửa hàng',
    exact: true,
    visibleOnMenu: true,
    layout: 'main',
    subRoute: [
      {
        id: routeIndex++,
        text: 'Danh mục của cửa hàng',
        path: '/shops',
        exact: true,
        main: withMainLayout(Shop),
        visibleOnMenu: true,
        layout: 'main',
      },
      {
        id: routeIndex++,
        text: 'Thiết lập cửa hàng',
        path: '/shops',
        exact: true,
        main: withMainLayout(Shop),
        visibleOnMenu: true,
        layout: 'main',
      },
    ],
  },
  {
    id: routeIndex++,
    icon: 'printer',
    text: 'Đơn hàng',
    path: '/sale-entries',
    exact: true,
    main: withSaleLayout(SaleEntry),
    visibleOnMenu: true,
    layout: 'sale',
  },
]

export const routeToTitleMap = routes.reduce(
  (result: { [key: string]: { text: string; id: number | string } }, current: IRoute) => {
    if (!current.subRoute && current.path && !has(result, current.path)) {
      result[current.path] = {
        text: current.text || '',
        id: current.id || 0,
      }
      return result
    }

    if (current.subRoute) {
      current.subRoute.forEach((subRoute: IRoute) => {
        if (subRoute.path && !has(result, subRoute.path)) {
          result[subRoute.path] = {
            text: subRoute.text || '',
            id: subRoute.id || 0,
          }
          return result
        }
      })
    }

    return result
  },
  {},
)

const ListRoute: React.FC = () => {
  return (
    <Switch>
      {routes.map((route: IRoute) => {
        if (!route.subRoute) {
          return (
            <Route key={route.id} path={route.path} exact={route.exact} component={route.main} />
          )
        }

        return route.subRoute.map((route: IRoute) => {
          return (
            <Route key={route.id} path={route.path} exact={route.exact} component={route.main} />
          )
        })
      })}
    </Switch>
  )
}

export default ListRoute

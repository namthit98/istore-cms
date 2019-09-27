import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { SaleLayoutUIStore } from '../store/sale-layout-ui.store'

const { Content, Footer } = Layout

interface IProps {
  saleLayoutUIStore?: SaleLayoutUIStore
  [key: string]: any
}

const withSaleLayout = (Comp: any) => {
  return inject('saleLayoutUIStore')(
    observer((props: IProps) => {
      if (!props.saleLayoutUIStore) return null

      return (
        <Layout style={{ height: 'calc(100vh - 55px)', overflowY: 'auto' }}>
          <Content>
            <div style={{ background: '#fff', minHeight: 'calc(100vh - 66px)' }}>
              <Comp {...props} />
            </div>
          </Content>
          <Footer
            style={{ background: '#fff', padding: 0, position: 'fixed', bottom: 0, width: '100%' }}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[props.saleLayoutUIStore!.selectedKeys]}
              onClick={props.saleLayoutUIStore!.handleClick}
              style={{ lineHeight: '64px', display: 'flex', alignItems: 'center' }}
            >
              <Menu.Item key="0">
                <Link to="/">
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/sales">
                  <Icon type="printer" />
                  <span>Bán Hàng</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/sale-entries">
                  <Icon type="book" />
                  <span>Đơn Hàng</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="3">nav 2</Menu.Item>

              <Menu.Item key="4">nav 2</Menu.Item>

              <Menu.Item key="5">nav 2</Menu.Item>

              <Menu.Item key="6">nav 3</Menu.Item>
            </Menu>
          </Footer>
        </Layout>
      )
    }),
  )
}

export default withSaleLayout

import React from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
import { inject, observer } from 'mobx-react'
import { UIStore } from '../store/ui.store'
import { Link } from 'react-router-dom'

const { Content, Footer } = Layout

interface IProps {
  uiStore?: UIStore
  [key: string]: any
}

const withSaleLayout = (Comp: any) => {
  return inject('uiStore')(
    observer((props: IProps) => {
      if (!props.uiStore) return null

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
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px', display: 'flex', alignItems: 'center' }}
            >
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>

              <Menu.Item key="3">nav 2</Menu.Item>

              <Menu.Item key="4">nav 2</Menu.Item>

              <Menu.Item key="5">nav 2</Menu.Item>

              <Menu.Item key="6">nav 2</Menu.Item>

              <Menu.Item key="7">nav 3</Menu.Item>
            </Menu>
          </Footer>
        </Layout>
      )
    }),
  )
}

export default withSaleLayout

import React, { useEffect } from 'react'
import { Layout, Menu, Icon, Typography, Dropdown, Avatar, Badge, BackTop, PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { MainLayoutUIStore } from '../store/main-layout-ui.store'
import styled from 'styled-components'
import { routes, IRoute, routeToTitleMap } from '../config/Routes'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title } = Typography

interface IProps {
  mainLayoutUIStore?: MainLayoutUIStore
  [key: string]: any
}

const StyledLogo = styled(Title)`
  background: linear-gradient(
    135deg,
    rgba(73, 155, 234, 1) 15%,
    rgba(65, 149, 233, 1) 30%,
    rgba(43, 132, 230, 1) 69%,
    rgba(32, 124, 229, 1) 88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0 !important;
`

const withMainLayout = (Comp: any) => {
  return inject('mainLayoutUIStore')(
    observer((props: IProps) => {
      if (!props.mainLayoutUIStore) return null

      useEffect(() => {
        props.mainLayoutUIStore!.setSelectedKeys(
          routeToTitleMap[props.location.pathname].id.toString(),
        )
      }, [props.location.pathname, props.mainLayoutUIStore])

      return (
        <>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              width={250}
              theme="dark"
              collapsible
              collapsed={props.mainLayoutUIStore!.collapsed}
              onCollapse={value => props.mainLayoutUIStore!.handleCollapsed(value)}
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                zIndex: 1000,
              }}
            >
              <div
                className="logo"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
              >
                <StyledLogo level={props.mainLayoutUIStore!.collapsed ? 3 : 1}>iStore</StyledLogo>
              </div>
              <Menu
                theme="dark"
                openKeys={props.mainLayoutUIStore.openKeys}
                onOpenChange={props.mainLayoutUIStore.handleOpenChange}
                selectedKeys={[props.mainLayoutUIStore.selectedKeys]}
                onClick={props.mainLayoutUIStore.handleClick}
                mode="inline"
              >
                {routes
                  .filter((route: IRoute) => ['main', 'main-sale'].includes(route.layout))
                  .map((route: IRoute) => {
                    if (!route.subRoute) {
                      return (
                        <Menu.Item key={route.id}>
                          <Link to={route.path!}>
                            <Icon type={route.icon!} />
                            <span>{route.text}</span>
                          </Link>
                        </Menu.Item>
                      )
                    }

                    return (
                      <SubMenu
                        key={route.id}
                        title={
                          <span>
                            <Icon type={route.icon!} />
                            <span>{route.text}</span>
                          </span>
                        }
                      >
                        {route.subRoute.map((subRoute: IRoute) => {
                          return (
                            <Menu.Item key={subRoute.id}>
                              <Link to={subRoute.path!}>
                                <span>{subRoute.text}</span>
                              </Link>
                            </Menu.Item>
                          )
                        })}
                      </SubMenu>
                    )
                  })}
              </Menu>
            </Sider>
            <Layout style={{ marginLeft: props.mainLayoutUIStore!.collapsed ? 80 : 250 }}>
              <Header
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  background: '#fff',
                  paddingRight: 70,
                  paddingLeft: 0,
                }}
              >
                <PageHeader
                  onBack={() => {
                    props.history.goBack()
                  }}
                  style={{ marginRight: 'auto' }}
                  title={routeToTitleMap[props.location.pathname].text}
                />
                <Dropdown
                  placement="bottomCenter"
                  overlay={
                    <Menu>
                      <Menu.Item style={{ maxWidth: 280, whiteSpace: 'pre-line' }}>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                          1st menu item1st menu item1st menu item1st menu item1st menu item1st menu
                          item
                        </a>
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item style={{ maxWidth: 280, whiteSpace: 'pre-line' }}>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                          2nd menu item1st menu item1st menu item1st menu item1st menu item1st menu
                          item1st menu item
                        </a>
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Item style={{ maxWidth: 280, whiteSpace: 'pre-line' }}>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                          3rd menu item1st menu item1st menu item
                        </a>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Badge count={1}>
                    <Avatar size={34} icon="mail" />
                  </Badge>
                </Dropdown>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Dropdown
                  placement="bottomCenter"
                  overlay={
                    <Menu>
                      <Menu.Item>Thông tin tài khoản</Menu.Item>
                      <Menu.Item>Đổi mật khẩu</Menu.Item>
                      <SubMenu title="sub menu">
                        <Menu.Item>5d menu item</Menu.Item>
                        <Menu.Item>6th menu item</Menu.Item>
                      </SubMenu>
                      <Menu.Item>Đăng xuất</Menu.Item>
                    </Menu>
                  }
                >
                  <Avatar style={{ backgroundColor: '#87d068' }} size={34} icon="user" />
                </Dropdown>
              </Header>
              <Content style={{ margin: '16px 0 0 0', minHeight: 'calc(100vh - 20%)' }}>
                <div style={{ height: '100%', overflowY: 'auto' }}>
                  <Comp {...props} />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>iStore ©2019 Created by NamHandsome</Footer>
            </Layout>
          </Layout>
          <BackTop />
        </>
      )
    }),
  )
}

export default withMainLayout

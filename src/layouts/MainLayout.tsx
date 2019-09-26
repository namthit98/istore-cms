import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Typography, Dropdown, Avatar, Badge } from 'antd'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import uiStore, { UIStore } from '../store/ui.store'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title } = Typography

interface IProps {
  uiStore?: UIStore
  [key: string]: any
}

const withMainLayout = (Comp: any) => {
  return inject('uiStore')(
    observer((props: IProps) => {
      if (!props.uiStore) return null

      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            width={250}
            theme="dark"
            collapsible
            collapsed={props.uiStore!.collapsed}
            onCollapse={value => props.uiStore!.handleCollapsed(value)}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
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
              <Title
                level={props.uiStore!.collapsed ? 3 : 1}
                type="warning"
                style={{ marginBottom: 0 }}
              >
                iStore
              </Title>
            </div>
            <Menu
              theme="dark"
              openKeys={uiStore.openKeys}
              onOpenChange={uiStore.handleOpenChange}
              selectedKeys={[uiStore.selectedKeys]}
              onClick={uiStore.handleClick}
              mode="inline"
            >
              <Menu.Item key="0">
                <Link to="/">
                  <Icon type="dashboard" />
                  <span>Dashboard</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/sale">
                  <Icon type="printer" />
                  <span>Bán Hàng</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="shopping" />
                    <span>Quản lý sản phẩm</span>
                  </span>
                }
              >
                <Menu.Item key="2">
                  <Link to="/product">
                    <span>Tất cả sản phẩm</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/product">
                    <span>Thêm sản phẩm</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="book" />
                    <span>Quản lý đơn hàng</span>
                  </span>
                }
              >
                <Menu.Item key="4">
                  <Link to="/order">
                    <span>Tất cả đơn hàng</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="shop" />
                    <span>Quản lý Cửa Hàng</span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Link to="/shop">
                    <span>Danh mục của cửa hàng</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/shop">
                    <span>Thiết lập cửa hàng</span>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ marginLeft: props.uiStore!.collapsed ? 80 : 250 }}>
            <Header
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                background: '#fff',
                paddingRight: 70,
              }}
            >
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
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb> */}
              <div style={{ padding: 24, background: '#fff', height: '100%', overflowY: 'auto' }}>
                <Comp {...props} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>iStore ©2019 Created by NamHandsome</Footer>
          </Layout>
        </Layout>
      )
    }),
  )
}

export default withMainLayout

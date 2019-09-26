import React, { useState, ReactElement } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Typography, Dropdown, Avatar, Badge } from 'antd'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title } = Typography

interface IProps {
  children: ReactElement
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} theme="dark" collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div
          className="logo"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Title level={collapsed ? 3 : 1} type="warning" style={{ marginBottom: 0 }}>
            iStore
          </Title>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1', 'sub2', 'sub3']}
          mode="inline"
        >
          <Menu.Item key="1">
            <Icon type="dashboard" />
            <span>Dashboard</span>
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
            <Menu.Item key="2">Tất cả sản phẩm</Menu.Item>
            <Menu.Item key="3">Thêm sản phẩm</Menu.Item>
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
            <Menu.Item key="4">Tất cả đơn hàng</Menu.Item>
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
            <Menu.Item key="5">Danh mục của cửa hàng</Menu.Item>
            <Menu.Item key="6">Thiết lập cửa hàng</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
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
                    1st menu item1st menu item1st menu item1st menu item1st menu item1st menu item
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
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 20%)' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>iStore ©2019 Created by NamHandsome</Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout

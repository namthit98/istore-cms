import React from 'react'
import { Row, Col, Table, Button, Input } from 'antd'
import { Link } from 'react-router-dom'

const { Search } = Input

const Staff = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  return (
    <Row gutter={8}>
      <Col lg={24}>
        <div style={{ padding: 16, background: '#fff' }}>
          <Row gutter={8}>
            <Col span={12}>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 300 }}
              />
            </Col>
            <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/staffs/create">
                <Button type="primary">Thêm nhân viên</Button>
              </Link>
            </Col>
          </Row>

          <br />

          <Table dataSource={dataSource} columns={columns} />
        </div>
      </Col>
    </Row>
  )
}

export default Staff

import React from 'react'
import { Row, Col, Input } from 'antd'

const Todo = () => {
  return (
    <React.Fragment>
      <Row gutter={24}>
        <Col span={12} offset={6}>
          <h1>Todo</h1>
        </Col>
        <Col span={12} offset={6}>
          <Input placeholder="Input todo" />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Todo

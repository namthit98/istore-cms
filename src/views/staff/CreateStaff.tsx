import React from 'react'
import { Form, Row, Col, Input, DatePicker, Radio, Button } from 'antd'
import UploadUserImage from './UploadUserImage'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import RoleTree from './RoleTree'

interface IProps {
  form: WrappedFormUtils
  // [key: string]: any
}

const CreateStaff: React.FC<IProps> = ({ form }) => {
  const { getFieldDecorator } = form

  const handleSubmit = (e: any) => {
    e.preventDefault()
    form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  return (
    <Row gutter={16}>
      <Form onSubmit={handleSubmit}>
        <Col lg={16}>
          <div style={{ padding: 16, background: '#fff' }}>
            <Row gutter={16}>
              <Col xl={12}>
                <Form.Item label="Họ và tên" validateStatus="success">
                  {getFieldDecorator('fullname', {
                    rules: [
                      {
                        required: true,
                        message: 'Mời nhập họ và tên',
                      },
                    ],
                  })(<Input placeholder="Mời nhập họ và tên" />)}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item label="Số điện thoại">
                  {getFieldDecorator('phone', {
                    rules: [
                      {
                        required: true,
                        message: 'Mời nhập số điện thoại',
                      },
                    ],
                  })(<Input placeholder="Mời nhập số điện thoại" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xl={12}>
                <Form.Item label="Email">
                  {getFieldDecorator('email', {
                    rules: [
                      {
                        type: 'email',
                        message: 'Email không hợp lệ',
                      },
                      // {
                      //   required: true,
                      //   message: 'Mời nhập email',
                      // },
                    ],
                  })(<Input placeholder="Mời nhập email" id="success" />)}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item label="Chứng minh thư">
                  {getFieldDecorator('numberId', {
                    rules: [],
                  })(<Input placeholder="Mời nhập chứng minh thư" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xl={6}>
                <Form.Item label="Ngày sinh">
                  {getFieldDecorator('birthday', {
                    // rules: [{ required: true, message: 'Mời chọn ngày sinh' }],
                  })(<DatePicker style={{ width: '100%' }} />)}
                </Form.Item>
              </Col>
              <Col xl={6}>
                <Form.Item label="Giới tính">
                  {getFieldDecorator('gender', {
                    rules: [{ required: true, message: 'Mời chọn giới tính' }],
                    initialValue: 'male',
                  })(
                    <Radio.Group>
                      <Radio value={'male'}>Nam</Radio>
                      <Radio value={'female'}>Nữ</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item label="Quê quán">
                  {getFieldDecorator('country', {
                    rules: [],
                  })(<Input placeholder="Mời nhập quê quán" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Ảnh">
                  <UploadUserImage />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={8}>
          <div style={{ padding: 16, background: '#fff' }}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Tài khoản">
                  {getFieldDecorator('username', {
                    rules: [
                      {
                        required: true,
                        message: 'Mời nhập tài khoản',
                      },
                    ],
                  })(<Input placeholder="Mời nhập tài khoản" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xl={12}>
                <Form.Item label="Mật khẩu">
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: 'Mời nhập mật khẩu',
                      },
                    ],
                  })(<Input type="password" placeholder="Mời nhập mật khẩu" />)}
                </Form.Item>
              </Col>
              <Col xl={12}>
                <Form.Item label="Xác nhận mật khẩu">
                  {getFieldDecorator('repassword', {
                    rules: [
                      {
                        required: true,
                        message: 'Mời nhập mật khẩu',
                      },
                    ],
                  })(<Input type="password" placeholder="Mời nhập mật khẩu" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Quyền">
                  {getFieldDecorator('roles', {
                    rules: [
                      {
                        required: true,
                        message: 'Mời chọn quyền',
                      },
                    ],
                  })(<RoleTree />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Form>
    </Row>
  )
}

const WrappedCreateStaff = Form.create({ name: 'create_staff_form' })(CreateStaff)

export default WrappedCreateStaff

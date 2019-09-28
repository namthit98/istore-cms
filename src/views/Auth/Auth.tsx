import React from 'react'
import styled from 'styled-components'
import background from '../../assets/background.jpg'
import { Form, Input, Icon, Checkbox, Button, Typography } from 'antd'

const { Title } = Typography

const StyledLayout = styled.section`
  display: flex;
  height: 100vh;
`

const StyledAside = styled.aside`
  flex-basis: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

const StyledContent = styled.main`
  flex-basis: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`
const StyledTitle = styled(Title)`
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(73, 155, 234, 1) 15%,
    rgba(65, 149, 233, 1) 30%,
    rgba(43, 132, 230, 1) 69%,
    rgba(32, 124, 229, 1) 88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Auth = (props: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <StyledLayout>
      <StyledAside>
        <img src={background} width="100%" height="100%" alt="iStore background" />
      </StyledAside>

      <StyledContent>
        <Form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
          <StyledTitle>iStore</StyledTitle>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Xin mời nhập tài khoản' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Tài khoản"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Xin mời nhập mật khẩu' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Mật khẩu"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Nhớ tài khoản</Checkbox>)}
            <a style={{ float: 'right' }} href="">
              Quên mật khẩu
            </a>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </StyledContent>
    </StyledLayout>
  )
}

export default Form.create({ name: 'auth_form' })(Auth)

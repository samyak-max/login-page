import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import Password from 'antd/lib/input/Password';
import { useState } from 'react';


const ContentFile = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const login = async () => {
    let credentials = {email, password};
    let result = await fetch("https://reqres.in/api/login", {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(credentials)
    });
    result = await result.json()
    console.log(result)
    if (result.token === 'QpwL5tke4Pnpja7X4'){
      alert("SUCCESS!")
    }
    else {
      alert("ERROR!")
    }
  }


  return (
    <>
      <h1 className='welcome'>Welcome Back</h1>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={login} className="login-form-button">
          Log in
        </Button>
        Or <a href="/">register now!</a>
      </Form.Item>
    </Form>
    </>
  );
};

export default ContentFile

import React from 'react'
import { Form, Input, Button } from 'antd-mobile'
import { useState } from 'react'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import './login.css'
import { http, BASE_URL } from '../../shared/http'
import { useSystemStore } from './../../store/system'
import { useNavigate } from "react-router-dom";




export function Login() {
    const [visible, setVisible] = useState(false)
    const setToken =  useSystemStore(state => state.setToken)
    const setUser =  useSystemStore(state => state.setUser)
    const navigate = useNavigate();


    const onFinish = (values) => {
        console.warn(values);
        http.post('/passport/login', values).subscribe(res => {
            console.log(res)
            if (res.code == 200) {
                const { token, user } = res.data;
                console.log(token, user)
                setToken(token)
                setUser(user);
                navigate('/home')
            }
        })
    }



    return (
        <div className="login-page">
            <h2 className='h-2 text-center'> 用户登录</h2>
            <Form onFinish={onFinish} layout='horizontal' mode='card'  footer={
                <Button block type='submit' color='primary' size='large'>
                    提交
                </Button>
            }>

                <Form.Item label='用户名' name="username" rules={[{ required: true, message: '用户名不能为空' }]}>
                    <Input placeholder='请输入'   />
                </Form.Item>
                <Form.Item label='密码' name="password" rules={[{ required: true, message: '用户名不能为空' }]}>
                    <div className="password">
                        <Input placeholder='请输入' type={visible ? 'text' : 'password'}  />
                        <div className="eye">
                            {!visible ? (
                                <EyeInvisibleOutline onClick={() => setVisible(true)} />
                            ) : (
                                <EyeOutline onClick={() => setVisible(false)} />
                            )}
                        </div>
                    </div>
                </Form.Item>
                <Form.Header />
            </Form>


        </div>
    )
}
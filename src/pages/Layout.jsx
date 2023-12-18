import React, { useEffect, useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import { Outlet } from 'react-router-dom'
import './../style/layout.css'

import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
import { useSystemStore } from '../store/system'
import { useNavigate} from 'react-router-dom'
export function Layout() {
    const defaultKey = useSystemStore((state) => state.activeKey)
    const [activeKey, setActiveKey] = useState(defaultKey)

    const navigate = useNavigate();
    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <AppOutline />,
            badge: Badge.dot,
        },
        {
            key: 'todo',
            title: '待办',
            icon: <UnorderedListOutline />,
            badge: '5',
        },
        {
            key: 'message',
            title: '消息',
            icon: (active) =>
                active ? <MessageFill /> : <MessageOutline />,
            badge: '99+',
        },
        {
            key: 'my',
            title: '我的',
            icon: <UserOutline />,
        },
    ]
    const onChangeTab = (key) => {
        setActiveKey(key)
        navigate(`/${key}`)
    }

    useEffect(()=>{
        const token = window.localStorage.getItem('qdazi_token')
        if(!token) {
            console.log(navigate)
            navigate(`/login`)
        }
    },[])

    return (
        <div className="layout">
            <div className="content">
                <Outlet />
            </div>
            <TabBar activeKey={activeKey} className='tabs' onChange={onChangeTab}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>

    )
}

import { Button } from 'antd-mobile'

import { useState } from 'react';
import { ExpenditureRecord } from './ExpenditureRecord';
import { GasConsumeLine } from './GasConsumeLine';
import './expenditure.css'

export function Expenditure() {

    const [show, setShow] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0);  

    const toggleEditor = () => {
        setShow(!show);
    }
    const afterFinish = () =>{
        setShow(false)
        setRefreshKey(refreshKey + 1);  
    }
    return (
        <div className="expenditure">
            <h1>支出记录</h1>
            <Button block color='primary' onClick={toggleEditor}> 添加</Button>
            {
                show ? <ExpenditureRecord afterFinish={afterFinish}/> : null
            }
            <div className='line'>
                <GasConsumeLine key={refreshKey}  />
            </div>
        </div>
    )
}
import React from 'react';
import { Line } from '@ant-design/charts';
import { http } from '../../../shared/http';
import { useEffect,useState } from 'react';
import dayjs from 'dayjs'

export function GasConsumeLine() {
    const [data, setData] = useState([]);
     useEffect(()=>{
        http.get('/expend/?kind=1').subscribe(res=>{
           console.log(res)
           if(res.code == 200) {
               setData(res.data.map(item =>{
                 return {
                    count: item.count,
                    created: dayjs(item.created).format('MM-DD HH:mm') 
                 }
               }))
           }
        })
     },[])
    
      const config = {
        data,
        height: 400,
        xField: 'created',
        yField: 'count',
        xAxis: {
            type: 'time',
        },
      };
      return <Line {...config} />;
}
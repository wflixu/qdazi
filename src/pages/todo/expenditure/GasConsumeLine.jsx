import React from 'react';
import { Line } from '@ant-design/charts';
import { http } from '../../../shared/http';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'

export function GasConsumeLine() {
   const [data, setData] = useState([]);
   useEffect(() => {
      http.get('/expend/?kind=1').subscribe(res => {
         if (res.code == 200) {
            setData(res.data.map(item => {
               return {
                  ...item,
                  created: new Date(item.created).getTime()
               }
            }))
         }
      })
   }, [])

   const config = {
      data,
      height: 400,
      xField: 'created',
      yField: 'count',
      label: {
         formatter: function (text, item) {
            return text
         }
      },
      tooltip: {
         title: ({ created }) => {
            return dayjs(created).format('MM-DD HH:mm');
         }
      },

      style: {
         lineWidth: 2,
      },
      axis: {
         x: {
            type: 'time',
            arrow: true,
            line: true,
            labelFormatter: (datum, index, data) => {
               return dayjs(datum).format('MM-DD HH:mm')
            },
            tick: true,

         },
         y: {},
      },
   
   };
   return <Line {...config} />;
}
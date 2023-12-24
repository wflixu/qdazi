import React from 'react';
import { Line, DualAxes } from '@ant-design/charts';
import { http } from '../../../shared/http';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'

export function GasConsumeLine() {
   const [data, setData] = useState([]);
   useEffect(() => {
      http.get('/expend/?kind=1').subscribe(res => {
         if (res.code == 200) {
            const data = [];
            const aDay = 1000 * 60 * 60 * 24;
            res.data.forEach((item, index, arr) => {
               let trend = 0;
               if (index !== 0) {
                  let diff = item.count - arr[index - 1].count;
                  let span = (new Date(item.created).getTime() - new Date(arr[index - 1].created).getTime()) / aDay
                  trend = diff / span;
               }
               data.push(
                  {
                     ...item,
                     created: new Date(item.created).getTime(),
                     trend,
                  }
               )

            })
            setData(data)
         }
      })
   }, [])

   const config = {
      data,
      height: 400,
      xField: 'created',
      children: [
         {
            type: 'line',
            yField: 'trend',
            style: {
               lineWidth: 2,
            },
            tooltip: {
               items: [
                  {
                     name: '每天平均用量：',
                     field: 'trend',
                     valueFormatter: (v) => {
                        return v.toFixed(2);
                     }
                  },
               ]
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
            },
         },
         {
            type: 'line',
            yField: 'count',
            style: {
               stroke: '#5AD8A6',
               lineWidth: 2,
            },
            tooltip: {
               items: [
                  {
                     name: '当前用量：',
                     field: 'count',
                     valueFormatter: (v) => {
                        return v.toFixed(2);
                     }
                  },
               ]
      
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
               y: { position: 'right' }
            },
         },
      ],
      label: {
         formatter: function (text, item) {
            return text.toFixed(2)
         }
      },
      tooltip: {
         title: ({ created }) => {
            return dayjs(created).format('MM-DD HH:mm');
         },

      },



   };
   return <DualAxes {...config} />;
}
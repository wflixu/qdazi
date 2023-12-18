

import {
    Form,
    Input,
    Button,
    Dialog,
    TextArea,
    DatePicker,
    Selector,
    Slider,
    Stepper,
    Switch,
} from 'antd-mobile'
import { http } from '../../../shared/http';

const options = [
    {
        label: '天然气',
        value: 1,
    },
    {
        label: '电',
        value: 2,
    },
    {
        label: '水',
        value: 3,
    },
]
export function ExpenditureRecord({afterFinish}) {
    const onFinish = (values) => {
        console.warn(values);
        http.post('/expend/', {count: Number(values.count), kind: values[0]}).subscribe(res => {
            console.log(res)
            if (res.code == 200) {
                console.log(res);
                afterFinish()
            }
        })
    }
    return (

        <div>
                <Form
                    layout='horizontal'
                    name='expenditure'
                    initialValues={{
                        kind: [1],
                        count: 0,
                      }}
                    onFinish={onFinish}
                    footer={
                        <Button block type='submit' color='primary' size='large'>
                            提交
                        </Button>
                    }
                >
                    <Form.Header>填写记录</Form.Header>

                    <Form.Item name='count' label='数量' >
                        <Input type='number' onChange={console.log} placeholder='数字' />
                    </Form.Item>
                    <Form.Item name='kind' label='类别' >
                        <Selector
                            options={options}
                        />
                    </Form.Item>
                </Form>
            </div>
    )
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from 'antd'
import CommonComponent from '../../src/index'

const WrappedAdvancedNew=Form.create()(CommonComponent);

class App extends Component {
    constructor(props) {
        super(props);
        this.testClick = this.testClick.bind(this);

    }
    testClick(){
        console.log('123123');
    }
  render() {
        const props={
            title:'弹窗标题',
            formData:[{
                id: 'verifyResult',
                type:'radio',
                name:'审核结果',
                data:[{name:'通过',id:2},{name:'拒绝',id:3}],
                initialValue:2,
                isRequired:true
            },{
                id: 'remark',
                type:'textarea',
                name:'原因描述'
            },{
                id: 'closeReason',
                type:'select',
                data:[{name:'原因1',id:2},{name:'原因2',id:3}],
                name:'关闭原因',
                initialValue:3,
                isRequired:true,
                isHidePleaseSelect:true
            },{
                id: 'time',
                type:'rangedatepicker',
                name:'选择时间',
                showTime:true
            }],
            dialogWidth:500,
            dialogHeight:550,
            dialogButton:[{
                text: '取消',
                clickHandle: () => {
                        console.log('close')
                    }
                },
                {
                    text: '确认',
                    type: 'primary',
                    clickHandle: (values) => {
                        console.log(values)
                    }
                }]
        }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <WrappedAdvancedNew {...props}></WrappedAdvancedNew>
      </div>
    );
  }
}

export default App;

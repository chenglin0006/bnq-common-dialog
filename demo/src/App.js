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
            formData:[
                {
                    id: 'detailId',
                    name:'详情',
                    value:'详情显示',
                    type:'detail',
                    className:'detail-style'
                },
                {
                id: 'inputId',
                name:'testInput'
            },
                {
                id: 'verifyResult',
                type:'radio',
                name:'testRadio',
                data:[{name:'通过',id:2},{name:'拒绝',id:3}],
                initialValue:2,
                isRequired:true
            },{
                id: 'remark',
                type:'textarea',
                name:'testTexearea'
            },{
                id: 'closeReason',
                type:'select',
                data:[{name:'原因1',id:2},{name:'原因2',id:3}],
                name:'testSelect',
                initialValue:3,
                isRequired:true,
                isHidePleaseSelect:true
            },
                {
                id: 'time',
                type:'rangedatepicker',
                name:'Rangedate',
                showTime:true
            },
                {
                id: 'timePick',
                type:'testTimePick',
                name:'时间点',
                showTime:false
            }
            ],
            dialogWidth:600,
            dialogHeight:550,
            dialogButton:[{
                text: '取消',
                actionType:'cancel',
                clickHandle: () => {
                        console.log('close')
                    }
                },
                {
                    text: '确认',
                    type: 'primary',
                    actionType:'submit',
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

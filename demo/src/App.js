import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from 'antd'
import CommonComponent from '../../src/index'
import moment from 'moment'

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
      const treeData = [{
          title: 'Node1',
          value: '0-0',
          key: '0-0',
          children: [{
              title: 'Child Node1',
              value: '0-0-1',
              key: '0-0-1',
          }, {
              title: 'Child Node2',
              value: '0-0-2',
              key: '0-0-2',
          }],
      }, {
          title: 'Node2',
          value: '0-1',
          key: '0-1',
      }];
        const props={
            title:'弹窗标题',
            formData:[
                {
                    id: 'detailId',
                    name:'详情',
                    initialValue:'详情显示',
                    type:'detail',
                    className:'detail-style'
                },
                {
                id: 'inputId',
                name:'testInput',
                    isRequired:true
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
                    id: 'subscriptionAmount',
                    name: '金额',
                    type: 'number',
                    min:0,
                    max:1000000,
                    formatter:(value) => `${value}元`,
                    desc:'test desc',
                    parse:value => value.replace(/[^\d.]/g,"").replace(/^\./g,"").replace(/\.{2,}/g,".").replace(".","$#$").replace(/\./g,"").replace("$#$",".").replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'),
                },
                {
                id: 'timePick',
                type:'datepicker',
                name:'时间点',
                showTime:false,
                initialValue:moment('2018-09-20','YYYY-MM-DD'),
            }, {
                id:'treeSelect',
                type:'treeSelect',
                treeData:treeData,
                showSearch:false,
                allowClear:true,
                    name:'树形选择器',
                    placeholder:'请选择',
                    initialValue:'0-0-2',
                    multiple:true
            }
            ],
            dialogWidth:700,
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

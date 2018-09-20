## Install

```
npm i react-component-bnq
```

DialogForm.propTypes = {
    title:'弹窗标题',
    formData:[{
        id: 'verifyResult',
        type:'radio',               //radio
        name:'审核结果',
        data:[{name:'通过',id:2},{name:'拒绝',id:3}],
        initialValue:2,
        isRequired:true
    },{
        id: 'remark',
        type:'textarea',            //textarea
        name:'原因描述'
    },{
        id: 'closeReason',          //select
        type:'select',
        data:[{name:'原因1',id:2},{name:'原因2',id:3}],
        name:'关闭原因',
        initialValue:3,
        isRequired:true,
        isHidePleaseSelect:true
    },{
        id: 'time',                 //rangedatepicker
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


import {shallow,mount} from 'enzyme';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommonComponent from '../src/index'
Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';
import {Form} from "antd/lib/index";
const WrappedAdvancedFilter = Form.create()(CommonComponent);

test('dialog', () => {
    let props = {
        title:'title',
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
                name:'testInput',
                isRequired:true,
                // initialValue:'test input',
            },{
                id: 'closeReason',
                type:'select',
                data:[{name:'原因1',id:2},{name:'原因2',id:3}],
                name:'testSelect',
                initialValue:3,
                isRequired:true,
                isHidePleaseSelect:true
            }
        ],
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

    const component = renderer.create(
        <WrappedAdvancedFilter {...props}>Facebook</WrappedAdvancedFilter>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = mount( <WrappedAdvancedFilter {...props}/>);
    expect(wrapper.find('.dialog-title span').text()).toBe("title");

    wrapper.find('.ant-btn-primary').simulate('click');
    expect(wrapper.find('.has-error').length).toBe(1);

    wrapper.find('.dialog-button button').at(0).simulate('click');

    props.formData[1].isRequired=false;
    props.formData[1].initialValue='test input';
    const wrapper1 = mount( <WrappedAdvancedFilter {...props}/>);
    wrapper1.find('.ant-btn-primary').simulate('click');
});

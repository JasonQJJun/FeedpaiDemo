/**
 * Created by ljunb on 16/8/21.
 */
import React, { Component } from 'react';
import { Image } from 'react-native';
import TabBarView from '../containers/TabBarView';
import Constant from '../common/constants';

export default class Splash extends React.Component {
    /*
     *
     *
     * componentDidMount 是 React Native 中组件的生命周期
     *
     * 在组件第一次绘制之后，会调用 componentDidMount() ，通知组件已经加载完成。
     *
     * 这个函数调用的时候，其虚拟 DOM 已经构建完成，
     * 你可以在这个函数开始获取其中的元素或者子组件了。
     * 需要注意的是，RN 框架是先调用子组件的 componentDidMount() ，
     * 然后调用父组件的函数。从这个函数开始，就可以和 JS 其他框架交互了，
     * 例如设置计时 setTimeout 或者 setInterval ，或者发起网络请求。这个函数也是只被调用一次。
     * 这个函数之后，就进入了稳定运行状态，等待事件触发。
     *
     * 想详细了解请百度 ->  React Native 中组件的生命周期
     *
     * */
    componentDidMount(){
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            navigator.resetTo({
                component: TabBarView,  // 2秒后 进入TabBarView
                name: 'TabBarView'
            });
        },2000);
    }


    /*
     * 这个函数调用时机是在组件创建，并初始化了状态之后，
     * 在第一次绘制 render() 之前。
     * 可以在这里做一些业务初始化操作，也可以设置组件状态。
     * 这个函数在整个生命周期中只被调用一次。
     *
     * */

    render() {
        return (
            <Image
                style={{
                    width: Constant.window.width,
                    height: Constant.window.height
                }}
                source={require('../resource/img_intro_4.png')} // Image 引入图面
            />
        );
    }
}
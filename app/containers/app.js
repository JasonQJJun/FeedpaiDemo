/**
 * Created by ljunb on 16/5/25.
 */
import React, {PureComponent} from 'react'
import {
    Navigator,
    View,
    Platform,
    StatusBar
} from 'react-native';
import {observer} from 'mobx-react/native'
import TabBarView from '../containers/TabBarView' // 引入 tab  食物百科', '逛吃', '我的
import Splash from '../pages/Splash'  // 引入 引导页面
import RootStore from '../mobx'

@observer
export default class App extends PureComponent {

    _configureScene = route => {
        if (route.sceneConfig) return route.sceneConfig

        return {
            ...Navigator.SceneConfigs.PushFromRight,
            gestures: {}    // 禁用左滑返回手势
        }
    }

    _renderScene = (route, navigator) => {
        let Component = route.component
        return <Component navigator={navigator}{...route.passProps}/>
    }

    render() {
        // 判断是否是IOS  如果是 Android 就进入 Splash
        const initialPage = Platform.OS === 'ios' ? TabBarView : Splash
        const initialPageName = Platform.OS === 'ios' ? 'TabBarView' : 'Splash'

        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle={RootStore.barStyle}/>
                <Navigator
                    initialRoute={{name: initialPageName, component: initialPage}}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}
                />
            </View>
        )
    }
}
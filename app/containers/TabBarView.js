/**
 * Created by ljunb on 16/5/26.
 */
import React, {PureComponent} from 'react'
import {
    View,
    Text,
} from 'react-native'
import RootStore from '../mobx'
import Feed from '../pages/feed/Feed' // 引入  逛吃页面
import FoodEncyclopedia from '../pages/home/FoodEncyclopedia'  // 引入  食物百科页面
import Profile from '../pages/profile/Profile'  // 引入  我的页面
import TabBar from '../components/TabBar'  //定义的一个 TabBar
import ScrollableTabView from 'react-native-scrollable-tab-view' //引入 ScrollableTabView

const tabTitles = ['食物百科', '逛吃', '我的'] // 设置主页下面的导航界面字
const tabIcons = [ //设置默认图片
    require('../resource/ic_tab_search.png'),
    require('../resource/ic_tab_homepage.png'),
    require('../resource/ic_tab_my.png')
]
const tabSelectedIcon = [ //设置选中图片
    require('../resource/ic_tab_search_select.png'),
    require('../resource/ic_tab_homepage_select.png'),
    require('../resource/ic_tab_my_select.png')
]

export default class TabBarView extends PureComponent {

    _onChangeTab = ({i}) => RootStore.barStyle = i == 1 ? 'default' : 'light-content'

    //   navigator  导航器
    //  <FoodEncyclopedia   食物百科页面
    //  <Feed    //逛吃页面
    //  <Profile   //  //我的页面

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() =>
                    <TabBar
                        tabNames={tabTitles}
                        tabIconNames={tabIcons}
                        selectedTabIconNames={tabSelectedIcon}
                    />
                }
                tabBarPosition='bottom'
                locked
                scrollWithoutAnimation
                onChangeTab={this._onChangeTab}
            >

                <FoodEncyclopedia tabLabel="Food" navigator={this.props.navigator}/>
                <Feed tabLabel="Home" navigator={this.props.navigator}/>
                <Profile tabLabel="Profile" navigator={this.props.navigator}/>
            </ScrollableTabView>
        )
    }
}


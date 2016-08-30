/**
 * Created by Decade on 16/8/26.
 */

 import React, { Component } from 'React';
 import{
 	StyleSheet,
 	View,
	Text,
	Image,
	Platform,
	Navigator,
 } from 'react-native';

 import TabNavigator from 'react-native-tab-navigator';

const Tab0 = 'tab0'
const Tab1 = 'tab1'
const Tab2 = 'tab2'
const Tab3 = 'tab3'

const naviName0 = '首页'
const naviName1 = '商城'
const naviName2 = '我的'
const naviName3 = '其它'

import Home from './Home.js' 
import Shop from './Shop.js'
import Me from './Me.js'
import Other from './Other.js'

 export default class Main extends React.Component {
	constructor(props) {
		super(props);
            this.state = {selectedTab : Tab0}
	}

	setupTabbar(title, iconNormal, iconSelect, selectTab, naviName, navi){
		return(			
			<TabNavigator.Item 
				title = {title} 
				renderIcon = {() => <Image source = {{uri:iconNormal}} style = {Styles.tabbarIconStyle}/>}
				renderSelectedIcon = {() => <Image source = {{uri:iconSelect}} style = {Styles.tabbarIconStyle}/>}
				selected = {this.state.selectedTab === selectTab}
				onPress = {() => this.setState({selectedTab : selectTab})}
				selectedTitleStyle = {Styles.tabbarItemSelectedWordStyle}
				>
				<Navigator
                    initialRoute={{name:naviName,component:navi}}
                    configureScene={ () =>{
                        return Navigator.SceneConfigs.PushFromRight
                    }}
                    renderScene={(route,navigator) => {
                        let Component = route.component;
                        return <Component {...route.passProps} navigator = {navigator}/>
                    }} 
				/>
                
			</TabNavigator.Item>
		);
	}

    render() {
		return (
			<View style = {{flex : 1}}>
				<TabNavigator style = {Styles.tabbarStyle}>
					{this.setupTabbar('one', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', Tab0, naviName0, Home)}
					{this.setupTabbar('twe', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', Tab1, naviName1, Shop)}
					{this.setupTabbar('three', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', Tab2, naviName2, Me)}
					{this.setupTabbar('four', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', Tab3, naviName3, Other)}
				</TabNavigator>
			</View>  
		);
	}
  }

const Styles = StyleSheet.create({
	tabbarStyle : {

	},
	tabbarIconStyle:{
        width: Platform.os === 'ios' ? 30 : 25,
        height:Platform.os === 'ios' ? 30 : 25,
    },
	tabbarItemSelectedWordStyle:{
		color : 'orange',
	},
});
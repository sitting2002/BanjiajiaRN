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
 } from 'react-native';

 import TabNavigator from 'react-native-tab-navigator';

const Tab0 = 'tab0'
const Tab1 = 'tab1'
const Tab2 = 'tab2'
const Tab3 = 'tab3'

 export default class Main extends React.Component {
	constructor(props) {
		super(props);
            this.state = {selectedTab : Tab0}
	}

	setupTabbar(title, iconNormal, iconSelect, selectTab, childView){
		return(			
			<TabNavigator.Item 
				title = {title} 
				renderIcon = {() => <Image source = {{uri:iconNormal}} style = {Styles.tabbarIconStyle}/>}
				renderSelectedIcon = {() => <Image source = {{uri:iconSelect}} style = {Styles.tabbarIconStyle}/>}
				selected = {this.state.selectedTab === selectTab}
				onPress = {() => this.setState({selectedTab : selectTab})}
				>
				{childView}
			</TabNavigator.Item>
		);
	}

	static _createChildView(selectTab) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{selectTab}</Text>
            </View>
        )
    }

    render() {
		return (
			<View style = {{flex : 1}}>
				<TabNavigator style = {Styles.tabbarStyle}>
					{this.setupTabbar('one', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', Tab0, Main._createChildView(Tab0))}
					{this.setupTabbar('twe', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', Tab1, Main._createChildView(Tab1))}
					{this.setupTabbar('three', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', Tab2, Main._createChildView(Tab2))}
					{this.setupTabbar('four', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', Tab3, Main._createChildView(Tab3))}
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
        height:Platform.os === 'ios' ? 30 : 25
    },
});
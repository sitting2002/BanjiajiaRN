/**
 * Created by Decade on 16/8/26.
 */

 import React, { Component } from 'React';
 import{
 	StyleSheet,
 	View,
	Text,
	Image,
 } from 'react-native';

 import TabNavigator from 'react-native-tab-navigator';

 export default class Main extends React.Component {
    render() {
      return (
      	<View style = {{flex : 1}}>
	      	<Text>hello</Text>
	      	<TabNavigator style = {Styles.tabbarStyle}>
						{this.setupTabbar('one', './res/icon_tabbar_homepage_selected.png')}
						{this.setupTabbar('twe', './res/icon_tabbar_homepage_selected.png')}
						{this.setupTabbar('three')}
						{this.setupTabbar('four')}
					</TabNavigator>
      	</View>  
      );
    };

		setupTabbar(title, iconNormal){
			return(
				<TabNavigator.Item 
					title = {title} 
					renderIcon = {() => <Image source = {require(iconNormal)} />}
					// renderIcon={() => <Image source={{uri:iconName}} style={styles.tabbarIconStyle}/>}
					                    // <Image source = {require('./my-icon.png')} />
					>
				</TabNavigator.Item>
			);
		}
  }

const Styles = StyleSheet.create({
	tabbarStyle : {},
});
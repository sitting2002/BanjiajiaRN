/**
 * Created by Decade on 16/8/26.
 */

 import React, { Component } from 'React';
 import{
 	StyleSheet,
 	View,
 	Text,
 } from 'react-native';

 import TabBar from 'react-native-tab-navigator';

 export default class Main extends React.Component {
    render() {
      return (
      	<View style = {{flex : 1}}>
	      	<Text>hello</Text>
	      	<TabBar style = {Styles.tabbarStyle}>
      		
					</TabBar>
      	</View>  
      );
    }
  }

const Styles = StyleSheet.create({
	tabbarStyle : {},
});
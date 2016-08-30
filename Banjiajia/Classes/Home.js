import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Home extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Other extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Other</Text>
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

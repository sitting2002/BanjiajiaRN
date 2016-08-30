import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Me extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Me</Text>
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

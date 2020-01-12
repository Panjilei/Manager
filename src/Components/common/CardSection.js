import React, {Component} from  'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './Card'

const css = StyleSheet.create ({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});

const CardSection = (props) => {
    return (
        <View style = {css.containerStyle}>
            {props.children}
        </View>
    )
};

export { CardSection };
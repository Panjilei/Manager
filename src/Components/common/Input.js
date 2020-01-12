import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 35,
        height: 50,
        width: 100,
        flex: 2,
    },
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    buttonStyle: {
        width: '100%',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
    }
}

const { labelStyle, inputStyle, containerStyle } = styles;

const Input = ({ label, placeholder, secureTextEntry, value, onChangeText }) => {
    return (
        <View 
            style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    style={inputStyle}
                />
        </View>
    );
};

export { Input };
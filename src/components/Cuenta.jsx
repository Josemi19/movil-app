import React from 'react';
import { Text, View } from 'react-native';
import { style } from '../styles';

const Cuenta = () => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                Hola desde cuenta
            </Text>
        </View>
    );
};

export default Cuenta;
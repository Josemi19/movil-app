import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from "expo-constants"
import { Link, useLocation } from 'react-router-native';

const AppBar = () => {
    let location = useLocation()
    const [active, setActive] = useState(false)
    console.log(location.pathname)
    return (
        <View style={style.bar}>
            <Link to={"/"} component={TouchableWithoutFeedback}>
                <Text style={style.text}>Movil App</Text>
            </Link>
            <Link to={"/account"} component={TouchableWithoutFeedback}>
                <Text style={style.text}>Cuenta</Text>
            </Link>
        </View>
    );
};

const style = StyleSheet.create({
    bar:{
        backgroundColor:"#67c8d4",
        paddingTop:Constants.statusBarHeight + 5,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    text:{
        color: "#272d63",
        marginRight: 15,
        fontSize:15,
        fontWeight: 'bold'
    }
})

export default AppBar;
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { style } from "../styles";

const Home = () => {
    return(
        <View style={style.container}>
            <Text style={style.text}>
                Hola desde home
            </Text>
        </View>
    )
}

export default Home;
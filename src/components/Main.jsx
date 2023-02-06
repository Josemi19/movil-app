import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar.jsx";
import Cuenta from "./Cuenta.jsx";
import Home from "./Home.jsx";


const Main = () => {
    return (
            <View style={{ flex: 1 }}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/account" element={<Cuenta/>}/>
                </Routes>
            </View>
    )
}

export default Main;
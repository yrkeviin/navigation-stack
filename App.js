import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Stack2 from "./navigation/StackNavigator.js";

export default function App() {
    return (
        <NavigationContainer>
            <Stack2 />
        </NavigationContainer>
    );
}
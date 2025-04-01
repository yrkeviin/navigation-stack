import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function StackScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Navegar para a próxima página" onPress={() => navigation.navigate("Stack 2")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
    },
});
import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function Stack2({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Stack</Text>
            <Text style={styles.subtitle}>Bem-vindo à segunda tela do Stack Navigator!</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => alert("Botão pressionado!")}>
                <Text style={styles.buttonText}>Botão vai avisar se ser clicado!</Text>
            </TouchableOpacity>

            <Button title="Voltar para a primeira página" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});


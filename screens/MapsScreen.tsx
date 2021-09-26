import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function MapsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MY MAPS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.lighterBackground,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.text,
    },
});

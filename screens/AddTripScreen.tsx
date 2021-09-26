import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function AddTripScreen({
    navigation,
}: RootTabScreenProps<"AddTrip">) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ADD NEW TRIP</Text>
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

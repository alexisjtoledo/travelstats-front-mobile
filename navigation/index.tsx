import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, Pressable } from "react-native";

import Colors from "../constants/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";

import TripsScreen from "../screens/TripsScreen";
import MapsScreen from "../screens/MapsScreen";
import AddTripScreen from "../screens/AddTripScreen";
import StatisticsScreen from "../screens/StatisticsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import LinkingConfiguration from "./LinkingConfiguration";

import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";

export default function Navigation() {
    return (
        <NavigationContainer linking={LinkingConfiguration}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                    contentStyle: { backgroundColor: Colors.background },
                }}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                    name="AddNewTrip"
                    component={AddTripScreen}
                    options={{
                        title: "New trip",
                        // headerShown: false,
                        headerStyle: {
                            backgroundColor: Colors.primaryTint,
                        },
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Trips"
            screenOptions={{
                tabBarActiveTintColor: Colors.lighterText,
                tabBarStyle: {
                    backgroundColor: Colors.background,
                    marginBottom: Platform.OS === "ios" ? 0 : 10,
                    borderTopWidth: 0,
                },
            }}
        >
            <BottomTab.Screen
                name="Trips"
                component={TripsScreen}
                options={{
                    title: "My trips",
                    tabBarLabelStyle: {
                        fontSize: Platform.OS === "ios" ? 10 : 8,
                    },
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="plane" color={color} />
                    ),
                    headerTintColor: Colors.text,
                    headerStyle: {
                        backgroundColor: Colors.tabBarBackground,
                        borderBottomWidth: 2,
                        borderBottomColor: Colors.primaryTint,
                    },
                }}
            />
            <BottomTab.Screen
                name="Maps"
                component={MapsScreen}
                options={{
                    title: "My maps",
                    tabBarLabelStyle: {
                        fontSize: Platform.OS === "ios" ? 10 : 8,
                    },
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="map" color={color} />
                    ),
                    headerTintColor: Colors.text,
                    headerStyle: {
                        backgroundColor: Colors.tabBarBackground,
                        borderBottomWidth: 2,
                        borderBottomColor: Colors.primaryTint,
                    },
                }}
            />
            <BottomTab.Screen
                name="AddTrip"
                component={AddTripScreen}
                options={({ navigation }: RootTabScreenProps<"AddTrip">) => ({
                    title: "",
                    tabBarIcon: ({ color }) => (
                        <MainIcon
                            color={Colors.background}
                            navigation={navigation}
                        />
                    ),
                })}
                listeners={{
                    tabPress: (e) => e.preventDefault(),
                }}
            />
            <BottomTab.Screen
                name="Stats"
                component={StatisticsScreen}
                options={{
                    title: "Statistics",
                    tabBarLabelStyle: {
                        fontSize: Platform.OS === "ios" ? 10 : 8,
                    },
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="pie-chart" color={color} />
                    ),
                    headerTintColor: Colors.text,
                    headerStyle: {
                        backgroundColor: Colors.tabBarBackground,
                        borderBottomWidth: 2,
                        borderBottomColor: Colors.primaryTint,
                    },
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "Profile",
                    tabBarLabelStyle: {
                        fontSize: Platform.OS === "ios" ? 10 : 8,
                    },
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user" color={color} />
                    ),
                    headerTintColor: Colors.text,
                    headerStyle: {
                        backgroundColor: Colors.tabBarBackground,
                        borderBottomWidth: 2,
                        borderBottomColor: Colors.primaryTint,
                    },
                }}
            />
        </BottomTab.Navigator>
    );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof SimpleLineIcons>["name"];
    color: string;
}) {
    return (
        <SimpleLineIcons size={25} style={{ marginBottom: -3 }} {...props} />
    );
}

function MainIcon(props: { color: string; navigation: any }) {
    return (
        <Pressable
            style={{
                backgroundColor: Colors.primaryTint,
                width: Platform.OS === "ios" ? 70 : 60,
                height: Platform.OS === "ios" ? 70 : 60,
                borderRadius: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                shadowColor: Colors.darkerBackground,
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 3,
                elevation: 3,
                marginBottom: 15,
            }}
            onPress={() => props.navigation.navigate("AddNewTrip")}
        >
            <SimpleLineIcons
                name={"plus"}
                size={Platform.OS === "ios" ? 55 : 45}
                color={props.color}
            />
        </Pressable>
    );
}

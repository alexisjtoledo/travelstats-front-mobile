/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Trips: {
                        screens: {
                            TripsScreen: "My trips",
                        },
                    },
                    Maps: {
                        screens: {
                            MapsScreen: "My maps",
                        },
                    },
                    AddTrip: {
                        screens: {
                            AddTripScreen: "Add new trip",
                        },
                    },
                    Stats: {
                        screens: {
                            StatisticsScreen: "Statistics",
                        },
                    },
                    Profile: {
                        screens: {
                            ProfileScreen: "My profile",
                        },
                    },
                },
            },
            AddNewTrip: "modal",
            NotFound: "*",
        },
    },
};

export default linking;

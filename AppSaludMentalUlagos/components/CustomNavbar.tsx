import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react';
import { Platform } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

const CustomNavbar = () => {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].text,
                tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].text,
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                ios: { position: 'absolute', backgroundColor: Colors[colorScheme ?? 'light'].navbar },
                android: { backgroundColor: Colors[colorScheme ?? 'light'].navbar },
                default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                title: 'Inicio',
                tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="seguimiento"
                options={{
                title: 'Seguimiento',
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clipboard-text-outline" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="actividades"
                options={{
                title: 'Actividades',
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-outline" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
};

export default CustomNavbar;

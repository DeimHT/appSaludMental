import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
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
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: Colors[colorScheme ?? 'light'].navbar,
          },
          android: {
            backgroundColor: Colors[colorScheme ?? 'light'].navbar,
          },
          
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
}

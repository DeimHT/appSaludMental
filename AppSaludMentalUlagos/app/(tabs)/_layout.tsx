import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/context/ThemeContext';
import { CustomTabButton } from '@/components/CustomTabButton';
import CustomHeader from '@/components/CustomHeader';

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].tabIconDefault,
          tabBarInactiveTintColor: Colors[theme].tabIconDefault,
          header: () => <CustomHeader />,
          tabBarButton: (props) => <CustomTabButton {...props} />,
          tabBarBackground: () => (
            <View style={{ flex: 1, backgroundColor: Colors[theme].navbar, opacity: 1 }} />
          ),
          tabBarStyle: {
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },          
        }}
        >
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
    </>
  );
}
// export default TabLayout; (removed duplicate export)

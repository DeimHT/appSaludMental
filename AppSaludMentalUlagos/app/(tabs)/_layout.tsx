import { Image } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { CustomTabBar } from '@/components/CustomTabBar';
import CustomHeader from '@/components/CustomHeader';
import { home, seguimiento, actividades } from '@/utils/navBar';

export default function TabLayout() {
  const { theme, themeName } = useTheme();

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Image source={home[themeName]} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
      <Tabs.Screen
        name="seguimiento"
        options={{
          title: 'Seguimiento',
          tabBarIcon: ({ color }) => (
            <Image source={seguimiento[themeName]} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
      <Tabs.Screen
        name="actividades"
        options={{
          title: 'Actividades',
          tabBarIcon: ({ color }) => (
            <Image source={actividades[themeName]} style={{ width: 24, height: 24, tintColor: color }} />
          ),
        }}
      />
    </Tabs>
  );
}

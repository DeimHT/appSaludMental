import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';
import CustomHeader from '@/components/CustomHeader';

// Evita que la pantalla de carga se oculte automáticamente antes de que todo esté cargado.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    StatusBar.setHidden(true, 'fade');
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <StatusBar hidden={true} translucent={true} barStyle={"light-content"}/>

      <View style={ { flex: 1 } }>
        <Stack screenOptions={{ headerShown: true , header(): JSX.Element { return <CustomHeader />; } }}>
          <Stack.Screen name="(tabs)"/>
          <Stack.Screen name="config/configuraciones"/>
          <Stack.Screen name="+not-found" />
        </Stack>
      </View>
    </ThemeProvider>
  );
}

// export default RootLayout; (removed duplicate export)

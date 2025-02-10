import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
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
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          header: () => <CustomHeader />, // Usa el header personalizado
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// 🔹 Componente personalizado para el Header
const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {/* Icono de usuario y título */}
        <View style={styles.leftSection}>
          <TouchableOpacity>
            <FontAwesome name="user-circle" size={28} color="black" />
          </TouchableOpacity>
          <View style={styles.appTitleContainer}>
            <Text style={styles.appTitle}>APP</Text>
          </View>
        </View>

        {/* Iconos de ayuda y configuración */}
        <View style={styles.rightSection}>
          <TouchableOpacity>
            <Ionicons name="help-circle" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// 🔹 Estilos del Header
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6D8FC6', // Color similar al de la imagen
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appTitleContainer: {
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  appTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightSection: {
    flexDirection: 'row',
    gap: 15,
  },
});

// export default RootLayout; (removed duplicate export)

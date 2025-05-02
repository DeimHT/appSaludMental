import { router, Slot } from 'expo-router'; // 👈 IMPORTANTE
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { ThemeProvider } from '@/context/ThemeContext';
import { UserProvider } from '@/context/UserContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/MPLUSRounded1c-Regular.ttf'),
  });

  const [user, setUser] = useState<User | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthChecked(true);
      if (loaded) {
        SplashScreen.hideAsync();
      }
      if (!firebaseUser) {
        router.replace('/auth/login');
      }
    });

    return unsubscribe;
  }, [loaded]);

  if (!loaded || !authChecked) {
    return null;
  }

  return (
    <ThemeProvider>
      <UserProvider>
        <StatusBar hidden={true} translucent={true} />
        <Slot />
      </UserProvider>
    </ThemeProvider>
  );
}

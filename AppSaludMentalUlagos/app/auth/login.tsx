import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase'; // Lo configuraremos en el paso 3
import { useTheme } from "@/context/ThemeContext";
import { Colors } from "@/constants/Colors";
import { createStyles } from "@/constants/Styles";

export default function LoginScreen() {
    const { theme } = useTheme();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const styles = createStyles(theme);

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Inicio de sesión exitoso');
            router.replace('/'); // 🚀 Redirige al Home (tabs) al iniciar sesión
        } catch (error: any) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainerLogin}>
                
                <Image source={require('@/assets/images/Logo/Logo Cuadrado.png')} style={styles.logoLogin} />
                
            </View>
            <View style={styles.loginBox}>
                <Text style={styles.loginTitle}>Inicio de Sesión</Text>

                <Text style={styles.labelLogin}>Correo:</Text>
                <TextInput
                    placeholder="Correo@alumnos.ulagos.cl"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.inputLogin}
                    keyboardType="email-address"
                />

                <Text style={styles.labelLogin}>Contraseña:</Text>
                <TextInput
                    placeholder="********"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.inputLogin}
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Ionicons name="log-in-outline" size={24} color="white" />
                    <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotTextLogin}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebase'; 
import { useTheme } from "@/context/ThemeContext";
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { logos } from '@/utils/logos';
import { Colors } from "@/constants/Colors";
import { logIn } from '@/utils/botones';

import { createStyles } from "@/constants/Styles";

export default function LoginScreen() {
    const { theme, themeName } = useTheme();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const styles = createStyles(theme);
    const colors = Colors[theme];
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Inicio de sesión exitoso');
            router.replace('/'); 
        } catch (error: any) {
            let message = 'Ha ocurrido un error inesperado. Intenta nuevamente.';

            switch (error.code) {
                case 'auth/invalid-email':
                    message = 'El correo electrónico no es válido.';
                    break;
                case 'auth/user-not-found':
                    message = 'No se encontró una cuenta con ese correo electrónico.';
                    break;
                case 'auth/invalid-credential':
                    message = 'Correo o contraseña incorrectos.';
                    break;
                case 'auth/too-many-requests':
                    message = 'Demasiados intentos. Intenta más tarde.';
                    break;
                case 'auth/missing-password':
                    message = 'Por favor, ingresa tu contraseña.';
                    break;
                default:
                    message = error.message;
                    break;
            }

            setErrorMessage(message);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerLogin2}>
                <View style={styles.logoContainerLogin}>
                    
                    <Image source={logos[themeName]} style={styles.logoLogin} />
                    
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
                        placeholderTextColor={colors.title3}
                    />

                    <Text style={styles.labelLogin}>Contraseña:</Text>
                    <TextInput
                        placeholder="********"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        style={styles.inputLogin}
                        placeholderTextColor={colors.title3}
                    />
                    {errorMessage !== '' && (
                        <Text style={[styles.errorTextLogin, { color: 'red' }]}>
                            {errorMessage}
                        </Text>
                    )}

                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Image source={logIn[themeName]} style={styles.loginButtonIcon} />
                        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.forgotTextLogin}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

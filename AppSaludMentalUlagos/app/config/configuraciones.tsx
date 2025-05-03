import React, { useState } from "react";
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Switch, StyleSheet, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStyles } from "../../constants/Styles";
import { useTheme } from "@/context/ThemeContext";
import { logout } from "@/utils/logout";



const SettingsScreen = () => {
    const { theme, toggleTheme } = useTheme();
    const navigation = useNavigation();
    const styles = createStyles(theme);
    const router = useRouter();

    return (
        <View style={styles.containerConfig}>
            {/* Botón de regreso */}
        
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
            </TouchableOpacity>

            <View style={styles.contentConfig}>
                {/* Botón de perfil */}
                <TouchableOpacity style={styles.profileButton} onPress={() => router.push('/config/perfil')}>
                    <Ionicons name="person-circle-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Perfil</Text>
                </TouchableOpacity>

                {/* Interruptor de Modo Oscuro */}
                <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>Modo oscuro</Text>
                    <Switch
                        value={theme === 'dark'} // <-- aquí usamos el contexto real
                        onValueChange={toggleTheme} // <-- aquí llamamos directamente toggleTheme
                        thumbColor={theme === 'dark' ? "#f4f3f4" : "#6D8FC6"}
                        trackColor={{ false: "#767577", true: "#3D5A80" }}
                    />
                </View>
            </View>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;

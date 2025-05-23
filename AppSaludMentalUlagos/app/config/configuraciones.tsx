import React, { useState } from "react";
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Switch, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createStyles } from "../../constants/Styles";
import { useTheme } from "@/context/ThemeContext";
import { logout } from "@/utils/logout";
import { createStyles as arrowStyle } from "@/constants/StylesArrow";
import { logOut } from "@/utils/botones";



const SettingsScreen = () => {
    const { theme, toggleTheme, themeName } = useTheme();
    const navigation = useNavigation();
    const styles = createStyles(theme);
    const stylesArrow = arrowStyle(theme);
    const router = useRouter();

    return (
        <View style={styles.containerConfig}>
            {/* Botón de regreso */}
        
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={30} style={stylesArrow.arrowBack}/>
            </TouchableOpacity>

            <View style={styles.contentConfig}>
                {/* Botón de perfil */}
                <TouchableOpacity style={styles.profileButton} onPress={() => router.push('/config/perfil')}>
                    <Ionicons name="person-circle-outline" size={24} style={styles.iconPerfil} />
                    <Text style={styles.buttonProfileText}>Perfil</Text>
                </TouchableOpacity>

                {/* Botón de Cambiar Constraseña */}
                <TouchableOpacity style={styles.configsButton}>
                    <Text style={styles.buttonText}>Cambiar Contraseña</Text>
                </TouchableOpacity>

                {/* Interruptor de Cambio de Tema */}
                <View style={styles.switchContainer}>
                    <Text style={styles.switchText}>Cambio de tema</Text>
                    <Switch
                        value={theme === 'dark'} 
                        onValueChange={toggleTheme} 
                        thumbColor={theme === 'dark' ? "#E3DAF7" : "#6D8FC6"}
                        trackColor={{ false: "#5B3AAD", true: "#003480" }}
                    />
                </View>

                {/* Botón de Pólitica de Privacidad */}
                <TouchableOpacity style={styles.configsButton}>
                    <Text style={styles.buttonText}>Pólitica de Privacidad</Text>
                </TouchableOpacity>

                {/* Botón de Términos y Condiciones */}
                <TouchableOpacity style={styles.configsButton}>
                    <Text style={styles.buttonText}>Términos y Condiciones</Text>
                </TouchableOpacity>
            </View>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Image source={logOut[themeName]} style={styles.logoutIcon} />
                <Text style={styles.buttonLogOutText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;

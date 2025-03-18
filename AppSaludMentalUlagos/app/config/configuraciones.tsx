import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../constants/Styles";

const SettingsScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.containerConfig}>
        {/* Botón de regreso */}
        
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
            </TouchableOpacity>

        <View style={styles.contentConfig}>
            {/* Botón de perfil */}
            <TouchableOpacity style={styles.profileButton}>
                <Ionicons name="person-circle-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>

            {/* Interruptor de Modo Oscuro */}
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Modo oscuro</Text>
                <Switch
                value={isDarkMode}
                onValueChange={(value) => setIsDarkMode(value)}
                thumbColor={isDarkMode ? "#f4f3f4" : "#6D8FC6"}
                trackColor={{ false: "#767577", true: "#3D5A80" }}
                />
            </View>
        </View>

        {/* Botón de Cerrar Sesión */}
        <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;

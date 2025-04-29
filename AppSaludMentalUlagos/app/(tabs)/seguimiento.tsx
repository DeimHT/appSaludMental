import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from "react-native";
import { createStyles } from "@/constants/Styles";
import { useTheme } from "@/context/ThemeContext";

const SeguimientoScreen = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
    

      {/* Contenido Principal */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Sección: ¿Cómo te sientes? */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Cómo te sientes en este momento?</Text>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>😡</Text>
            <Text style={styles.emoji}>😞</Text>
            <Text style={styles.emoji}>😐</Text>
            <Text style={styles.emoji}>😊</Text>
            <Text style={styles.emoji}>😃</Text>
          </View>
        </View>

        {/* Sección: Último estado de ánimo */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Último estado de ánimo ingresado: 😊</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Registro de Emociones →</Text>
          </TouchableOpacity>
        </View>

        {/* Sección: Agregar a Diario de Pensamientos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Quieres agregar algo a tu Diario de Pensamientos?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Agregar página →</Text>
          </TouchableOpacity>
        </View>

        {/* Sección: Leer Diario de Pensamientos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Quieres leer tu Diario de Pensamientos?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Diario de Pensamientos →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SeguimientoScreen;

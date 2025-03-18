import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { styles } from "@/constants/Styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Contenido Principal */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Sección: ¿Cómo te sientes? */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Cómo te sientes en este momento?</Text>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>😢</Text>
            <Text style={styles.emoji}>😞</Text>
            <Text style={styles.emoji}>😐</Text>
            <Text style={styles.emoji}>😊</Text>
            <Text style={styles.emoji}>😃</Text>
          </View>
        </View>

        {/* Sección: Revisar emociones */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Quieres revisar tus emociones pasadas?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Registro de Emociones →</Text>
          </TouchableOpacity>
        </View>

        {/* Sección: Actividades diarias */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Revisa tus actividades diarias</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Actividades Diarias →</Text>
          </TouchableOpacity>
        </View>

        {/* Sección: Recomendaciones */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Tienes pensamientos que quieres guardar?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver Diario de Pensamientos →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};


export default HomeScreen;

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const SeguimientoScreen = () => {
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
            <Text style={styles.buttonText}>Ver registro de emociones →</Text>
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

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A2C5EC", // Color de fondo
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#6D8FC6",
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 15,
  },
  content: {
    padding: 15,
  },
  card: {
    backgroundColor: "#3D5A80",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1E3A5F",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  emoji: {
    fontSize: 20,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#1E3A5F",
  },
  navItem: {
    alignItems: "center",
  },
  navItemActive: {
    alignItems: "center",
    backgroundColor: "#3D5A80",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  navText: {
    color: "white",
    fontSize: 12,
  },
});

export default SeguimientoScreen;

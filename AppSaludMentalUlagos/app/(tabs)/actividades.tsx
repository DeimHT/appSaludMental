import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ActivitiesScreen = () => {
  return (
    <View style={styles.container}>
    

      {/* Contenido Principal */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Sección: Actividades Diarias */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Actividades Diarias</Text>
          <View style={styles.activityList}>
            <Text style={styles.activityItem}>• Actividad 1</Text>
            <Ionicons name="checkbox-outline" size={24} color="white" />
          </View>
          <View style={styles.activityList}>
            <Text style={styles.activityItem}>• Actividad 2</Text>
            <Ionicons name="square-outline" size={24} color="white" />
          </View>
        </View>

        {/* Sección: Mejorar en un área */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Te gustaría mejorar en algún área?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Seleccionar área →</Text>
          </TouchableOpacity>
        </View>

        {/* Sección: Salud Mental */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>¿Te gustaría informarte sobre salud mental?</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Visitar Aquí Contigo →</Text>
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
    backgroundColor: "#A2C5EC", // Color de fondo similar a la imagen
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
  activityList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  activityItem: {
    fontSize: 16,
    color: "white",
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

export default ActivitiesScreen;

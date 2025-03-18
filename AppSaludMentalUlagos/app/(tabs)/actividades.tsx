import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../constants/Styles";

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


export default ActivitiesScreen;

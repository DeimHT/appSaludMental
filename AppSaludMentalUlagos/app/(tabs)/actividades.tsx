import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, useColorScheme } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createStyles } from "../../constants/Styles";
import { useTheme } from "@/context/ThemeContext";
import { Linking } from 'react-native';

const ActivitiesScreen = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
    

      {/* Contenido Principal */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Sección: Actividades Diarias */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Actividades Diarias</Text>
          <View style={styles.cardActivity}>
            <View style={styles.activityList}>
              <Text style={styles.activityItem}>• Actividad 1</Text>
              <Ionicons name="checkbox-outline" size={24} style={styles.checkbox} />
            </View>
            <View style={styles.activityList}>
              <Text style={styles.activityItem}>• Actividad 2</Text>
              <Ionicons name="square-outline" size={24} style={styles.checkbox} />
            </View>
          </View>
        </View>

        {/* Sección: Mejorar en un área */}
        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={require('@/assets/images/Icons/Crecimiento 2.png')}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Descubre áreas para crecer</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>

        {/* Sección: Salud Mental */}
        <TouchableOpacity style={styles.optionCard} onPress={() => Linking.openURL('https://aquicontigo.uestatales.cl')}>
          <View style={styles.optionContent}>
            <Image
              source={require('@/assets/images/Icons/Crecimiento.png')}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>¿Te gustaría informarte sobre salud mental?</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


export default ActivitiesScreen;

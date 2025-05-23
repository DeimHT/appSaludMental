import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, useColorScheme } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createStyles } from "../../constants/Styles";
import { useTheme } from "@/context/ThemeContext";
import { Linking } from 'react-native';
import { crecimiento, aquiContigo } from "@/utils/cards";

const ActivitiesScreen = () => {
  const { theme, themeName } = useTheme();
  const styles = createStyles(theme);
  const activities = ['Actividad 1', 'Actividad 2', 'Actividad 3'];

  const [checked, setChecked] = React.useState<boolean[]>(new Array(activities.length).fill(false));
  
  
  const toggleCheckbox = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };


  return (
    <View style={styles.container}>
    

      {/* Contenido Principal */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Sección: Actividades Diarias */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Actividades Diarias</Text>
          <View style={styles.cardActivity}>
            {activities.map((activity, index) => (
              <View key={index} style={styles.activityList}>
                <Text style={styles.activityItem}>• {activity}</Text>
                <TouchableOpacity onPress={() => toggleCheckbox(index)}>
                  <Ionicons
                    name={checked[index] ? 'checkbox-outline' : 'square-outline'}
                    size={24}
                    style={styles.checkbox}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Sección: Mejorar en un área */}
        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={crecimiento[themeName]}
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
              source={aquiContigo[themeName]}
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

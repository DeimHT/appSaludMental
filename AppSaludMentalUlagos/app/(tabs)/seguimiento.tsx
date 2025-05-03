import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, useColorScheme } from "react-native";
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
                <View style={[styles.card, { borderRadius: 20 }]}>
                <Text style={[styles.cardTitle, { textAlign: 'center', marginBottom: 12 }]}>
                  ¿Cómo te sientes en esta mañana?
                </Text>
                <View style={styles.emojiContainerIndex}>
                  <Text style={styles.emojiIndex}>😣</Text>
                  <Text style={styles.emojiIndex}>😞</Text>
                  <Text style={styles.emojiIndex}>😐</Text>
                  <Text style={styles.emojiIndex}>😊</Text>
                  <Text style={styles.emojiIndex}>😁</Text>
                </View>
                <View style={styles.emojiLabels}>
                  <Text style={styles.emojiLabel}>Muy mal</Text>
                  <Text style={styles.emojiLabel}>Mal</Text>
                  <Text style={styles.emojiLabel}>Normal</Text>
                  <Text style={styles.emojiLabel}>Bien</Text>
                  <Text style={styles.emojiLabel}>Muy bien</Text>
                </View>
              </View>

        {/* Sección: Último estado de ánimo */}
        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Text style={styles.emoji}>😊</Text>
            <Text style={styles.optionText}>Anoche te sentias alegre</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>
      

        {/* Sección: Agregar a Diario de Pensamientos */}
        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={require('@/assets/images/Icons/Agregar pagina 3.png')}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Escribe una nueva página para tu Diario de Pensamientos</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>

        {/* Sección: Leer Diario de Pensamientos */}
        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={require('@/assets/images/Icons/Diario 2.png')}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Revisa tu Diario de Pensamientos</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
};

export default SeguimientoScreen;

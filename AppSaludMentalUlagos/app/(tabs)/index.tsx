import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { createStyles } from "@/constants/Styles";
import { useTheme } from "@/context/ThemeContext";

const HomeScreen = () => {
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


        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={require('@/assets/images/Icons/Calendario 2.png')}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Revisar emociones pasadas</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={require('@/assets/images/Icons/Actividades 2.png')}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Revisa tus actividades diarias</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={require('@/assets/images/Icons/Crecimiento 2.png')}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Explora formas de mejorar tu día</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};


export default HomeScreen;

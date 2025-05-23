import React from "react";
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, Image, ScrollView, useColorScheme } from "react-native";
import { createStyles } from "@/constants/Styles";
import { useTheme } from "@/context/ThemeContext";
import { nuevoDiario, diario } from "@/utils/cards";

const SeguimientoScreen = () => {
  const router = useRouter();
  const { theme, themeName } = useTheme();
  const styles = createStyles(theme);
  const irAEmociones = (categoria: string) => {
    router.push({
      pathname: '/emociones/[categoria]',
      params: { categoria }
    })
  }

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
                  <TouchableOpacity onPress={() => irAEmociones('Muy mal')}>
                    <Image source={require('@/assets/images/Icons/Emojis/Muy mal.png')} style={styles.emojiIndex} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => irAEmociones('Mal')}>
                    <Image source={require('@/assets/images/Icons/Emojis/Mal.png')} style={styles.emojiIndex} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => irAEmociones('Neutral')}>
                    <Image source={require('@/assets/images/Icons/Emojis/Neutral.png')} style={styles.emojiIndex} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => irAEmociones('Bien')}>
                    <Image source={require('@/assets/images/Icons/Emojis/Bien.png')} style={styles.emojiIndex} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => irAEmociones('Muy bien')}>
                    <Image source={require('@/assets/images/Icons/Emojis/Muy bien.png')} style={styles.emojiIndex} />
                  </TouchableOpacity>
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
            <Image source={require('@/assets/images/Icons/Emojis/Bien.png')} style={styles.emoji} />
            <Text style={styles.optionText}>Anoche te sentias alegre</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>
      

        {/* Sección: Agregar a Diario de Pensamientos */}
        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={nuevoDiario[themeName]}
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
              source={diario[themeName]}
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

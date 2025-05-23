import React from "react";
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { createStyles } from "@/constants/Styles";
import { useTheme } from "@/context/ThemeContext";
import { calendario, actividades, crecimiento } from "@/utils/cards";

const HomeScreen = () => {
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


        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={calendario[themeName]}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Revisar emociones pasadas</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={actividades[themeName]}
              style={styles.optionIconImage}
            />
            <Text style={styles.optionText}>Revisa tus actividades diarias</Text>
          </View>
          <Text style={styles.optionArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionCard}>
          <View style={styles.optionContent}>
            <Image
              source={crecimiento[themeName]}
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

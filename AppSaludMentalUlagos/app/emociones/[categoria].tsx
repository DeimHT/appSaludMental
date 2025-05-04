import { useEffect, useState } from 'react'
import { db } from '@/config/firebase'
import { Ionicons } from "@expo/vector-icons";
import { collection, getDocs } from 'firebase/firestore'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { createStyles as arrowStyle } from "@/constants/StylesArrow";
import { useTheme } from "@/context/ThemeContext";
import { createStyles } from "../../constants/Styles";
import { useNavigation } from "@react-navigation/native";


const categoriaEmoji: Record<string, string> = {
    'Muy mal': '😞',
    'Mal': '😕',
    'Neutral': '😐',
    'Bien': '🙂',
    'Muy bien': '😄',
}

export default function EmocionesPage() {
    const { categoria } = useLocalSearchParams()
    const categoriaValida = typeof categoria === 'string' ? categoria : ''
    const [emociones, setEmociones] = useState<string[]>([])
    const navigation = useNavigation();

    const { theme, toggleTheme } = useTheme();
    const styles2 = createStyles(theme);
    const stylesArrow = arrowStyle(theme);

    useEffect(() => {
        if (!categoria || typeof categoria !== 'string') return

        const cargarEmociones = async () => {
        const snapshot = await getDocs(collection(db, 'Emociones'))
        const emocionFiltradas = snapshot.docs
            .map(doc => doc.data())
            .filter(e => e.categoria === categoria)
            .map(e => e.emocion)
        setEmociones(emocionFiltradas)
        }

        cargarEmociones()
    }, [categoria])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles2.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={30} style={stylesArrow.arrowBack}/>
            </TouchableOpacity>

        <Text style={styles.headerText}>
            Estoy {categoriaValida?.toLowerCase()} {categoriaEmoji[categoriaValida as string]}
        </Text>
        <Text style={styles.subText}>Estoy sintiendo:</Text>

        <View style={styles.wheel}>
            {emociones.map((emo, i) => (
            <View key={i} style={styles.emotionItem}>
                <Text style={styles.emotionText}>{emo}</Text>
            </View>
            ))}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#DCEEFB',
        alignItems: 'center',
        flexGrow: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        marginBottom: 20,
    },
    wheel: {
        width: 250,
        height: 250,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    emotionItem: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 5,
        borderRadius: 999,
        elevation: 2,
    },
    emotionText: {
        textAlign: 'center',
        fontWeight: '500',
    },
})

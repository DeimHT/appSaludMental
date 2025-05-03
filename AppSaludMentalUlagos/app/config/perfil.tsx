import { createStyles } from "@/constants/StylesConfig";
// app/config/perfil.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/constants/Colors';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/config/firebase'; 
import { useUser } from '@/context/UserContext'; 


export default function PerfilScreen() {
    const { user, loading } = useUser(); 
    const router = useRouter();
    const { theme } = useTheme();
    const styles = createStyles(theme);
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const fetchUserData = async () => {
          const currentUser = auth.currentUser;
      
          if (currentUser) {
            const userDocRef = doc(db, "Users", currentUser.uid);
            const userDocSnap = await getDoc(userDocRef);
      
            if (userDocSnap.exists()) {
              const data = userDocSnap.data(); 
              setUserData(data);
            } else {
              console.log("El documento del usuario no existe.");
            }
          }
        };
      
        fetchUserData();
      }, []);      
    console.log("UserData:", userData); 

    if (loading || !userData) {
        return (
            <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
                <View style={[styles.card, { backgroundColor: Colors[theme].card }]}>
                    <Text style={styles.bold}>Cargando...</Text>
                </View>
            </View>
        );
    }

    if (!user) {
        return (
            <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
                <View style={[styles.card, { backgroundColor: Colors[theme].card }]}>
                    <Text style={styles.bold}>No hay usuario autenticado</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle-outline" size={30} color={Colors[theme].text} />
        </TouchableOpacity>

        <Text style={[styles.title, { color: Colors[theme].title }]}>Perfil</Text>

        <View style={[styles.card, { backgroundColor: Colors[theme].card }]}>
            <Text style={styles.text}>Nombre: {userData.nombre}</Text>
            <Text style={styles.text}>Rut: {userData.rut}</Text>
            <Text style={styles.text}>Teléfono: {userData.telefono}</Text>
            <Text style={styles.text}>Carrera: {userData.carrera}</Text>
            <Text style={styles.text}>Fecha de Nacimiento: {userData?.fechaNacimiento?.toDate 
                ? userData.fechaNacimiento.toDate().toLocaleDateString()
                : "Sin fecha"}
            </Text>
        </View>
        </View>
    );
}


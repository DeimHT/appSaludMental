import { View, Text, TouchableOpacity, StyleSheet, Image, useColorScheme } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { createStyles } from "@/constants/Styles";
import { useTheme } from "@/context/ThemeContext";

const CustomHeader = () => {
    const router = useRouter();
    const { theme } = useTheme();
    const styles = createStyles(theme);
    

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.header}>
                <View style={styles.leftSection}>
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Image source={require('@/assets/images/Logo/Logo Horizontal.png')} style={stylesHeader.logo} />
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.rightSection}>
                    <View style={styles.celButton}>
                        <TouchableOpacity>
                            <Image source={require('@/assets/images/Icons/Telefono.png')} style={stylesHeader.telefono} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.configButton}>
                        <TouchableOpacity onPress={() => router.push('/config/configuraciones')}>
                            <Ionicons name="settings-outline" size={28} color="#B1C5DD" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const stylesHeader = StyleSheet.create({
    telefono: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: "contain",
    },
})

export default CustomHeader;

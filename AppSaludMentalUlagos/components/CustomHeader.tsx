import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { styles } from "@/constants/Styles";

const CustomHeader = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.header}>
                <View style={styles.leftSection}>
                    <TouchableOpacity>
                        <Image source={require('@/assets/images/Logo/Logo Horizontal.png')} style={stylesHeader.logo} />
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.rightSection}>
                    <TouchableOpacity>
                        <Image source={require('@/assets/images/Icons/Telefono.png')} style={stylesHeader.telefono} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/config/configuraciones')}>
                        <Ionicons name="settings-outline" size={28} color="white" />
                    </TouchableOpacity>
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

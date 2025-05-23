import { View, Text, TouchableOpacity, StyleSheet, Image, useColorScheme } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { createStyles } from "@/constants/Styles";
import { useTheme } from "@/context/ThemeContext";
import { logoH } from "@/utils/logos";
import { telefono, config } from "@/utils/header";

const CustomHeader = () => {
    const router = useRouter();
    const { theme, themeName } = useTheme();
    const styles = createStyles(theme);
    

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <View style={styles.header}>
                <View style={styles.leftSection}>
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Image source={logoH[themeName]} style={stylesHeader.logo} />
                    </TouchableOpacity>
                    
                </View>

                <View style={styles.rightSection}>
                    <View style={styles.celButton}>
                        <TouchableOpacity>
                            <Image source={telefono[themeName]} style={stylesHeader.telefono} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.configButton}>
                        <TouchableOpacity onPress={() => router.push('/config/configuraciones')}>
                            <Image source={config[themeName]} style={stylesHeader.telefono} />
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

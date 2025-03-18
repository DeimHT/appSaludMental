import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
                        <FontAwesome name="user-circle" size={28} color="black" />
                    </TouchableOpacity>
                    <View style={styles.appTitleContainer}>
                        <Text style={styles.appTitle}>SMULA</Text>
                    </View>
                </View>

                <View style={styles.rightSection}>
                    <TouchableOpacity>
                        <Ionicons name="help-circle" size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/config/configuraciones')}>
                        <Ionicons name="settings-outline" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CustomHeader;

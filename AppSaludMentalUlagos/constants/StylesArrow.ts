import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export function createStyles(colorScheme: 'light' | 'dark' = 'light') {
    const colors = Colors[colorScheme];

    return StyleSheet.create({
        arrowBack: {
            color: colors.title2,
        },
    });
}
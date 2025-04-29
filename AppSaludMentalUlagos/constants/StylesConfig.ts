import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export function createStyles(colorScheme: 'light' | 'dark' = 'light') {
    const colors = Colors[colorScheme];

    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
            paddingTop: 40,
        },
        backButton: {
            position: 'absolute',
            top: 20,
            left: 20,
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginVertical: 20,
        },
        card: {
            marginTop: 40,
            borderRadius: 30,
            padding: 20,
        },
        infoText: {
            fontSize: 18,
            color: 'white',
            marginBottom: 15,
        },
        bold: {
            fontWeight: 'bold',
            color: colors.text
        },
        text: {
            fontFamily: 'MPLUSRounded1c',
            fontWeight: 'bold',
            fontSize: 18,
            color: colors.text,
            marginBottom: 15,
        }
    });
}
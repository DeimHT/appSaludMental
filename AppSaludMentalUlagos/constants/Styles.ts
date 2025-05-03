import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export function createStyles(colorScheme: 'light' | 'dark' = 'light') {
    const colors = Colors[colorScheme];

    return StyleSheet.create({
        safeArea: { flex: 0, backgroundColor: colors.header },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
            backgroundColor: colors.header,
        },
        leftSection: { flexDirection: "row", alignItems: "center" },
        appTitleContainer: {
            backgroundColor: "black",
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginLeft: 10,
        },
        appTitle: { color: "white", fontSize: 18, fontWeight: "bold" },
        rightSection: { 
            flexDirection: "row", 
            gap: 20,},
        celButton: { 
            backgroundColor: '#134793', // color de fondo cuando está activo
            borderRadius: 30,
            paddingHorizontal: 8,
            paddingVertical: 8, },
        configButton: { 
            backgroundColor: '#134793', // color de fondo cuando está activo
            borderRadius: 30,
            paddingHorizontal: 8,
            paddingVertical: 8, },
        navbar: { backgroundColor: "#003480" },
        containerConfig: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 5,
        },
        container: {
            flex: 1,
            backgroundColor: "#A2C5EC",
            justifyContent: "center",
            paddingHorizontal: 5,
        },
        backButton: {
            position: "absolute",
            top: 40,
            left: 20,
        },
        profileButton: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#3D5A80",
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 10,
            marginBottom: 20,
            width: "75%",
        },
        buttonText: {
            color: "white",
            fontSize: 16,
            marginLeft: 10,
        },
        switchContainer: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#3D5A80",
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 10,
            width: "75%",
            justifyContent: "space-between",
        },
        switchText: {
            color: "white",
            fontSize: 16,
        },
        logoutButton: {
            backgroundColor: "#8B0000",
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 10,
            width: "75%",
            alignItems: "center",
            marginBottom: 100,
        },
        headerIcons: {
            flexDirection: "row",
            gap: 15,
        },
        content: {
            padding: 15,
        },
        card: {
            backgroundColor: colors.card,
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
        },
        cardTitle: {
            fontSize: 40,
            fontWeight: "bold",
            color: colors.text,
            marginBottom: 10,
            textAlign: "center",
        },
        activityList: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
        },
        activityItem: {
            fontSize: 16,
            color: colors.title,
        },
        button: {
            backgroundColor: "#1E3A5F",
            padding: 10,
            borderRadius: 5,
        },
        bottomNav: {
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 10,
            backgroundColor: "#1E3A5F",
        },
        navItem: {
            alignItems: "center",
        },
        navItemActive: {
            alignItems: "center",
            backgroundColor: "#3D5A80",
            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 10,
        },
        navText: {
            color: "white",
            fontSize: 12,
        },
        emojiContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
        },
        emoji: {
        fontSize: 20,
        },
        contentConfig: {
            alignItems: "center", 
            flex: 0.8, 
            justifyContent: "flex-start", 
            marginTop: 30, 
        },
        containerLogin: {
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        logoContainerLogin: {
            alignItems: 'center',
            marginBottom: 30,
        },
        logoTextLogin: {
            fontSize: 24,
            color: '#003480',
            fontWeight: 'bold',
            marginTop: 10,
        },
        loginBox: {
            width: '100%',
            backgroundColor: colors.card2,
            borderRadius: 15,
            padding: 20,
            maxWidth: 340,
            alignItems: 'center',
            marginHorizontal: 22,
        },
        loginTitle: {
            fontSize: 22,
            color: colors.title2,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        labelLogin: {
            alignSelf: 'flex-start',
            color: colors.title2,
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: 5,
            marginTop: 10,
        },
        inputLogin: {
            width: '100%',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 10,
            marginBottom: 5,
            borderWidth: 4,
            borderColor: '#194a80',
        },
        loginButton: {
            backgroundColor: '#003480',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 12,
            marginTop: 20,
        },
        loginButtonText: {
            color: 'white',
            marginLeft: 10,
            fontSize: 18,
        },
        forgotTextLogin: {
            color: colors.title2,
            fontWeight: 'bold',
            marginTop: 15,
            textDecorationLine: 'underline',
            fontSize: 14,
        },
        logoLogin: {
            width: 230,
            height: 230,
            resizeMode: 'contain',
        },
        optionCard: {
            backgroundColor: colors.card, // o un color dinámico basado en el tema
            borderRadius: 15,
            paddingVertical: 16,
            paddingHorizontal: 20,
            marginVertical: 8,
            marginHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        
        optionContent: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        
        optionIcon: {
            fontSize: 28,
            marginRight: 12,
            color: 'white',
        },

        optionIconImage: {
            width: 50,
            height: 50,
            marginRight: 12,
        },
        
        optionText: {
            fontSize: 28,
            color: colors.text,
            fontWeight: '500',
        },
        
        optionArrow: {
            fontSize: 40,
            color: colors.text,
            fontWeight: 'bold',
        },
        emojiContainerIndex: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
            paddingHorizontal: 10,
        },
        
        emojiIndex: {
            fontSize: 40,
        },
        
        emojiLabels: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
        },
        
        emojiLabel: {
            fontSize: 14,
            color: colors.text,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });
}

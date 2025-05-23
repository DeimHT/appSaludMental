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
            backgroundColor: colors.tabIconSelected, // color de fondo cuando está activo
            borderRadius: 30,
            paddingHorizontal: 8,
            paddingVertical: 8, },
        configButton: { 
            backgroundColor: colors.tabIconSelected, // color de fondo cuando está activo
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
            backgroundColor: colors.background,
            justifyContent: "center",
            paddingHorizontal: 5,
        },
        backButton: {
            position: "absolute",
            top: 40,
            left: 20,
        },

        profileButton: {
            gap: 2,
            borderRadius: 10,
            minWidth: "75%",
            backgroundColor: colors.card,
            marginBottom: 20,
            minHeight: 55,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        configsButton: {
            minWidth: "75%",
            borderRadius: 10,
            backgroundColor: colors.card,
            marginBottom: 20,
            minHeight: 55,
            alignItems: "center",
            justifyContent: "center",
        },
        buttonText: {
            color: colors.text,
            fontSize: 16,
            textAlign: "center",
        },
        buttonProfileText: {
            color: colors.text,
            fontSize: 16,
            marginLeft: 10,
        },
        buttonLogOutText: {
            color: colors.text,
            fontSize: 16,
            marginLeft: 10,
        },
        iconPerfil: {
            color: colors.text,
        },
        switchContainer: {
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: colors.card,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 10,
            minWidth: "75%",
            justifyContent: "space-between",
            marginBottom: 20,
            minHeight: 55,
        },
        switchText: {
            color: colors.text,
            fontSize: 16,
        },
        logoutButton: {
            flexDirection: "row",
            justifyContent: 'center',
            backgroundColor: colors.alert,
            paddingVertical: 12,
            paddingHorizontal: 40,
            borderRadius: 10,
            minWidth: "75%",
            alignItems: "center",
            marginBottom: 100,
        },
        logoutIcon: {
            width: 24,
            height: 24,
            resizeMode: 'contain',
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
        cardActivity:{
            backgroundColor: colors.background,
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
        },
        checkbox: {
            color: colors.title, 
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
            width: 60,
            height: 60,
            marginRight: 12,
            resizeMode: 'contain',
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
            justifyContent: 'center',
            marginBottom: 10,
        },
        logoTextLogin: {
            fontSize: 24,
            color: '#003480',
            fontWeight: 'bold',
            marginTop: 10,
        },
        containerLogin2: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center', // <- Este es el cambio clave
            backgroundColor: colors.background,
            paddingHorizontal: 20,
        },
        loginBox: {
            width: '90%',
            backgroundColor: colors.card2,
            borderRadius: 20,
            paddingVertical: 25,
            paddingHorizontal: 20,
            alignItems: 'center',
            maxWidth: 380,
            elevation: 6,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
        },
        loginTitle: {
            fontSize: 24,
            fontWeight: '700',
            color: colors.title2,
            marginBottom: 20,
        },
        labelLogin: {
            alignSelf: 'flex-start',
            marginBottom: 6,
            fontSize: 16,
            fontWeight: '600',
            color: colors.title2,
        },
        inputLogin: {
            width: '100%',
            padding: 12,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colors.title2,
            backgroundColor: colors.background2,
            marginBottom: 16,
            fontSize: 15,
        },
        loginButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.title2,
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 24,
            marginTop: 10,
            width: '100%',
        },
        loginButtonIcon: {
            width: 24,
            height: 24,
            resizeMode: 'contain',
        },
        loginButtonText: {
            color: colors.text,
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
        },
        forgotTextLogin: {
            color: colors.title2,
            fontSize: 14,
            marginTop: 12,
            textDecorationLine: 'underline',
        },
        logoLogin: {
            width: 230,
            height: 230,
            resizeMode: 'contain',
        },
        optionCard: {
            backgroundColor: colors.card,
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
            flexShrink: 1, // <-- permite que el contenido se adapte
            flexGrow: 1,   // <-- usa el espacio restante
            marginRight: 12, // deja aire para la flecha
        },
        
        
        optionIcon: {
            fontSize: 28,
            marginRight: 12,
            color: 'white',
        },

        optionIconImage: {
            width: 60,
            height: 60,
            marginRight: 12,
            resizeMode: 'contain',
        },
        
        optionText: {
            flexShrink: 1,
            flexWrap: 'wrap',
            fontSize: 24,
            color: colors.text,
            fontWeight: '500',
            lineHeight: 24,
        },
        
        
        optionArrow: {
            fontSize: 24,
            color: colors.text,
            fontWeight: 'bold',
            marginLeft: 4,
            maxWidth: 20, // <-- evita que se expanda
        },
        
        emojiContainerIndex: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
            paddingHorizontal: 10,
        },
        
        emojiIndex: {
            width: 40,
            height: 40,
            marginRight: 12,
            resizeMode: 'contain',
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
        errorTextLogin: {
            marginBottom: 12,
            fontSize: 13,
            textAlign: 'center',
        },
    });
}

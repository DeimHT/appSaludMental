import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    safeArea: { flex: 0, backgroundColor: "#003480" },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#003480",
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
    rightSection: { flexDirection: "row", gap: 15 },
    navbar: { backgroundColor: "#003480" },
    containerConfig: {
        flex: 1,
        backgroundColor: "#A2C5EC",
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
        marginTop: 20,
    },
    headerIcons: {
        flexDirection: "row",
        gap: 15,
    },
    content: {
        padding: 15,
    },
    card: {
        backgroundColor: "#3D5A80",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
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
        color: "white",
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
});
// utils/logout.ts

import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { router } from "expo-router";

export async function logout() {
    try {
        await signOut(auth);
        router.replace("/login"); // 🔥 Redirige al Login al cerrar sesión
    } catch (error) {
        console.error("Error cerrando sesión:", error);
    }
}

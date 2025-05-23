export const logIn = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Botones/LogIn.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Botones/LogIn.png'),
} as const;

export const logOut = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Botones/LogOut.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Botones/LogOut.png'),
} as const;

export const guardar = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Botones/Guardar.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Botones/Guardar.png'),
} as const;

export const nuevoDiario = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Botones/Nuevo Diario.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Botones/Nuevo Diario.png'),
} as const;

export const pregunta = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Botones/Pregunta.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Botones/Pregunta.png'),
} as const;


// Exporta un tipo reutilizable en el contexto
export type ThemeName = keyof typeof logIn;
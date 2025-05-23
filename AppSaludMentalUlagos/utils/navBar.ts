export const home = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/NavBar/Home.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/NavBar/Home.png'),
} as const;

export const actividades = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/NavBar/Actividades.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/NavBar/Actividades.png'),
} as const;

export const seguimiento = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/NavBar/Seguimiento.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/NavBar/Seguimiento.png'),
} as const;


// Exporta un tipo reutilizable en el contexto
export type ThemeName = keyof typeof home;
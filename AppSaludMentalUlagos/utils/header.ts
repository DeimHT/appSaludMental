export const config = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Header/Configuracion.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Header/Configuracion.png'),
} as const;

export const telefono = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Header/Telefono.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Header/Telefono.png'),
} as const;



// Exporta un tipo reutilizable en el contexto
export type ThemeName = keyof typeof config;
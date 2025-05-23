export const logos = {
    'Tema azul': require('@/assets/images/Logo/Tema azul/Logo Cuadrado.png'),
    'Tema morado': require('@/assets/images/Logo/Tema morado/Logo Cuadrado.png'),
} as const;

export const logoH = {
    'Tema azul': require('@/assets/images/Logo/Tema azul/Logo Horizontal.png'),
    'Tema morado': require('@/assets/images/Logo/Tema morado/Logo Horizontal.png'),
} as const;

export const logoST = {
    'Tema azul': require('@/assets/images/Logo/Tema azul/Logo sin texto.png'),
    'Tema morado': require('@/assets/images/Logo/Tema morado/Logo sin texto.png'),
    } as const;

// Exporta un tipo reutilizable en el contexto
export type ThemeName = keyof typeof logos;
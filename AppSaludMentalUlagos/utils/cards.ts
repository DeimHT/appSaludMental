export const actividades = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Cards/Actividades.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Cards/Actividades.png'),
} as const;

export const aquiContigo = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Cards/AquiContigo.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Cards/AquiContigo.png'),
} as const;

export const calendario = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Cards/Calendario.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Cards/Calendario.png'),
} as const;

export const crecimiento = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Cards/Crecimiento.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Cards/Crecimiento.png'),
} as const;

export const diario = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Cards/Diario.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Cards/Diario.png'),
} as const;

export const nuevoDiario = {
    'Tema azul': require('@/assets/images/Icons/Tema azul/Cards/Nuevo Diario.png'),
    'Tema morado': require('@/assets/images/Icons/Tema morado/Cards/Nuevo Diario.png'),
} as const;

// Exporta un tipo reutilizable en el contexto
export type ThemeName = keyof typeof actividades;
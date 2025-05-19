import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors'; 

export function useAppTheme() {
    const colorScheme = useColorScheme(); // retorna 'light' o 'dark'

    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const themeName = colorScheme === 'dark' ? 'Tema morado' : 'Tema azul';

    return {
        theme,         // Colores según el tema
        themeName,     // Nombre del tema personalizado
        colorScheme,   // 'light' o 'dark'
    };
}

import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function CustomTabButton({ children, onPress, accessibilityState }: any) {
    const { theme } = useTheme();
    const isSelected = accessibilityState?.selected;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        <View
            style={{
                backgroundColor: isSelected ? '#134793' : 'transparent', // color de fondo cuando está activo
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 2,
            }}
        >
            {children}
        </View>
        </TouchableOpacity>
    );
}

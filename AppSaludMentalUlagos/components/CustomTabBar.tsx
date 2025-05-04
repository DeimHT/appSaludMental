import React from 'react';
import { View, TouchableOpacity, Platform, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: Colors[theme].navbar,
            borderTopWidth: 0,
            paddingTop: 10,
            paddingBottom: insets.bottom > 0 ? insets.bottom : 12, // 👈 adaptativo
            height: 70 + insets.bottom, // 👈 eleva la barra si hay notch/barra de gestos
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
        }}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
            }
            };

            const Icon = options.tabBarIcon?.({
            focused: isFocused,
            color: isFocused ? Colors[theme].tabIconDefault : Colors[theme].tabIconDefault,
            size: 24,
            });

            return (
            <TouchableOpacity
                key={route.key}
                onPress={onPress}
                activeOpacity={0.8}
                style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isFocused ? Colors[theme].tabIconSelected : 'transparent',
                borderRadius: 12,
                marginHorizontal: 6,
                paddingVertical: 6,
                marginBottom: Platform.OS === 'ios' ? 0 : 10, // 👈 eleva la barra si hay notch/barra de gestos
                }}
            >
                {Icon}
                <Text
                    style={{
                    fontSize: 12,
                    marginTop: 4,
                    color: isFocused ? Colors[theme].tabIconDefault : Colors[theme].tabIconDefault,
                    fontWeight: isFocused ? 'bold' : 'normal',
                    }}
                >
                    {options.title}
                </Text>
            </TouchableOpacity>
            );
        })}
        </View>
    );
}

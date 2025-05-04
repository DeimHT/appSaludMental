import { Stack } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';

export default function ConfigLayout() {
    return (
        <Stack
            screenOptions={{
                header: () => <CustomHeader />,
            }}
        />
    );
}

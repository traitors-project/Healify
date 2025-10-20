import { colorCode } from '@/shared/constants/Colors';
import { Stack } from 'expo-router';

export default function AppsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorCode.mintGreen,
        },
        headerTintColor: colorCode.darkGreen,
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

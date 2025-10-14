import { colorCode } from '@/shared/constants/Colors';
import { Stack } from 'expo-router';

export default function AppsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorCode.lightGray,
        },
        headerTintColor: colorCode.gray,
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

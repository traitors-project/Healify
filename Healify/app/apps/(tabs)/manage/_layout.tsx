import { colorCode } from '@/shared/constants/Colors';
import { runtimeStore } from '@/shared/stores';
import { AntDesign } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { IconButton } from 'react-native-paper';

export default observer(function ManageLayout() {
  const router = useRouter();

  const onPressBack = () => {
    runtimeStore.resetToolState();
    runtimeStore.setShowHeaderTabs(true);
    router.navigate('/apps/(tabs)/manage');
  };

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorCode.mintGreen,
          },
          headerTintColor: colorCode.darkGreen,
        }}
        initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="stress"
          options={{
            headerTitle: 'Измерение стресса',
            headerLeft: () => {
              return (
                <IconButton
                  icon={({ size }) => (
                    <AntDesign name="arrow-left" size={size} color={colorCode.darkGreen} />
                  )}
                  onPress={() => onPressBack()}
                  size={24}
                  style={{ marginTop: 8, marginLeft: -6, marginRight: 20 }}
                />
              );
            },
          }}
        />
      </Stack>
    </>
  );
});

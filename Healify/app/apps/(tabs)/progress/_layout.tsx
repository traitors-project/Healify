import { Stack, useRouter } from 'expo-router';
import React from 'react';

import { observer } from 'mobx-react-lite';
import { IconButton } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { runtimeStore } from '@/shared/stores';
import { colorCode } from '@/shared/constants/Colors';

export default observer(function ProgressLayout() {
  const router = useRouter();
  const onPressDone = () => {
    runtimeStore.resetTestPhq9Score();
    runtimeStore.setShowHeaderTabs(true);
    router.dismissTo('/apps/progress');
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
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="progress-result"
          options={{
            headerTitle: 'Результаты тестирования',
            headerRight: () => {
              return (
                <IconButton
                  icon={({ size }) => (
                    <FontAwesome5 name="check-circle" size={size} color={colorCode.darkGreen} />
                  )}
                  onPress={onPressDone}
                  size={24}
                  style={{ marginTop: 8 }}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="test-phq9"
          options={{
            headerShown: true,
          }}
        />
      </Stack>
    </>
  );
});

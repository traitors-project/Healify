import { colorCode } from '@/shared/constants/Colors';
import { toolsItems } from '@/shared/constants/Tools.Consts';
import { runtimeStore } from '@/shared/stores';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Stack, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { IconButton } from 'react-native-paper';

export default observer(function ToolsLayout() {
  const router = useRouter();

  const onPressDone = () => {
    runtimeStore.setToolComplited(true);
    router.push('/apps/manage/stress');
  };

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colorCode.mintGreen,
          },
          headerTintColor: colorCode.darkGreen,
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
          headerShown: runtimeStore.showHeaderTools,
        }}>
        <Stack.Screen
          name={toolsItems.quotesForReflection.link}
          options={{
            headerTitle: toolsItems.quotesForReflection.name,
          }}
        />
        <Stack.Screen
          name={toolsItems.timerNotification.link}
          options={{
            headerTitle: toolsItems.timerNotification.name,
          }}
        />
        <Stack.Screen
          name={toolsItems.soundsOfNature.link}
          options={{
            headerTitle: toolsItems.soundsOfNature.name,
          }}
        />
        <Stack.Screen
          name={toolsItems.fallAsleep.link}
          options={{
            headerTitle: toolsItems.fallAsleep.name,
          }}
        />
        <Stack.Screen
          name={toolsItems.breathingPractices.link}
          options={{
            headerTitle: toolsItems.breathingPractices.name,
          }}
        />
        <Stack.Screen
          name={toolsItems.meditation.link}
          options={{
            headerTitle: toolsItems.meditation.name,
          }}
        />
      </Stack>
    </>
  );
});

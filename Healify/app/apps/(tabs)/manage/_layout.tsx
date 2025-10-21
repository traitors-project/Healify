import { colorCode } from '@/shared/constants/Colors';
import { toolResults, toolResultsMessages } from '@/shared/constants/Tools.Consts';
import { runtimeStore } from '@/shared/stores';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

export default observer(function ManageLayout() {
  const router = useRouter();

  const onPressDone = () => {
    runtimeStore.resetToolState();
    runtimeStore.setShowHeaderTabs(true);
    router.dismissTo('/apps/manage');
  };

  const getResultTitle = () => {
    let resultMessage = toolResultsMessages.default;
    switch (runtimeStore.resultType) {
      case toolResults.decreased:
        resultMessage = toolResultsMessages.decreased;
        break;
      case toolResults.notChanged:
        resultMessage = toolResultsMessages.notChanged;
        break;
      case toolResults.increased:
        resultMessage = toolResultsMessages.increased;
        break;
      case toolResults.dangerousIncreased:
        resultMessage = toolResultsMessages.dangerousIncreased;
        break;
    }
    return (
      <View>
        <Text
          style={{
            fontSize: 18,
            color: colorCode.darkGreen,
            fontWeight: 500,
            fontFamily: 'system-ui',
          }}>
          {resultMessage}
        </Text>
      </View>
    );
  };

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
        <Stack.Screen name="tools" options={{ headerShown: false }} />
        <Stack.Screen
          name="crisis"
          options={{
            headerTitle: 'Кризис',
          }}
        />
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
        <Stack.Screen
          name="result"
          options={{
            headerTitle: getResultTitle,
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
      </Stack>
    </>
  );
});

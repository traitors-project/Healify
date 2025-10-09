import { Stack, useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import React from 'react';

export default observer(function LearnLayout() {
  const router = useRouter();

  const onPressBack = () => {
    router.dismissTo('/learn');
  };

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#c6cbef',
          },
          headerTintColor: '#717ee3',
        }}
        initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
});

import { Stack, useRouter } from 'expo-router';
import React from 'react';

import { observer } from 'mobx-react-lite';

export default observer(function ProgressLayout() {
  const router = useRouter();

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
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
});

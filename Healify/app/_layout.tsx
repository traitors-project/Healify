/* eslint-disable @typescript-eslint/no-require-imports */
import { CustomDrawerContent } from '@/shared/components/CustomDrawerContent';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Icon, PaperProvider } from 'react-native-paper';
import { colorCode } from '@/shared/constants/Colors';
import { runtimeStore } from '@/shared/stores';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// SplashScreen.preventAutoHideAsync();

export default observer(function RootLayout() {
  const statusBarHeight = getStatusBarHeight();

  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Drawer
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerType: 'slide',
            drawerStyle: {
              backgroundColor: colorCode.lightGray,
            },
            drawerActiveBackgroundColor: colorCode.gray,
            drawerActiveTintColor: '#fff',
            drawerItemStyle: {
              marginBottom: 4,
            },
            headerTintColor: colorCode.black,
            headerStyle: {
              backgroundColor: colorCode.lightGray,
              height: runtimeStore.showHeaderDrawer ? 64 + statusBarHeight : 0,
              elevation: runtimeStore.showHeaderDrawer ? 1 : 0,
            },
            headerLeftContainerStyle: {
              display: runtimeStore.showHeaderDrawer ? 'flex' : 'none',
            },
          }}>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Главная',
              title: 'Healify',
              drawerIcon: ({ size, color }) => <Icon source="home" size={size} color={color} />,
            }}
          />
          <Drawer.Screen
            name="instruction"
            options={{
              drawerLabel: 'Инструкция',
              title: 'Как использовать приложение',
              drawerIcon: ({ size, color }) => <Ionicons name="book" size={size} color={color} />,
            }}
          />
          <Drawer.Screen
            name="apps"
            options={{
              title: 'apps',
              headerShown: false,
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
});

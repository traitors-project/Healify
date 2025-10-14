import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { IconButton, Text } from 'react-native-paper';
import { colorCode } from '@/shared/constants/Colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function TabLayout() {
  const router = useRouter();
  const statusBarHeight = getStatusBarHeight();

  const onPressHome = (): void => {
    router.navigate('/');
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorCode.gray,
        tabBarActiveBackgroundColor: colorCode.borderGray,
        headerStyle: {
          backgroundColor: colorCode.lightGray,
          height: 64 + statusBarHeight,
        },
        headerTitleStyle: {
          color: colorCode.black,
        },
        headerLeft: () => {
          return (
            <IconButton icon="home" iconColor={colorCode.black} onPress={onPressHome} size={24} />
          );
        },
      }}>
      <Tabs.Screen
        name="manage"
        options={{
          headerTitle: 'Управление симптомами',
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }} variant="bodySmall">
              Симптомы
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Ionicons name="grid" color={color} size={size - 2} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          headerTitle: 'Прогресс',
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }} variant="bodySmall">
              Прогресс
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          headerTitle: 'Изучить',
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }} variant="bodySmall">
              Изучить
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Ionicons name="book" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          headerTitle: 'Поддержка',
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }} variant="bodySmall">
              Поддержка
            </Text>
          ),
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

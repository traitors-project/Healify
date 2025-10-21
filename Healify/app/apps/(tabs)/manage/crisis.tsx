import React from 'react';
import { router } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { runtimeStore } from '@/shared/stores';
import { findItemByType } from '@/shared/constants/Tools.Consts';
import { colorCode } from '@/shared/constants/Colors';

export default function CrisisPage() {
  const onPressSupport = () => {
    runtimeStore.resetToolState();
    router.dismissTo('/apps/manage');
    router.navigate('/apps/support');
  };

  const onPressTools = () => {
    const toolLink = findItemByType(runtimeStore.toolType)?.link;

    router.navigate(`./tools/${toolLink}`);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.stressMessage}>
        Это очень высокий уровень стресса. Возможно вам стоит обратиться за специализированной
        помощью. Вы бы хотели поговорить с кем-нибудь прямо сейчас?
      </Text>

      <View style={styles.actionButtons}>
        <Button
          mode="elevated"
          onPress={onPressTools}
          textColor={colorCode.darkGreen}
          style={styles.button}>
          Нет, перейти к упражнению
        </Button>
        <Button
          mode="elevated"
          onPress={onPressSupport}
          textColor={colorCode.darkGreen}
          style={styles.button}>
          Да, я хочу поговорить
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    justifyContent: 'space-between',
    height: '100%',
  },
  stressMessage: {
    color: colorCode.black,
  },
  actionButtons: {
    gap: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colorCode.mintGreen,
  },
});

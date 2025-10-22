import React from 'react';
import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { colorCode } from '@/shared/constants/Colors';
import { runtimeStore } from '@/shared/stores';
import { testPGQ9Scale } from '@/shared/constants/Test.Const';

export default function TestResultPage() {
  const router = useRouter();

  const getInterpretation = () => {
    const result = testPGQ9Scale.find(
      (item) => runtimeStore.testPhq9Score >= item.min && runtimeStore.testPhq9Score <= item.max,
    );
    return (
      result || {
        name: 'Неизвестный результат',
        description: 'Ошибка в подсчете результатов.',
      }
    );
  };
  const interpretation = getInterpretation();
  return (
    <>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Полученный результат</Text>
          <Text style={[styles.text, { fontWeight: 800 }]}>{runtimeStore.testPhq9Score}</Text>
        </View>

        <View>
          <Text style={styles.text}>{interpretation.description}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    height: '100%',
  },
  text: {
    margin: 8,
    color: colorCode.darkGreen,
    textAlign: 'justify',
    maxWidth: 300,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { colorCode } from '@/shared/constants/Colors';
import { testAnswer, testQuestion } from '@/shared/constants/Test.Const';
import { runtimeStore } from '@/shared/stores';
import { useRouter } from 'expo-router';
import { Button, Text } from 'react-native-paper';

export default function TestPHQ9Page() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const totalQuestions = testQuestion.length;
  const currentQuestion = testQuestion[currentQuestionIndex];

  const [isProcessing, setIsProcessing] = useState(false);

  const handleAnswer = (score: number) => {
    if (isProcessing) {
      return;
    }
    setIsProcessing(true);

    runtimeStore.setTestPhq9Score(runtimeStore.testPhq9Score + score);

    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    if (isLastQuestion) {
      router.navigate('/apps/progress/progress-result');
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
    setTimeout(() => {
      setIsProcessing(false);
    }, 300);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{currentQuestion.text}</Text>
        <View style={styles.actionButtons}>
          <Button
            mode="elevated"
            onPress={() => handleAnswer(testAnswer.nearlyEveryDay.score)}
            textColor={colorCode.darkGreen}
            style={styles.button}>
            {testAnswer.nearlyEveryDay.name}
          </Button>
          <Button
            mode="elevated"
            onPress={() => handleAnswer(testAnswer.moreThanHalf.score)}
            textColor={colorCode.darkGreen}
            style={styles.button}>
            {testAnswer.moreThanHalf.name}
          </Button>
          <Button
            mode="elevated"
            onPress={() => handleAnswer(testAnswer.severalDays.score)}
            textColor={colorCode.darkGreen}
            style={styles.button}>
            {testAnswer.severalDays.name}
          </Button>
          <Button
            mode="elevated"
            onPress={() => handleAnswer(testAnswer.notAtAll.score)}
            textColor={colorCode.darkGreen}
            style={styles.button}>
            {testAnswer.notAtAll.name}
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    gap: 4,
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    margin: 8,
    color: colorCode.darkGreen,
    textAlign: 'justify',
    maxWidth: 300,
    fontSize: 16,
    fontStyle: 'italic',
  },
  actionButtons: {
    gap: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colorCode.mintGreen,
  },
});

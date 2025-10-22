import React, { useState } from 'react';
import { Dimensions, View, StyleSheet, Image } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colorCode } from '@/shared/constants/Colors';

export default function FallAsleepPage() {
  const textArray = [
    'Ложитесь спать только тогда, когда вам хочется спать.',
    'Если вы в кровати уже 20 минут и не заснули, встаньте и поделайте что-то еще (что не требует яркого света или экрана телефона/телевизора/компьютера).',
    'Послушайте расслаблюяющую музыку.',
    'Почитайте что-то расслабляющее.',
    'Выпейте кружку теплого молока.',
    'Сделайте несколько медленных, глубоких вдохов носом. Делайте это 10 минут.',
  ];
  const imageSource = require('@/assets/images/night-sky.jpg');

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + textArray.length) % textArray.length);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Image source={imageSource} style={styles.image} />
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <Text style={styles.text}>{textArray[currentIndex]}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <IconButton
              style={{ backgroundColor: colorCode.mintGreen }}
              size={36}
              icon={() => <FontAwesome5 name="angle-left" size={24} color={colorCode.darkGreen} />}
              onPress={() => {
                handlePrevious();
              }}
            />
            <IconButton
              style={{ backgroundColor: colorCode.mintGreen }}
              size={36}
              icon={() => <FontAwesome5 name="angle-right" size={24} color={colorCode.darkGreen} />}
              onPress={() => {
                handleNext();
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    gap: 4,
    flex: 1,
  },
  image: {
    width: screenWidth - 20,
    height: 250,
    resizeMode: 'cover',
  },
  text: {
    margin: 8,
    color: colorCode.darkGreen,
    textAlign: 'justify',
    maxWidth: 300,
    fontSize: 16,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

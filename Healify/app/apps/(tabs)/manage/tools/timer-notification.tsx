import { colorCode } from '@/shared/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Button, IconButton, Text, TextInput } from 'react-native-paper';

export default function TimerNotificationPage() {
  const [text, setText] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [timeInMinutes, setTimeInMinutes] = useState<number>(0);

  const MINUTES_IN_HOUR = 60;
  const MAX_HOURS = 23;
  const MAX_TIME_MINUTES = MAX_HOURS * MINUTES_IN_HOUR + 59;
  type TimeUnit = 'hour' | 'minute';

  const handleTimeChange = (unit: TimeUnit, delta: 1 | -1) => {
    setTimeInMinutes((prevTimeInMinutes) => {
      let step = 0;
      if (unit === 'minute') {
        step = delta * 1;
      } else if (unit === 'hour') {
        step = delta * MINUTES_IN_HOUR;
      }
      let newTimeInMinutes = prevTimeInMinutes + step;
      if (newTimeInMinutes < 0) {
        return 0;
      }
      if (newTimeInMinutes > MAX_TIME_MINUTES) {
        return MAX_TIME_MINUTES;
      }
      return newTimeInMinutes;
    });
  };

  const totalHours = Math.floor(timeInMinutes / MINUTES_IN_HOUR);
  const remainingMinutes = timeInMinutes % MINUTES_IN_HOUR;

  const formattedHours = String(totalHours).padStart(2, '0');
  const formattedMinutes = String(remainingMinutes).padStart(2, '0');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onPressPlan = () => {};

  // TODO добавить отправку уведомлений

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Введите текст для уведомления</Text>

          <TextInput
            selectionColor={colorCode.darkGreen}
            outlineColor={colorCode.mintGreen}
            activeOutlineColor={colorCode.darkGreen}
            textColor="black"
            multiline={true}
            numberOfLines={10}
            style={styles.textInput}
            mode="outlined"
            placeholder="Введите текст здесь"
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <Text style={styles.text}>
            Введите нужное значения таймера в формате ЧЧ:ММ (максимальное значение 23 часа 59 минут)
          </Text>
          <View style={styles.timerControlWrapper}>
            <View style={styles.timerControl}>
              <IconButton
                style={{ backgroundColor: colorCode.mintGreen }}
                size={36}
                icon={() => <FontAwesome5 name="angle-up" size={24} color={colorCode.darkGreen} />}
                onPress={() => {
                  handleTimeChange('hour', 1);
                }}
              />
              <Text style={styles.valueText}>{formattedHours}</Text>
              <IconButton
                style={{ backgroundColor: colorCode.mintGreen }}
                size={36}
                icon={() => (
                  <FontAwesome5 name="angle-down" size={24} color={colorCode.darkGreen} />
                )}
                onPress={() => {
                  handleTimeChange('hour', -1);
                }}
              />
            </View>
            <Text
              style={{
                color: colorCode.darkGreen,
                fontSize: 28,
                fontWeight: 900,
                marginBottom: 5,
              }}>
              :
            </Text>
            <View style={styles.timerControl}>
              <IconButton
                style={{ backgroundColor: colorCode.mintGreen }}
                size={36}
                icon={() => <FontAwesome5 name="angle-up" size={24} color={colorCode.darkGreen} />}
                onPress={() => {
                  handleTimeChange('minute', 1);
                }}
              />
              <Text style={styles.valueText}>{formattedMinutes}</Text>
              <IconButton
                style={{ backgroundColor: colorCode.mintGreen }}
                size={36}
                icon={() => (
                  <FontAwesome5 name="angle-down" size={24} color={colorCode.darkGreen} />
                )}
                onPress={() => {
                  handleTimeChange('minute', -1);
                }}
              />
            </View>
          </View>
        </View>
        <Button
          mode="elevated"
          onPress={() => onPressPlan()}
          textColor={colorCode.darkGreen}
          style={styles.button}
          contentStyle={{ width: '100%', height: 50 }}
          labelStyle={[styles.buttonContent, { justifyContent: 'flex-start' }]}
          icon={({ color }) => <FontAwesome5 name="stopwatch" size={20} color={color} />}>
          Запланировать
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    // margin: 16,
    gap: 20,
  },
  button: {
    backgroundColor: colorCode.mintGreen,
    marginBottom: 10,
  },
  buttonContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    fontSize: 16,
  },
  text: {
    color: colorCode.darkGreen,
    fontSize: 16,
  },
  textInput: {
    color: colorCode.black,
    backgroundColor: 'white',
    paddingVertical: 6,
  },
  timerControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
  },
  timerControl: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
  },
  valueText: {
    fontSize: 28,
    textAlign: 'center',
    color: colorCode.black,
  },
});

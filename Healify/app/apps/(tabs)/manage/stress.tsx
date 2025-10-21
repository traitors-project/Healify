import Slider from '@react-native-community/slider';
import { useCallback, useState } from 'react';
import { Button, IconButton, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useFocusEffect, useRouter } from 'expo-router';
import { colorCode } from '@/shared/constants/Colors';
import { runtimeStore } from '@/shared/stores';
import {
  findItemByType,
  getRandomToolType,
  toolResults,
  toolsTypes,
} from '@/shared/constants/Tools.Consts';

export default function StressPage() {
  const router = useRouter();
  const [stressValue, setStressValue] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      setStressValue(0);
    }, []),
  );

  const handleChange = (delta: number) => {
    if (delta === 1) {
      setStressValue((prevState) => {
        return stressValue < 10 ? prevState + 1 : 10;
      });
    }
    if (delta === -1) {
      setStressValue(stressValue > 0 ? stressValue - 1 : 0);
    }
  };

  const onPressNext = () => {
    if (runtimeStore.toolComplited) {
      if (runtimeStore.stressValue > stressValue) {
        runtimeStore.setResultType(toolResults.decreased);
      }
      if (runtimeStore.stressValue === stressValue) {
        if (stressValue > 8) {
          runtimeStore.setResultType(toolResults.dangerousIncreased);
        } else {
          runtimeStore.setResultType(toolResults.notChanged);
        }
      }
      if (runtimeStore.stressValue < stressValue) {
        if (stressValue > 8) {
          runtimeStore.setResultType(toolResults.dangerousIncreased);
        } else {
          runtimeStore.setResultType(toolResults.increased);
        }
      }

      router.navigate('./result');
    } else {
      runtimeStore.setStressValue(stressValue);

      if (runtimeStore.toolType === toolsTypes.symptoms) {
        runtimeStore.setToolType(getRandomToolType());
      }

      if (stressValue > 8) {
        router.navigate('./crisis');
        return;
      }

      const toolLink = findItemByType(runtimeStore.toolType)?.link;
      router.dismissTo(`./tools/${toolLink}`);
    }
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: 'column', margin: 20 }}>
        <View style={{ margin: 15 }}>
          <Text variant="titleMedium" style={styles.textHeader}>
            Каков ваш текущий уровень стресса?
          </Text>
          <Text variant="titleSmall" style={styles.textCommon}>
            Для оценки уровня используйте слайдер или нажимайте на стрелки вверх и вниз.
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.sliderRow}>
            <View style={styles.sliderControl}>
              <IconButton
                style={{ backgroundColor: colorCode.mintGreen }}
                size={36}
                icon={() => <FontAwesome5 name="angle-up" size={24} color={colorCode.darkGreen} />}
                onPress={() => {
                  handleChange(1);
                }}
              />
              <Text
                style={[
                  styles.valueText,
                  stressValue > 8 ? { fontWeight: 'bold' } : { fontWeight: 'normal' },
                ]}>
                {stressValue}
              </Text>
              <IconButton
                style={{ backgroundColor: colorCode.mintGreen }}
                size={36}
                icon={() => (
                  <FontAwesome5 name="angle-down" size={24} color={colorCode.darkGreen} />
                )}
                onPress={() => {
                  handleChange(-1);
                }}
              />
            </View>

            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              value={stressValue}
              onSlidingComplete={(value) => setStressValue(value)}
              step={1}
              thumbTintColor={colorCode.darkGreen}
              minimumTrackTintColor="#f56969"
              maximumTrackTintColor="#32a860"
            />
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Button
            mode="elevated"
            onPress={() => onPressNext()}
            textColor={colorCode.darkGreen}
            style={styles.button}
            contentStyle={{ width: '100%', height: 50 }}
            labelStyle={[styles.buttonContent, { justifyContent: 'flex-start' }]}
            icon={({ color }) => <FontAwesome5 name="check" size={20} color={color} />}>
            Дальше
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    width: 250,
    height: 50,
    transform: [{ rotate: '-90deg' }],
  },
  sliderControl: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    marginLeft: 60,
  },
  valueText: {
    fontSize: 28,
    textAlign: 'center',
    color: colorCode.black,
  },
  button: {
    backgroundColor: colorCode.mintGreen,
  },
  buttonContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    fontSize: 16,
  },
  textHeader: {
    color: colorCode.black,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 15,
    fontStyle: 'italic',
  },
  textCommon: {
    color: colorCode.black,
    textAlign: 'center',
    margin: 10,
    fontStyle: 'italic',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

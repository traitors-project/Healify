import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function AboutPage() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.text}>
          Healify это мобильное приложение для людей с посттравматическим стрессовым расстройством
          (ПТСР) и для тех кто интересуется изучением ПТСР.
        </Text>
        <Text>
          Приложение може быть использовано для самостоятельного изучения и устранения симптомов, а
          также для оказания помощи при консультациях с врачом.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
  },
  text: {
    color: colorCode.darkGreen,
    fontSize: 16,
  },
});

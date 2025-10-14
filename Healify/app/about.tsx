import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function AboutPage() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.text}>О приложении</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
  },
  text: {
    color: colorCode.black,
    fontSize: 16,
  },
});

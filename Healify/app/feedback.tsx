import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function FeedbackPage() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.text}>Контакты для обратной связи</Text>
        <Text style={styles.text}>example@example.com</Text>
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

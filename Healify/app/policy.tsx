import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function PolicyPage() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.text}>Политика конфиденциальности</Text>
        <Text>
          При использовании этого приложжения никакие Ваши данные не будут использованы нами или
          третьими лицами
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

import { colorCode } from '@/shared/constants/Colors';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function InstructionPage() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>1. Начало работы</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>• Установите приложение из магазина приложений</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorCode.darkGreen,
    marginBottom: 12,
  },

  listContainer: {
    marginLeft: 15,
  },
  listItem: {
    fontSize: 15,
    color: colorCode.darkGreen,
    marginBottom: 8,
    lineHeight: 22,
  },
});

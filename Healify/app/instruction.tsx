import { colorCode } from '@/shared/constants/Colors';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function InstructionPage() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Мы рекомендуем:</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            • Отслеживать Ваш прогресс с помощью прохождения тестирований
          </Text>
          <Text style={styles.listItem}>
            • Когда вы чувствуете себя подавленно или находитесь в стрессе, используйте упражнения
            для улучшения своего состояния
          </Text>
          <Text style={styles.listItem}>
            • Используйте информацию из разделя Изучить для получения новых знаний о ПТСР
          </Text>
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

import { colorCode } from '@/shared/constants/Colors';
import { runtimeStore } from '@/shared/stores';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useFocusEffect, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function ProgressListPage() {
  const router = useRouter();

  const OnPressButton = () => {
    runtimeStore.setShowHeaderTabs(false);
    router.navigate('/apps/progress/test-phq9');
  };

  useFocusEffect(() => {
    runtimeStore.setShowHeaderTabs(true);
  });

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.list}>
          <Button
            mode="elevated"
            textColor={colorCode.darkGreen}
            style={styles.listItem}
            compact={true}
            // onPress={() => OnPressButton()}
            contentStyle={{
              width: '100%',
              height: 60,
              justifyContent: 'flex-start',
              marginLeft: 16,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
            icon={({ color }) => <FontAwesome5 name="book" size={24} color={color} />}>
            Дневник
          </Button>
          <Button
            mode="elevated"
            textColor={colorCode.darkGreen}
            style={styles.listItem}
            compact={true}
            onPress={() => OnPressButton()}
            contentStyle={{
              width: '100%',
              height: 60,
              justifyContent: 'flex-start',
              marginLeft: 16,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
            icon={({ color }) => <FontAwesome5 name="edit" size={24} color={color} />}>
            Тест PHQ-9
          </Button>
          <Button
            mode="elevated"
            textColor={colorCode.darkGreen}
            style={styles.listItem}
            compact={true}
            // onPress={() => OnPressButton()}
            contentStyle={{
              width: '100%',
              height: 60,
              justifyContent: 'flex-start',
              marginLeft: 16,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
            icon={({ color }) => <FontAwesome5 name="edit" size={24} color={color} />}>
            Тест PCL-5
          </Button>
          <Button
            mode="elevated"
            textColor={colorCode.darkGreen}
            style={styles.listItem}
            compact={true}
            // onPress={() => OnPressButton()}
            contentStyle={{
              width: '100%',
              height: 60,
              justifyContent: 'flex-start',
              marginLeft: 16,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
            icon={({ color }) => <FontAwesome5 name="chart-line" size={24} color={color} />}>
            Мониторинг
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  buttonContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    fontSize: 16,
  },
  list: {
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  listItem: {
    justifyContent: 'flex-start',
    backgroundColor: colorCode.mintGreen,
    borderRadius: 20,
  },
});

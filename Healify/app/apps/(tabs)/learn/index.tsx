import { colorCode } from '@/shared/constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function LearnListPage() {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.list}>
          <Button
            mode="elevated"
            textColor={'black'}
            style={styles.listItem}
            contentStyle={{
              width: '100%',
              height: 100,
              justifyContent: 'flex-start',
              marginLeft: 8,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 40 }]}
            icon={({ color }) => <FontAwesome6 name="magnifying-glass" size={45} color={color} />}>
            Информация о ПТСР
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    gap: 4,
  },
  listItem: {
    backgroundColor: colorCode.lightGray,
  },
  buttonContent: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    display: 'flex',
    fontSize: 16,
  },
  list: {
    gap: 8,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

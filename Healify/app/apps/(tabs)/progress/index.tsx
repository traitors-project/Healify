import { colorCode } from '@/shared/constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function ProgressListPage() {
  const router = useRouter();

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.list}>
          <Button
            mode="elevated"
            textColor={colorCode.black}
            style={styles.listItem}
            compact={true}
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
    gap: 2,
    paddingVertical: 10,
    paddingHorizontal: 2,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  listItem: {
    justifyContent: 'flex-start',
    backgroundColor: colorCode.lightGray,
    borderRadius: 20,
  },
  listItemContent: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  listItemInfo: {
    marginLeft: 0,
    flex: 1,
  },
  listItemName: {
    color: '#717ee3',
    overflow: 'hidden',
  },
  separator: {
    height: 8,
  },
});

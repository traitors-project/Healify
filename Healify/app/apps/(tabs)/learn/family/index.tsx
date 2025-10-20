import { colorCode } from '@/shared/constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

type ButtonType = {
  name: String;
};

export default function FamilyListPage() {
  const buttons: ButtonType[] = [{ name: 'Дети' }, { name: 'Конфликты' }, { name: 'Терапия' }];

  return (
    <>
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.list}>
            {buttons.map((item, index) => (
              <Button
                key={index}
                mode="elevated"
                textColor={colorCode.darkGreen}
                style={styles.listItem}
                contentStyle={{
                  width: '100%',
                  height: 100,
                  justifyContent: 'flex-start',
                  marginLeft: 8,
                }}
                labelStyle={[styles.buttonContent, { marginLeft: 40 }]}
                icon={({ color }) => (
                  <FontAwesome6 name="magnifying-glass" size={45} color={color} />
                )}>
                {item.name}
              </Button>
            ))}
          </View>
        </ScrollView>
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
    backgroundColor: colorCode.mintGreen,
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

import { useFocusEffect, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Button } from 'react-native-paper';
import { colorCode } from '@/shared/constants/Colors';
import { runtimeStore } from '@/shared/stores';

export default function AboutPage() {
  const router = useRouter();

  useFocusEffect(() => {
    runtimeStore.setShowHeaderTabs(true);
  });
  const handlePress = (link: string) => {
    // router.dismissTo();
  };

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.list}>
          <Button
            mode="elevated"
            textColor={colorCode.darkGreen}
            style={styles.listItem}
            onPress={() => {
              handlePress('');
            }}
            contentStyle={{
              width: '100%',
              height: 150,
              justifyContent: 'flex-start',
              marginLeft: 8,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 40 }]}
            icon={({ color }) => <FontAwesome6 name="handshake" size={45} color={color} />}>
            Контакты помощи
          </Button>
          <Button
            mode="elevated"
            textColor={colorCode.darkGreen}
            style={styles.listItem}
            onPress={() => {
              handlePress('');
            }}
            contentStyle={{
              width: '100%',
              height: 150,
              justifyContent: 'flex-start',
              marginLeft: 8,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 40 }]}
            icon={({ color }) => <FontAwesome6 name="hospital" size={45} color={color} />}>
            Найти профессиональную помощь
          </Button>
          <Button
            mode="elevated"
            textColor={colorCode.darkGreen}
            style={styles.listItem}
            onPress={() => {
              handlePress('');
            }}
            contentStyle={{
              width: '100%',
              height: 150,
              justifyContent: 'flex-start',
              marginLeft: 8,
            }}
            labelStyle={[styles.buttonContent, { marginLeft: 40 }]}
            icon={({ color }) => <FontAwesome6 name="users" size={45} color={color} />}>
            Найти собственную поддержку
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

import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';

export default function HomePage() {
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.links}>
          <View style={styles.row}>
            <Link href="/(tabs)/manage">
              <Surface style={styles.surface} elevation={4}>
                <Ionicons name="grid" size={96} color={'#717ee3'} />
                <Text style={styles.linkTitle}>Управление симптомами</Text>
              </Surface>
            </Link>

            <Link href="/(tabs)/progress">
              <Surface style={styles.surface} elevation={4}>
                <Ionicons name="stats-chart" size={96} color={'#717ee3'} />
                <Text style={styles.linkTitle}>Прогресс</Text>
              </Surface>
            </Link>
          </View>

          <View style={styles.row}>
            <Link href="/(tabs)/learn">
              <Surface style={styles.surface} elevation={4}>
                <Ionicons name="book" size={96} color={'#717ee3'} />
                <Text style={styles.linkTitle}>Изучить</Text>
              </Surface>
            </Link>

            <Link href="/(tabs)/support">
              <Surface style={styles.surface} elevation={4}>
                <Ionicons name="heart" size={96} color={'#717ee3'} />
                <Text style={styles.linkTitle}>Получить поддержку</Text>
              </Surface>
            </Link>
          </View>
        </View>
      </View>
    </>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  links: {
    marginTop: 40,
    display: 'flex',
    gap: 12,
  },
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  surface: {
    backgroundColor: '#c6cbef',
    height: screenWidth / 2.3,
    width: screenWidth / 2.3,
    maxWidth: 200,
    maxHeight: 200,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  linkTitle: {
    textAlign: 'center',
    color: '#717ee3',
  },
});

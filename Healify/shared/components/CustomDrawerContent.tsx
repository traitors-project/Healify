import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import packageJson from '@/package.json';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.closeContainer}>
            <IconButton
              icon={({ size }) => (
                <FontAwesome6 name="xmark" size={size} style={styles.closeButton} />
              )}
              onPress={() => props.navigation.closeDrawer()}
            />
          </View>
          <DrawerItemList {...props} />
        </View>
        <View style={styles.versionContainer}>
          <Text style={styles.version} variant="labelSmall">
            Version {packageJson.version}
          </Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  versionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBlockEnd: 30,
  },
  version: {
    opacity: 0.6,
    color: '#1c1c1e',
  },
  closeButton: {
    opacity: 0.6,
    color: '#1c1c1e',
  },
});

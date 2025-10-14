import { colorCode } from '@/shared/constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SegmentedButtons } from 'react-native-paper';

export default function ManagePage() {
  enum toolsListModes {
    symptoms = 'symptoms',
    tools = 'tools',
  }
  const [listMode, setListMode] = useState(toolsListModes.symptoms);
  const router = useRouter();

  return (
    <>
      <View style={styles.wrapper}>
        <SegmentedButtons
          value={listMode}
          onValueChange={setListMode}
          theme={{
            colors: {
              secondaryContainer: colorCode.lightGray,
              onSecondaryContainer: colorCode.black,
              onSurface: 'rgba(28, 28, 30, 0.68)',
            },
          }}
          buttons={[
            {
              value: toolsListModes.symptoms,
              label: 'Симптомы',
            },
            {
              value: toolsListModes.tools,
              label: 'Упражнения',
            },
          ]}
        />
        {listMode === toolsListModes.symptoms ? (
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
              icon={({ color }) => <FontAwesome5 name="bed" size={24} color={color} />}>
              Бессонница
            </Button>
          </View>
        ) : (
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
                marginLeft: 20,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 26 }]}
              icon={({ color }) => <FontAwesome5 name="tree" size={24} color={color} />}>
              Звуки природы
            </Button>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    gap: 12,
  },
  list: {
    gap: 8,
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

import { colorCode } from '@/shared/constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useFocusEffect, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SegmentedButtons } from 'react-native-paper';
import { runtimeStore } from '@/shared/stores';
import { toolsItems, toolsTypes } from '@/shared/constants/Tools.Consts';
export * from '@/shared/constants/Tools.Consts';

export default function ManagePage() {
  enum toolsListModes {
    symptoms = 'symptoms',
    tools = 'tools',
  }
  const [listMode, setListMode] = useState(toolsListModes.symptoms);
  const router = useRouter();

  useFocusEffect(() => {
    runtimeStore.setShowHeaderTabs(true);
  });

  const OnPressButton = (type: string) => {
    runtimeStore.setShowHeaderTabs(false);
    runtimeStore.setToolType(type);
    router.navigate('/apps/manage/stress');
  };

  return (
    <>
      <View style={styles.wrapper}>
        <SegmentedButtons
          value={listMode}
          onValueChange={setListMode}
          theme={{
            colors: {
              secondaryContainer: colorCode.mintGreen,
              onSecondaryContainer: colorCode.darkGreen,
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
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.symptoms)}
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
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.symptoms)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 16,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
              icon={({ color }) => <FontAwesome5 name="tired" size={24} color={color} />}>
              Тревожность
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.symptoms)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 16,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
              icon={({ color }) => <FontAwesome5 name="user-alt-slash" size={24} color={color} />}>
              Избегание общества
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.symptoms)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 16,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
              icon={({ color }) => <FontAwesome5 name="cloud" size={24} color={color} />}>
              Дереализация
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.symptoms)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 16,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
              icon={({ color }) => <FontAwesome5 name="ban" size={24} color={color} />}>
              Избегание триггеров
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.symptoms)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 16,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
              icon={({ color }) => <FontAwesome5 name="sad-tear" size={24} color={color} />}>
              Воспоминания о травме
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.symptoms)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 16,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 20 }]}
              icon={({ color }) => <FontAwesome5 name="angry" size={24} color={color} />}>
              Гнев
            </Button>
          </View>
        ) : (
          <View style={styles.list}>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.soundsOfNature)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 26 }]}
              icon={({ color }) => <FontAwesome5 name="tree" size={24} color={color} />}>
              {toolsItems.soundsOfNature.name}
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.timerNotification)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 26 }]}
              icon={({ color }) => <FontAwesome5 name="hourglass-half" size={24} color={color} />}>
              {toolsItems.timerNotification.name}
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.breathingPractices)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 26 }]}
              icon={({ color }) => <FontAwesome5 name="lungs" size={24} color={color} />}>
              {toolsItems.breathingPractices.name}
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.quotesForReflection)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 26 }]}
              icon={({ color }) => <FontAwesome5 name="comments" size={24} color={color} />}>
              {toolsItems.quotesForReflection.name}
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.meditation)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 26 }]}
              icon={({ color }) => <FontAwesome5 name="diagnoses" size={24} color={color} />}>
              {toolsItems.meditation.name}
            </Button>
            <Button
              mode="elevated"
              textColor={colorCode.darkGreen}
              style={styles.listItem}
              compact={true}
              onPress={() => OnPressButton(toolsTypes.fallAsleep)}
              contentStyle={{
                width: '100%',
                height: 60,
                justifyContent: 'flex-start',
                marginLeft: 20,
              }}
              labelStyle={[styles.buttonContent, { marginLeft: 26 }]}
              icon={({ color }) => <FontAwesome5 name="cloud-moon" size={24} color={color} />}>
              {toolsItems.fallAsleep.name}
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
    backgroundColor: colorCode.mintGreen,
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

import React from 'react';
import { useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { runtimeStore } from '@/shared/stores';
import { findItemByType, toolResults } from '@/shared/constants/Tools.Consts';
import { colorCode } from '@/shared/constants/Colors';

export default function ResultPage() {
  const router = useRouter();

  const onPressSupport = () => {
    runtimeStore.setStressValue(0);
    runtimeStore.resetToolState();
    runtimeStore.setShowHeaderDrawer(true);
    router.dismissTo('/apps/manage');
    router.navigate('/apps/support');
  };

  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.stressMessage}>
          {runtimeStore.resultType === toolResults.decreased &&
            `Отлично! Похоже, что упражнение "${
              findItemByType(runtimeStore.toolType)?.name
            }" снизило уровень вашего стреса. Постарайтесь запомнить этот инструмент. ` +
              `Все, что сработало у вас однажды может сработать и снова.`}

          {runtimeStore.resultType === toolResults.notChanged &&
            `Ладно, похоже, что после "${
              findItemByType(runtimeStore.toolType)?.name
            }" вы испытываете такой же стресс.` +
              `Возможно, для вас этого достаточно - в конце концов, хуже не стало! ` +
              `Или, может быть, вы надеялись на большее улучшение. Но помните, что для того, ` +
              `чтобы некоторые из этих инструментов действительно заработали, требуется время или практика, ` +
              `или они могут решить только определенные проблемы, так что пока не стоит сбрасывать их со счетов. ` +
              `Если вам так хочется. вы, конечно, могли бы попробовать другой инструмент прямо сейчас.`}

          {runtimeStore.resultType === toolResults.increased &&
            `Похоже, что после упражнения "${
              findItemByType(runtimeStore.toolType)?.name
            }" вы на самом деле чувствуете себя более подавленным. ` +
              `Возможно это полезно запомнить на будущее, поскольку вам не следует делать то, что у вас не получается. ` +
              `Но помните, что для того, чтобы некоторые из этих инструментов действительно заработали, ` +
              `требуется время или практика, или они могут решить только определенные проблемы, так что пока не ` +
              `стоит сбрасывать их со счетов. Поскольку вы все еще испытываете стресс, возможно, вам стоит попробовать другой инструмент`}

          {runtimeStore.resultType === toolResults.dangerousIncreased &&
            `Похоже, что после упражнения "${
              findItemByType(runtimeStore.toolType)?.name
            }" вы испытываете очень высокий уровень стресса. Возможно вам стоит обратиться за специализированной помощью. `}
        </Text>

        {runtimeStore.resultType === toolResults.dangerousIncreased && (
          <View style={styles.actionButtons}>
            <Button
              mode="elevated"
              onPress={onPressSupport}
              textColor={colorCode.darkGreen}
              style={styles.button}>
              Да, я хочу поговорить
            </Button>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    justifyContent: 'space-between',
    height: '100%',
  },
  stressMessage: {
    color: colorCode.black,
  },
  actionButtons: {
    gap: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colorCode.mintGreen,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

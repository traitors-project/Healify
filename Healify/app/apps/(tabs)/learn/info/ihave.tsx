// IHavePTSD.tsx
import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function IHavePTSD() {
    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>У меня ПТСР</Text>
                <Text style={styles.content}>
                    Если у вас диагностировано ПТСР, рассмотрите терапию, такую как когнитивно-поведенческая терапия, и поддержку.
                </Text>
                {/* Add more content as needed */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
        backgroundColor: colorCode.white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colorCode.darkGreen,
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        color: colorCode.black,
    },
});
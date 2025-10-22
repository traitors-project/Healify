// FactsAboutPTSD.tsx
import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function FactsAboutPTSD() {
    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Факты о ПТСР</Text>
                <Text style={styles.content}>
                    Факт 1: ПТСР может проявляться через флэшбэки, ночные кошмары и избегание напоминаний о травме.
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
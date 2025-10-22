// PrevalencePTSD.tsx
import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function PrevalencePTSD() {
    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Распространенность ПТСР</Text>
                <Text style={styles.content}>
                    ПТСР затрагивает около 3-5% населения в течение жизни, с более высокой распространенностью среди ветеранов и жертв насилия.
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
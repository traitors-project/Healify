// DevelopmentPTSD.tsx
import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function DevelopmentPTSD() {
    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Развитие ПТСР</Text>
                <Text style={styles.content}>
                    ПТСР развивается после травмы, когда мозг не может нормально обработать опыт, приводя к хроническому стрессу.
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
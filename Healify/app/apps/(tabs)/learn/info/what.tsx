// WhatIsPTSD.tsx
import { colorCode } from '@/shared/constants/Colors';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

export default function WhatIsPTSD() {
    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Что такое ПТСР</Text>
                <Text style={styles.content}>
                    Посттравматическое стрессовое расстройство (ПТСР) — это психическое расстройство, которое может развиться после переживания или свидетеля травматического события.
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
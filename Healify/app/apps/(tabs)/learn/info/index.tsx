import {colorCode} from '@/shared/constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {Link} from "expo-router";

type ButtonType = {
    name: String;
    link: any;
};

export default function InfoListPage() {
    const buttons: ButtonType[] = [
        {name: 'Что такое ПТСР', link: '/apps/(tabs)/learn/info/what'},
        {name: 'Распространенность ПТСР', link: '/apps/(tabs)/learn/info/prevalence'},
        {name: 'Факты о ПТСР', link: '/apps/(tabs)/learn/info/facts'},
        {name: 'Развитие ПТСР', link: '/apps/(tabs)/learn/info/dev'},
        {name: 'Есть ли у меня ПТСР?', link: '/apps/(tabs)/learn/info/doihave'},
        {name: 'У меня ПТСР', link: '/apps/(tabs)/learn/info/ihave'},
    ];

    return (
        <>
            <View style={styles.wrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.list}>
                        {buttons.map((item, index) => (
                            <Link href={item.link} key={index}>
                                <Button
                                    mode="elevated"
                                    textColor={colorCode.darkGreen}
                                    style={styles.listItem}
                                    contentStyle={{
                                        width: '100%',
                                        height: 100,
                                        justifyContent: 'flex-start',
                                        marginLeft: 8,
                                    }}
                                    labelStyle={[styles.buttonContent, {marginLeft: 40}]}
                                    icon={({color}) => (
                                        <FontAwesome6 name="magnifying-glass" size={45} color={color}/>
                                    )}>
                                    {item.name}
                                </Button>
                            </Link>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        margin: 10,
        gap: 4,
    },
    listItem: {
        backgroundColor: colorCode.mintGreen,
        width: '100%',
    },
    buttonContent: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        display: 'flex',
        fontSize: 16,
    },
    list: {
        gap: 8,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
});

import {Stack} from 'expo-router';
import {observer} from 'mobx-react-lite';
import React from 'react';

export default observer(function InfoLayout() {
    return (
        <>
            <Stack
                screenOptions={{headerShown: false}}
                initialRouteName="index">
                <Stack.Screen name="index" options={{headerShown: false}}/>
            </Stack>
        </>
    );
});

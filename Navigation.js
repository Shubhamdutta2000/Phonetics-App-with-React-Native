import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/Home/Home';
import TransliterationScreen from './screen/Transliteration/Transliteration';

const Stack = createNativeStackNavigator();

/**
 * 
 * @returns Navigation Route (Contained all Screens of the app)
 */
export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Phonetics App' }}
                />
                <Stack.Screen name="Transliteration" component={TransliterationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

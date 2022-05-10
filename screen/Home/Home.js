import React from 'react';
import { View, StatusBar, Text, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import HomeLogic from './Home.logic';
import { styles } from './Home.style';

/**
 * @param navigation -->  has various methods to link to other screens
 * @returns render Home Screen to the app
 */
export default function Home({ navigation }) {
    const {
        open,
        setOpen,
        langSelected,
        setLangSelected,
        langs,
        setLangs,
    } = HomeLogic();

    return (
        <View style={styles.container}>
            <Text style={styles.para}>
                Transliteration: It is machine transliteration software as service
                enable you to type in spicific language from English keyboard.
            </Text>
            <Text style={styles.para}>
                How It Helps?: You can copy from here and paste it on Facebook,
                WhatsApp, twitter, blogs, comment section at any site.
            </Text>
            <Text style={styles.heading}>
                Select Language
            </Text>
            <View style={styles.mainContent}>
                <DropDownPicker
                    placeholder="Select Language"
                    style={styles.dropDownPicker}
                    open={open}
                    value={langSelected}
                    items={langs}
                    setOpen={setOpen}
                    setValue={setLangSelected}
                    setItems={setLangs}
                />
                <Button
                    onPress={() =>
                        navigation.navigate('Transliteration', {
                            languageSelected: langSelected,
                        })
                    }
                    title="Continue"
                    color="#3cb66f"
                />
            </View>
            <StatusBar style="auto" />
            <Text style={styles.footer}>Copyright © 2022 by Shubham Dutta</Text>
        </View>
    );
}

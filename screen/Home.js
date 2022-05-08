import React from 'react';
import {
    View,
    StatusBar,
    TextInput,
    Text,
    Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import HomeLogic from './Home.logic';
import { styles } from './Home.style';

/**
 *
 * @returns render Home Screen to the app
 */
export default function Home() {
    const {
        error,
        loading,
        text,
        setText,
        res,
        open,
        setOpen,
        langSelected,
        setLangSelected,
        langs,
        setLangs,
        translate,
    } = HomeLogic();

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 40 }}>
                Phonetics App
            </Text>
            <Text style={styles.para}>
                Transliteration: It is machine transliteration software as service enable you to type in spicific language from English keyboard.
            </Text>
            <Text style={styles.para}>
                How It Helps?: You can copy from here and paste it on Facebook, WhatsApp, twitter, blogs, comment section at any site.
            </Text>
            <Text style={styles.para}>
                Type in English and select a particular language and Press
                Transliteration Button below to Get result text in specific language.
            </Text>
            <View style={styles.mainContent}>
                <TextInput
                    style={styles.textToTranslate}
                    placeholder="Type here to translate!"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
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
                <Button onPress={() => translate()} title="Transliteration" color="#3cb66f" />

                <TextInput
                    style={styles.resultText}
                    placeholder="Get Translation here..."
                    value={loading ? 'Loading...' : error ? error.message : res}
                    defaultValue={text}
                />
            </View>
            <StatusBar style="auto" />
            <Text style={styles.footer} >
                Copyright © 2022 by Shubham Dutta
            </Text>
        </View>
    );
}


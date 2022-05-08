import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    TextInput,
    Text,
    Button,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import HomeLogic from './home.logic';

/**
 * 
 * @returns render Home Screen to the app
 */
export default function Home() {
    const {
        data,
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
            <View>
                <TextInput
                    style={{ height: 140, fontSize: 20 }}
                    placeholder="Type here to translate!"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <DropDownPicker
                    placeholder="Select Language"
                    style={{ marginBottom: 20 }}
                    open={open}
                    value={langSelected}
                    items={langs}
                    setOpen={setOpen}
                    setValue={setLangSelected}
                    setItems={setLangs}
                />
                <Button onPress={() => translate()} title="Translate" color="#3cb66f" />

                <TextInput
                    style={{ height: 100, fontSize: 20 }}
                    placeholder="Get Translation here..."
                    value={loading ? 'Loading...' : error ? error.message : res}
                    defaultValue={text}
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2d5b4f',
    },
});

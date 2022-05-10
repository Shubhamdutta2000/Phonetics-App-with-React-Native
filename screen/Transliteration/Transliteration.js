import React from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';
import TransliterationLogic from './Transliteration.logic';
import { styles } from './Transliteration.style';

const TransliterationScreen = ({ navigation, route }) => {
    const { error, loading, text, setText, res, handleKeyPress } =
        TransliterationLogic();

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <TextInput
                        style={styles.textToTranslate}
                        placeholder="Type here to translate!"
                        onChangeText={newText => setText(newText)}
                        onKeyPress={handleKeyPress}
                        defaultValue={text}
                    />

                    <TextInput
                        style={styles.resultText}
                        placeholder="Get Translation here..."
                        value={loading ? 'Loading...' : error ? error.message : res}
                        defaultValue={text}
                    />
                    <Text style={styles.footer}>Copyright © 2022 by Shubham Dutta</Text>
                </ScrollView>
            </View>
        </>
    );
};

export default TransliterationScreen;

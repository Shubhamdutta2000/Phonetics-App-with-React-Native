import React from 'react';
import { View, TextInput, Text, ScrollView, Button } from 'react-native';
import TransliterationLogic from './Transliteration.logic';
import { styles } from './Transliteration.style';

/**
 * 
 * @param navigation 
 * @param route --> get languageSelected params from Home Screen
 * @returns renders Transliteration Screen
 */
const TransliterationScreen = ({ route }) => {
    const { error, loading, text, setText, res, translate } = TransliterationLogic();

    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.para}>
                        Transliteration: It is machine transliteration software as service
                        enable you to type in spicific language from English keyboard.
                    </Text>
                    <Text style={styles.para}>
                        Type in English and Press
                        Transliteration Button below to Get result text in specific language.
                    </Text>

                    <View style={styles.mainContent}>
                        <TextInput
                            style={styles.textToTranslate}
                            placeholder="Type here to translate!"
                            onChangeText={(newText) => setText(newText)}
                            defaultValue={text}
                        />
                        <Button
                            onPress={() => translate(route.params.languageSelected)}
                            title="Transliteration"
                            color="#3cb66f"
                        />
                        <TextInput
                            editable={false}
                            selectTextOnFocus={false}
                            style={styles.resultText}
                            placeholder="Get Translitation here..."
                            value={loading ? 'Loading...' : error ? error.message : res}
                            defaultValue={text}
                        />
                    </View>
                    <Text style={styles.footer}>Copyright © 2022 by Shubham Dutta</Text>
                </ScrollView>
            </View>
        </>
    );
};

export default TransliterationScreen;

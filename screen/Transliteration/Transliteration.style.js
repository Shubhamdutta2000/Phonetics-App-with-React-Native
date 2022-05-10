import { StyleSheet } from 'react-native';

/**
 * @returns style for Transliteration
 */
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2d5b4f',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 40,
    },
    para: {
        marginTop: 26,
        paddingLeft: 20,
        paddingRight: 20,
    },
    textToTranslate: {
        height: 100,
        fontSize: 20,
    },
    resultText: {
        color: "#fff",
        height: 120,
        fontSize: 20,
    },
    mainContent: {
        marginLeft: 20,
        marginRight: 20
    },
    footer: {
        marginTop: 50,
        marginBottom: 40,
        textAlign: "center"
    },
});

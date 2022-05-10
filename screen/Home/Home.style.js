import { StyleSheet } from 'react-native';

/**
 * @returns style for Home 
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
        marginBottom: 42,
        textAlign: "center"
    },
    para: {
        marginTop: 26,
        paddingLeft: 20,
        paddingRight: 20,
    },
    dropDownPicker: {
        marginBottom: 50,
    },
    footer: {
        marginTop: 50,
        marginBottom: 40,
        textAlign: 'center',
    },
    mainContent: {
        marginLeft: 20,
        marginRight: 20,
    },
});

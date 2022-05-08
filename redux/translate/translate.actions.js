import translateApi from '../../api/translate.api';
import {
    GET_TRANSLATE_LANGUAGE_FAILURE,
    GET_TRANSLATE_LANGUAGE_LOADING,
    GET_TRANSLATE_LANGUAGE_SUCCESS,
} from './translate.constant';

/**
 * 
 * @param {String} from 
 * @param {String} to 
 * @param {String} text 
 * @returns Action for translating from English language to specific language
 */
export const translateAction = (from, to, text) => async dispatch => {
    dispatch({ type: GET_TRANSLATE_LANGUAGE_LOADING });
    try {
        const resultText = await translateApi(from, to, text);
        console.log(resultText);
        dispatch({
            type: GET_TRANSLATE_LANGUAGE_SUCCESS,
            payload: {
                fromLanguage: from,
                toLanguage: to,
                text: text,
                resultText: resultText
            }
        });

    } catch (error) {
        dispatch({
            type: GET_TRANSLATE_LANGUAGE_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

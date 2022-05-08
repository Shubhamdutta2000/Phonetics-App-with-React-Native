import {
    GET_TRANSLATE_LANGUAGE_FAILURE,
    GET_TRANSLATE_LANGUAGE_LOADING,
    GET_TRANSLATE_LANGUAGE_SUCCESS,
} from './translate.constant';

// Initial State value added in the reducer
const initial_state = {
    loading: false,
    data: {
        fromLanguage: '',
        toLanguage: '',
        text: '',
        resultText: '',
    },
};

/**
 * 
 * @param {state} initial_state 
 * @param {Action} action 
 * @returns Reducer for translating from English language to specific language
 */
export default (state = initial_state, action) => {
    switch (action.type) {
        case GET_TRANSLATE_LANGUAGE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_TRANSLATE_LANGUAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_TRANSLATE_LANGUAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

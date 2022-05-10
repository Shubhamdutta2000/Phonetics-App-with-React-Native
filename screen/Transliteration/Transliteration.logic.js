import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { translateAction } from '../../redux/translate/translate.actions';

/**
 * @purpose Main Logic of Transliteration Screen
 */
export default TransliterationLogic = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [res, setRes] = useState('')

    const { data, error, loading } = useSelector((state) => state.translateLanguage);

    // Get data (resultText, languageSelected and text) from redux store (also from locally (if present))
    useEffect(() => {
        setRes(data && data.resultText);
        setText(data && data.text);
        console.log(data);
    }, [data, res])

    // translate text from English language to the particular language selected
    const translate = async (langSelected) => {
        console.log(langSelected);
        dispatch(translateAction("en", langSelected, text))
    }

    return {
        error,
        loading,
        text,
        setText,
        res,
        translate,
    }
}
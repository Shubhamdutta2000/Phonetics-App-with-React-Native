import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { translateAction } from '../../redux/translate/translate.actions';
import { isoLangs } from '../../utils/languages';

/**
 * @purpose Main Logic of Home Screen
 */
export default HomeLogic = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [res, setRes] = useState('')
    const [open, setOpen] = useState(false);
    const [langSelected, setLangSelected] = useState(data ? data.toLanguage : null);
    const [langs, setLangs] = useState(
        isoLangs.map((langObj) => {
            return { label: langObj.nativeName, value: langObj.code }
        })
    );

    const { data, error, loading } = useSelector((state) => state.translateLanguage);

    // Get data (resultText, languageSelected and text) from redux store (also from locally (if present))
    useEffect(() => {
        setRes(data && data.resultText);
        setLangSelected(data && data.toLanguage);
        setText(data && data.text);
        console.log(data);
    }, [data, res])

    // translate text from English language to the particular language selected
    const translate = async () => {
        dispatch(translateAction("en", langSelected, text))
    }

    return {
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
    }
}
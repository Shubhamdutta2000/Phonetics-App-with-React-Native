import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { translateAction } from '../redux/translate/translate.actions';
import { isoLangs } from '../utils/languages';

export default HomeLogic = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [res, setRes] = useState('')
    const [open, setOpen] = useState(false);
    const [langSelected, setLangSelected] = useState(null);
    const [langs, setLangs] = useState(
        isoLangs.map((langObj) => {
            return { label: langObj.nativeName, value: langObj.code }
        })
    );

    const { data, error, loading } = useSelector((state) => state.translateLanguage);

    useEffect(() => {
        setRes(data && data.resultText);
        console.log(data);
    }, [data, res])

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
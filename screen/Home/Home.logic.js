import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isoLangs } from '../../utils/languages';

/**
 * @purpose Main Logic of Home Screen
 */
export default HomeLogic = () => {
    const [open, setOpen] = useState(false);
    const [langSelected, setLangSelected] = useState(data ? data.toLanguage : null);
    const [langs, setLangs] = useState(
        isoLangs.map((langObj) => {
            return { label: langObj.nativeName, value: langObj.code }
        })
    );

    const { data } = useSelector((state) => state.translateLanguage);

    // Get data (languageSelected ) from redux store (also from locally (if present))
    useEffect(() => {
        setLangSelected(data && data.toLanguage);
        console.log(data);
    }, [data])

    return {
        open,
        setOpen,
        langSelected,
        setLangSelected,
        langs,
        setLangs,
    }
}
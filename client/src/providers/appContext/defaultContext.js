import {useSearchParams} from 'react-router-dom';

import {getFromStorage} from '../../utils/localStorage';
import {LOCALES, STORAGE_KEY} from '../../const';

export const useDefaultContext = () => {
    const [ searchParams ] = useSearchParams();
    return {
        locale: getFromStorage(STORAGE_KEY) || searchParams.get('locale') || LOCALES.ENGLISH,
    };
};
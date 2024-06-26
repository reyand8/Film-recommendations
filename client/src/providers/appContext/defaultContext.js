import {useSearchParams} from 'react-router-dom';

import {getFromStorage} from '../../utils/localStorage';
import {LOCALES, STORAGE_LOCALE_KEY, STORAGE_SELECTED_FILMS_KEY} from '../../common/const';

export const useDefaultContext = () => {
    const [ searchParams ] = useSearchParams();
    return {
        locale: getFromStorage(STORAGE_LOCALE_KEY) || searchParams.get('locale') || LOCALES.ENGLISH,
        selectedFilmsId: getFromStorage(STORAGE_SELECTED_FILMS_KEY) || [],
    };
};
import { useState, useCallback } from 'react';

import { SORT_DIRECTION } from '../../const';


export const useFilters = () => {
    const [filter, setFilterFields] = useState({
        page: 1,
        sortBy: 'original_title',
        sortDirection: SORT_DIRECTION.DESC,
        includeAdult: false,
    });

    const setPage = useCallback((page) => {
        setFilterFields({
            ...filter,
            page,
        });
    }, [filter]);

    const setFilter = useCallback((filterFields) => {
        setFilterFields({
            ...filter,
            ...filterFields,
        });
    }, [filter]);

    return {
        filter,
        setFilterFields,
        setPage,
        setFilter,
    };
};
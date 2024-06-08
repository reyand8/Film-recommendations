import { renderHook, act } from '@testing-library/react';
import { useFilters } from './index';

describe('useFilters hook', () => {
    test('should create initial state', () => {
        const { result } = renderHook(() => useFilters());

        expect(result.current.filter).toEqual({
            page: 1,
            sortBy: 'original_title',
            sortDirection: 'desc',
            includeAdult: false,
        });
    });

    test('should set page', () => {
        const { result } = renderHook(() => useFilters());
        act(() => {
            result.current.setPage(2);
        });

        expect(result.current.filter.page).toBe(2);
    });

    test('should set filter', () => {
        const { result } = renderHook(() => useFilters());
        act(() => {
            result.current.setFilter({ sortBy: 'release_date', sortDirection: 'ASC' });
        });

        expect(result.current.filter).toEqual({
            page: 1,
            sortBy: 'release_date',
            sortDirection: 'ASC',
            includeAdult: false,
        });
    });
});
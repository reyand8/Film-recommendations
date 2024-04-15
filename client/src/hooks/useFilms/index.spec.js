import { renderHook, act } from '@testing-library/react'
import { useFilms } from '.';
import {MAX_SELECTED_FILMS} from "../../const";


describe('useFilm hook', () => {
    const basicFilm = {
        id: 1,
        title: 'Film title'
    }

    it('should select film', () => {
        const {result} = renderHook(() => useFilms())

        act(() => {
            result.current.selectFilm(basicFilm)
        })
        expect(result.current.selectedFilms.length).toBe(1)
        expect(result.current.selectedFilms[0].id).toBe(basicFilm.id)
    })

    it('should delete film', () => {
        const {result} = renderHook(() => useFilms())

        act(() => {
            result.current.selectFilm(basicFilm)
        })
        expect(result.current.selectedFilms.length).toBe(1)


        act(() => {
            result.current.deleteFilm(basicFilm)
        })
        expect(result.current.selectedFilms.length).toBe(0)
    })

    it('should select film only once', () => {
        const {result} = renderHook(() => useFilms())

        act(() => {
            result.current.selectFilm(basicFilm)
        })
        act(() => {
            result.current.selectFilm(basicFilm)
        })
        expect(result.current.selectedFilms.length).toBe(1)
        expect(result.current.selectedFilms[0].id).toBe(basicFilm.id)
    })

    it('should add no more movies than it is allowed', () => {
        const {result} = renderHook(() => useFilms());

        for (let i=0; i < MAX_SELECTED_FILMS; i++) {
            act(() => {
                result.current.selectFilm({
                    ...basicFilm,
                    id: i
                })
            })
        }
        expect(result.current.selectedFilms.length).toBe(MAX_SELECTED_FILMS)
        act(() => {
            result.current.selectFilm({
                ...basicFilm,
                id: 21
            })
        })
        expect(result.current.selectedFilms.length).toBe(MAX_SELECTED_FILMS)
    })
})
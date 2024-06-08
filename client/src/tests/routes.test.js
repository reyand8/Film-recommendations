import {ROUTES} from '../routes';


describe('ROUTES', () => {
    test('should have the correct route for HOME', () => {
        expect(ROUTES.HOME).toBe('/');
    });

    test('should have the correct route for FILM', () => {
        expect(ROUTES.FILM).toBe('/film/:id');
    });

    test('should have the correct route for GENRES', () => {
        expect(ROUTES.GENRES).toBe('/genres');
    });

    test('should have the correct route for FILMS_BY_GENRE', () => {
        expect(ROUTES.FILMS_BY_GENRE).toBe('/genre/:id');
    });

    test('should have the correct route for SEARCH', () => {
        expect(ROUTES.SEARCH).toBe('/search');
    });

    test('should have the correct route for RECOMMEND', () => {
        expect(ROUTES.RECOMMEND).toBe('/recommend');
    });

    test('should have the correct route for ACCOUNT', () => {
        expect(ROUTES.ACCOUNT).toBe('/account');
    });
});
import {Route, Routes} from 'react-router-dom';

import {ROUTES} from '../../routes';
import {
        Home, Recommend, SingleFilm, Genres,
        FilmsByGenre, Search, Account
} from '../../pages';


const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.FILM} element={<SingleFilm />} />
        <Route path={ROUTES.GENRES} element={<Genres />} />
        <Route path={ROUTES.FILMS_BY_GENRE} element={<FilmsByGenre />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.RECOMMEND} element={<Recommend />} />
        <Route path={ROUTES.ACCOUNT} element={<Account />} />
    </Routes>
);

export default AppRoutes;
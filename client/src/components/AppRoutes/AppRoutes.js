import {Route, Routes} from "react-router-dom";

import {ROUTES} from "../../routes";
import {Home, Recommend, Settings} from "../../pages";
import SingleFilm from "../../pages/SingleFilm";
import Genres from "../../pages/Genres";
import FilmsByGenre from "../../pages/FilmsByGenre";
import Search from "../../pages/Search";


const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.FILM} element={<SingleFilm />} />
        <Route path={ROUTES.GENRES} element={<Genres />} />
        <Route path={ROUTES.FILMS_BY_GENRE} element={<FilmsByGenre />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={ROUTES.RECOMMEND} element={<Recommend />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
    </Routes>
);

export default AppRoutes;
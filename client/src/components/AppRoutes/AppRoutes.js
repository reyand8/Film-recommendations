import {Route, Routes} from "react-router-dom";

import {ROUTES} from "../../routes";
import {Home, Recommend, Settings} from "../../pages";
import SingleFilm from "../../pages/SingleFilm";
import Genres from "../../pages/Genres";


const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.FILM} element={<SingleFilm />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />}/>
        <Route path={ROUTES.GENRES} element={<Genres />} />
        <Route path={ROUTES.RECOMMEND} element={<Recommend />}/>
    </Routes>
);

export default AppRoutes;
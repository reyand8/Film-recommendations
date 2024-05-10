import {useState} from 'react';
import {Box, Grid, Pagination} from '@mui/material';
import Paper from '@mui/material/Paper';
import {useQuery} from '@apollo/client';

import {CardFilm} from '../../../components';
import Loading from '../../../components/status/Loading';
import DataError from '../../../components/status/DataError';
import {FILMS_BY_POPULARITY_QUERY} from '../../../gqlClient/quieries/queries';


const PopularFilms = ({selectFilm}) => {
    const [page, setPage] = useState(1);
    const {loading, error, data }  = useQuery(FILMS_BY_POPULARITY_QUERY, {variables: {page}});

    const paginationHandler = (event, page) => {
        setPage(page);
    };

    const pagesCount = data?.filmsByPopularity?.totalPages <= 500 ? data?.filmsByPopularity?.totalPages : 500;

    if (error) {
        return <DataError/>;
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <Grid item xs={12} md={8.5}>
            <Paper>
                <Box sx={{ flexGrow: 1, mb: 8, p: 1 }}>
                    {data && (
                        <Grid container spacing={2}>
                            {data.filmsByPopularity.results.map((film) => (
                                <Grid key={film.id} item xs={12} sm={6} md={4} lg={3}>
                                    <CardFilm film={film} onCardSelect={selectFilm}/>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination count={pagesCount}
                                    page={page}
                                    onChange={paginationHandler}/>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default PopularFilms;
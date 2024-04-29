import {Box, Grid, Pagination} from '@mui/material';
import Paper from '@mui/material/Paper';
import {useQuery} from '@apollo/client';

import {CardFilm} from '../../../components';
import {useFilms} from '../../../hooks/useFilms';
import DataError from '../../../components/DataError';
import {FILMS_BY_FILTER_QUERY} from '../../../quieries/queries';
import Loading from '../../../components/Loading';


const FilterFilms = ({filter, setPage, selectFilm}) => {

    const {loading, error, data } = useQuery(FILMS_BY_FILTER_QUERY,
        {variables: {filter}});

    const paginationHandler = (event, page) => {
        event.preventDefault();
        setPage(page);
    };

    const pagesCount = data?.filmsByFilter?.totalPages <= 500 ? data?.filmsByFilter?.totalPages : 500;

    if (error) {
        return <DataError/>;
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <Grid item xs={12} md={8.5}>
            <Paper>
                <Box sx={{ flexGrow: 1, mb: 8, p: 2 }}>
                    {data && (
                        <Grid container spacing={2}>
                            {data.filmsByFilter.results.map((film) => (
                                <Grid key={film.id} item xs={12} sm={6} md={4} lg={3}>
                                    <CardFilm film={film} onCardSelect={selectFilm}/>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination count={pagesCount}
                                    page={filter.page}
                                    onChange={paginationHandler}/>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default FilterFilms;
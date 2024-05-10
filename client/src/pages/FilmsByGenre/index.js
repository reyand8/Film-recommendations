import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {Box, Grid, Pagination} from '@mui/material';
import Paper from '@mui/material/Paper';

import {useFilters} from '../../hooks/useFilters';
import {useFilms} from '../../hooks/useFilms';
import DataError from '../../components/status/DataError';
import {SortMenu} from '../../components/filters/Filter';
import {CardFilm, SelectedFilmsSection} from '../../components';
import Loading from '../../components/status/Loading';
import {FILMS_BY_GENRE_QUERY} from '../../gqlClient/quieries/queries';


const FilmsByGenre = () => {
    const { filter, setFilterFields, setFilter, setPage } = useFilters();
    const { selectedFilms, selectFilm, deleteFilm } = useFilms();
    const [openSorting, setOpenSorting] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setFilterFields({...filter, genre: +id});
    }, []);

    const {loading, error, data } = useQuery(FILMS_BY_GENRE_QUERY,
        {variables: {filter}});

    const onSubmit = (data) => {
        setFilter({...data, genre: +id});
    };

    const paginationHandler = (event, page) => {
        setPage(page);
    };

    const pagesCount = data?.filmsByGenre?.totalPages <= 500 ? data?.filmsByGenre?.totalPages : 500;

    const sortMenu = () => {
        openSorting ? setOpenSorting(false) : setOpenSorting(true);
    };

    if (error) {
        return <DataError/>;
    }

    return (
        <>
            <Box>
                <Grid container sx={{ flexGrow: 1, my: 4}}>
                    <Grid item xs={9} md={6}  sx={{ mb: 6 }}>
                        <Paper sx={{padding: '16px'}}>
                            <FilterAltIcon onClick={() => sortMenu()}/>
                            {openSorting && (
                                <SortMenu onSubmit={onSubmit} initialValues={{...filter, genre: +id}}/>
                            )}
                        </Paper>
                    </Grid>
                    {loading && (
                        <Loading/>
                    )}
                        <Box sx={{ flexGrow: 1, mt: 2 }}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={8.5}>
                                    <Paper>
                                        <Box sx={{ flexGrow: 1, mb: 8, p: 2 }}>
                                            {data && (
                                                <Grid container spacing={2}>
                                                    {data.filmsByGenre.results.map((film) => (
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
                                <Grid item xs={12} md={3.5}>
                                    <SelectedFilmsSection selectedFilms={selectedFilms} deleteFilm={deleteFilm}/>
                                </Grid>
                            </Grid>
                        </Box>
                </Grid>
            </Box>
        </>
    );
};

export default FilmsByGenre;
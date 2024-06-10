import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {alpha, Box, Grid, Pagination} from '@mui/material';
import {useQuery} from '@apollo/client';

import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import {FILMS_BY_SEARCH_QUERY} from '../../gqlClient/quieries/queries';
import Loading from '../../components/status/Loading';
import {CardFilm, SelectedFilmsSection} from '../../components';
import {useFilms} from '../../hooks/useFilms';
import theme from '../../assets/theme';
import DataError from '../../components/status/DataError';


const MainSearch = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.background.paper),
    marginLeft: 0,
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Search = () => {
    const [ searchParams ] = useSearchParams();
    const searchTitle = searchParams.get('title');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);

    const { selectedFilms, selectFilm, deleteFilm } = useFilms();

    useEffect(() => {
        if (searchTitle) {
            setSearchQuery(searchTitle);
        } else {
            setSearchQuery('');
        }
    }, [searchTitle]);

    const search = {
        query: searchQuery,
        page: page,
    };

    const {loading, error, data } = useQuery(FILMS_BY_SEARCH_QUERY,
        {variables: {search}});

    const pagesCount = data?.filmsBySearchQuery?.totalPages <= 500 ? data?.filmsBySearchQuery?.totalPages : 500;

    const paginationHandler = (event, page) => {
        setPage(page);
    };

    const handleSearch = (value) => {
        setSearchQuery(value);
    };

    if (error) {
        return <DataError/>;
    }

    return (
        <>
            <Box>
                <Grid container sx={{ flexGrow: 1, my: 4}}>
                    <Grid item xs={9} md={8}  sx={{ mb: 6 }}>
                        <Paper sx={{padding: '16px', background: theme.palette.background.paper}}>
                            <MainSearch>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={e => handleSearch(e.target.value)}
                                />
                            </MainSearch>
                        </Paper>
                    </Grid>
                    {loading ? <Loading /> : (
                        <Box sx={{ flexGrow: 1, mt: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8.5}>
                                    <Paper>
                                        <Box sx={{ flexGrow: 1, mb: 8, p: 1 }}>
                                            {data && (
                                                <Grid container spacing={2}>
                                                    {data.filmsBySearchQuery.results.map((film) => (
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
                                <Grid item xs={12} md={3.5}>
                                    <SelectedFilmsSection selectedFilms={selectedFilms} deleteFilm={deleteFilm}/>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </Grid>
            </Box>
        </>
    );
};

export default Search;
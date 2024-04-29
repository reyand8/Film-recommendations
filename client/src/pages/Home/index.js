import {useState} from 'react';
import {Box, Grid} from '@mui/material';
import Paper from '@mui/material/Paper';

import {Filters} from '../../components/Filters/';
import {useFilters} from '../../hooks/useFilters';
import PopularFilms from './components/PopularFilms';
import FilterFilms from './components/FilterFilms';
import {useFilms} from '../../hooks/useFilms';
import SelectedFilmsSection from '../../components/SelectedFilmsSection';


const Home = () => {
    const { filter, setFilter, setPage } = useFilters();
    const [click, setClick] = useState(false);
    const { selectedFilms, selectFilm, deleteFilm } = useFilms();


    const onSubmit = (data) => {
        setClick(true);
        setFilter(data);
    };

    return (
        <>
            <Box>
                <Grid container sx={{ flexGrow: 1, my: 4}}>
                    <Grid item xs={9} md={12}  sx={{ mb: 6 }}>
                        <Paper sx={{padding: '16px'}}>
                            <Filters onSubmit={onSubmit} initialValues={filter} />
                        </Paper>
                    </Grid>
                    <Box sx={{ flexGrow: 1, mt: 2 }}>
                        <Grid container spacing={6}>
                    {click
                        ? (
                            <FilterFilms filter={filter} selectFilm={selectFilm} setPage={setPage} />
                        )
                        : <PopularFilms selectFilm={selectFilm}/>
                    }
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


export default Home;
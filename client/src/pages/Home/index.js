import {useState} from 'react';
import {Box, Grid} from '@mui/material';
import Paper from '@mui/material/Paper';

import {Filters} from '../../components/Filters/';
import {useFilters} from '../../hooks/useFilters';
import PopularFilms from './components/PopularFilms';
import FilterFilms from './components/FilterFilms';


const Home = () => {
    const { filter, setFilter, setPage } = useFilters();
    const [click, setClick] = useState(false);

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
                    {click
                        ? (
                            <FilterFilms filter={filter} setPage={setPage} />
                        )
                        : <PopularFilms/>
                    }
                </Grid>
            </Box>
        </>
    );
};


export default Home;
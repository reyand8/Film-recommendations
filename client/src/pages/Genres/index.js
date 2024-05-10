import React from 'react';
import {useQuery} from '@apollo/client';
import {Box, Grid} from '@mui/material';

import CardGenre from '../../components/card/CardGenre';
import Loading from '../../components/status/Loading';
import DataError from '../../components/status/DataError';
import {GENRES_QUERY} from '../../gqlClient/quieries/queries';


const Genres = () => {
    const {loading, error, data } = useQuery(GENRES_QUERY);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <DataError/>;
    }

    return (
        <Box sx={{ flexGrow: 2, mt: 9 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={10}>
                    {data && (
                            <Grid container spacing={2}>
                                {data?.genres?.map((genre) => (
                                    <Grid key={genre.id} item xs={12} sm={7} md={5} lg={4}>
                                        <CardGenre genre={genre}/>
                                    </Grid>
                                ))}
                            </Grid>
                    )}
                </Grid>
            </Grid>
        </Box>

    );
};


export default Genres;

import React from 'react';
import {useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import {Box, Grid} from '@mui/material';

import DataError from '../../components/status/DataError';
import Loading from '../../components/status/Loading';
import CardSingleFilm from '../../components/card/CardSingleFilm';
import {FILMS_BY_ID_QUERY} from '../../quieries/queries';


const SingleFilm = () => {
    const { id } = useParams();

    const {loading, error, data} = useQuery(FILMS_BY_ID_QUERY, {
        variables: {
            ids: +id,
        },
    });

    if (error) {
        return <DataError/>;
    }

    return (
        <>
            {loading ? <Loading /> : (
                <Box>
                    {data && (
                        <Grid container spacing={2}>
                            {data?.filmsById.map((film) => (
                               <CardSingleFilm film={film}/>
                            ))}
                        </Grid>
                    )}
                </Box>
            )}
        </>
    );
};

export default SingleFilm;




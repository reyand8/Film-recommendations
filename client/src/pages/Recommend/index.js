import { useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Box} from '@mui/material';
import { useQuery } from '@apollo/client';

import { CardFilm } from '../../components';
import DataError from '../../components/DataError';
import Loading from '../../components/Loading';
import {FILM_DETAILS_QUERY} from '../../quieries/queries';


const Recommend = () => {
    const [searchParams] = useSearchParams();
    const {loading, error, data} = useQuery(FILM_DETAILS_QUERY, {
        variables: {
            ids: searchParams.get('ids')?.split(',').map((id) => +id),
        },
    });

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <DataError/>;
    }

    return (
        <Box sx={{height: '100%', marginBottom: '40px'}}>
            <Typography sx={{my: 4}} variant="h2" component="h1" gutterBottom>
                {searchParams.get('title')}
            </Typography>
            {data?.filmsById && (
                <Grid container spacing={3}>
                    {data.filmsById.map((film) => (
                        <Grid key={film.id} item xs={12} sm={6} md={4} lg={3}>
                            <CardFilm film={film} isPreviewMode/>
                        </Grid>
                    ))}
                </Grid>
            )}
            <Grid sx={{height: '90px'}}></Grid>
        </Box>
    );
};

export default Recommend;
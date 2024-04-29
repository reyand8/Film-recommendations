import React from 'react';
import {useState} from 'react';
import { Form } from 'react-final-form';
import { useQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';

import {
    SortField, SortDirectionField,
    AdultField, ReleaseDateFrom,
    SubmitField, ReleaseDateTo,
    GenreField } from '../components';
import Loading from '../../Loading';
import DataError from '../../DataError';
import {GENRES_QUERY} from '../../../quieries/queries';


const MainFilters = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
        alignItems: 'center',
    },
}));


const DateBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        [theme.breakpoints.up('xs')]: {
            marginTop: '8px',
            marginRight: '4px',
            width: '100px',
        },
        [theme.breakpoints.up('sm')]: {
            width: '120px',
        },
        [theme.breakpoints.up('md')]: {
            width: '218px',
            marginTop: '16px',
            marginRight: '8px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '218px',
            marginRight: '20px',
        },
}));


export const Filters = ({ onSubmit, initialValues}) => {
    const {loading, error, data } = useQuery(GENRES_QUERY);
    const [openFilters, setOpenFilters] = useState(false);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <DataError/>;
    }

    return (
        <Form xs={12} sm={6} md={4} lg={3}
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: {xs: 'center', md: 'flex-start'},
                        flexDirection:  {xs: 'column'} }}>
                        <MainFilters>
                            <Box sx={{ display: 'flex', flexDirection: {xs: 'row'} }}>
                                <DateBox>
                                    <ReleaseDateFrom />
                                </DateBox>
                                <DateBox>
                                    <ReleaseDateTo/>
                                </DateBox>
                            </Box>
                            <Box sx={{
                                mt: {xs: 2},
                            }}>
                                <GenreField data={data}/>
                            </Box>
                        </MainFilters>
                        <AdultField/>
                    </Box>
                    {!openFilters ?
                        (
                            <Button
                                variant="text"
                                onClick={() => setOpenFilters(true)}>
                                More filters
                            </Button>)
                    : (
                            <Box sx={{
                                display: 'flex',
                                flexDirection:  {xs: 'column', md: 'row'},
                                alignItems: {xs: 'flex-start'},
                            }}>
                                <Box sx={{
                                    maxWidth: {xs: '180px', md: '250px'},
                                    alignItems: 'center',
                                    mr: {xs: 0, md: 4}}}>
                                    <SortField/>
                                </Box>
                                <SortDirectionField sx={{
                                    maxWidth: {xs: '60px', md: '100px'},
                                    alignItems: 'center',
                                }}
                                />
                            </Box>
                        )
                    }
                    <Box sx={{my: 2}}>
                        <SubmitField/>
                    </Box>
                </form>
            )}
        />
    );
};
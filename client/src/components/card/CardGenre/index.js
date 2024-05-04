import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import theme from '../../../assets/theme';


export const CardGenre = ({genre}) => {
   const {id, name} = genre;
    return (
        <Link to={`/genre/${id}`}>
            <Card sx={{ display: 'flex', alignItems: 'center',
                justifyContent: 'center', width: 300,
                height: '112px', color: theme.palette.text.secondary}}>
                    <Typography variant="h3">
                        {name}
                    </Typography>
            </Card>
        </Link>
    );
};

CardGenre.propTypes = {
    genre: PropTypes.shape({
        name: PropTypes.string,
    }),
};

export default CardGenre;
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardContent} from '@mui/material';

import adultIcon from '../../assets/img/adult.svg';


const CardInfo = styled(CardContent)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 140,
    width: 224,
}));


const CardFilmSearch = ({film}) => {
    const {id, title, image, releaseDate, adult } = film;

    return (
        <Link to={`/film/${id}`} key={id}>
            <Card sx={{ width: 320, height: '134px', position: 'relative', display: 'flex', boxShadow: 3}}>
                <Box>
                    <CardMedia sx={{minWidth: '92px'}} component="img" height="134" image={image} alt="img"/>
                </Box>
                <CardInfo>
                    <Typography variant="h5" sx={{fontSize: '17px'}} gutterBottom component="div">
                        {title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                            {releaseDate}
                        </Typography>
                        <Typography mb={0}>
                            {!adult ? (
                                <img className="icon" src={adultIcon} alt=""/>
                            ) : 'new'}
                        </Typography>
                    </Box>
                </CardInfo>
            </Card>
        </Link>
    );
};

CardFilmSearch.propTypes = {
    film: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        adult: PropTypes.bool,
        voteAverage: PropTypes.number,
    }).isRequired,
    onCardSelect: PropTypes.func,
};

export default CardFilmSearch;
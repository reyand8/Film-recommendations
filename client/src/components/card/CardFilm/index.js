import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {Box, CardContent} from '@mui/material';

import adultIcon from '../../../assets/img/adult.svg';
import theme from '../../../assets/theme';
import {changeColor, getVoteCicle} from '../../../common/common';


const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(0),
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 140,
}));

const PlusIcon = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, .6)',
    transition: 'opacity .8s',
    cursor: 'pointer',
    '&:hover': {
        opacity: 1,
        transition: 'opacity .8s',
    },
}));

export const CardFilm = ({film, onCardSelect, isPreviewMode}) => {
    const {id, title, image, releaseDate, adult, voteAverage } = film;
    const voteCicle = (voteAverage * 10);

    return (
        <Card sx={{ maxWidth: 250, height: '460px', position: 'relative' }}>
            <Box position="relative" >
                <Box position="absolute" right={0} top={4} display="inline-block" sx={{width:65}}>
                    <CircularProgress
                        sx={{
                        background: theme.palette.background.paper,
                        borderRadius: '50%', color: (`${changeColor(voteCicle)}`)}}
                        size={58} variant="determinate" value={voteCicle} />
                    <Box top={0} left={0} bottom={0} right={0}
                        position="absolute" display="flex"
                        alignItems="center" justifyContent="center">
                        <Typography variant="subtitle2" component="div" color="textSecondary">
                            {`${getVoteCicle(voteCicle)}%`}
                        </Typography>
                    </Box>
                </Box>
                <CardMedia component="img" height="320" image={image} alt={title}/>
                    {!isPreviewMode && (
                    <PlusIcon onClick={() => onCardSelect(film)}>
                        <AddBoxOutlinedIcon sx={{ fontSize: 80, fill: theme.palette.secondary.dark}}/>
                    </PlusIcon>
                    )}
            </Box>
            <Link to={`/film/${id}`} key={id}>
                <CardInfo>
                    <Typography variant="h5" gutterBottom component="div" sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                    }}>
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
            </Link>
        </Card>
    );
};

CardFilm.propTypes = {
    film: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        adult: PropTypes.bool,
        voteAverage: PropTypes.number,
    }).isRequired,
    onCardSelect: PropTypes.func,
};

export default CardFilm;
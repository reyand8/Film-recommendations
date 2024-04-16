import React from "react";
import PropTypes from "prop-types";

import {Box, Grid, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import theme from "../../assets/theme";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";

import adultIcon from "../../assets/img/adult.svg";
import {changeColor, getVoteCicle} from "../../common";
import {FormattedMessage} from "react-intl";



const CardSingleFilm  = ({film}) => {
    const {title, overview, runtime, genres, adult, image, production, releaseDate, voteAverage} = film
    const voteCicle = (voteAverage * 10)

    return (
        <Box sx={{
            flexGrow: 1, my: 5, display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            height: {xxl: '100%'}
        }}>
            <Box position="relative" >
                <Box position="absolute" right={0} top={4} display="inline-block" sx={{width:65}}>
                    <CircularProgress
                        sx={{background: theme.palette.background.paper, borderRadius: '50%',
                            color: (`${changeColor(voteCicle)}`)}}
                        size={58} variant="determinate" value={voteCicle} />
                    <Box top={0} left={0} bottom={0} right={0} position="absolute"
                         display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="subtitle2" component="div" color="textSecondary">
                            {`${getVoteCicle(voteCicle)}%`}
                        </Typography>
                    </Box>
                </Box>
                <CardMedia component="img" image={image} alt={title}
                           sx={{height: {sx: '290px', sm: '490px'}}}/>
                <Box position="absolute" sx={{display:'flex', width:45}} right={1}  bottom={7}>
                    {production.map(({iso_3166_1}) => (
                        <Paper sx={{px:1}}>
                            {iso_3166_1}
                        </Paper>
                    ))}
                </Box>
            </Box>
            <Paper sx={{ maxWidth: {xs:'318px',sm: '570px', md:'870px', lg: '1175px', xl: '1300px'}}}>
                <Grid container spacing={1} sx={{m:2, display: 'flex', justifyContent: 'space-between',
                    flexDirection: {xs:'column', md:'row' }, width: '95%'}}>
                    <Grid item  xs={7} md={7} sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box sx={{ display: 'flex', alignItems: {xs:'flex-start', sm: 'center'},
                            flexDirection: {xs:'column', sm: 'row'}}}>
                            <Typography variant="h3" component="div" color="textSecondary">
                                {title}
                            </Typography>
                            <Typography ml={3}>
                                {!adult ? (
                                    <img className='icon' src={adultIcon} alt=""/>
                                ): ''}
                            </Typography>
                        </Box>
                        <Box>
                            {production.map(({name}) => (
                                <Paper sx={{
                                    maxWidth: '290px',
                                    background: theme.palette.background.lightTheme,
                                    color: theme.palette.primary.contrastText
                                }}>
                                    <Typography variant="body1" >
                                        Country: {name}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                        <Box sx={{mt:2}}>
                            <Typography variant="h5" component="p" color="textSecondary">
                                <FormattedMessage id="singlePage.duration"/>: {runtime} min
                            </Typography>
                            <Typography variant="h5" component="p" color="textSecondary">
                                <FormattedMessage id="singlePage.release_date"/>: {releaseDate}
                            </Typography>
                        </Box>
                        <Box sx={{maxWidth:'920px', mt:4,}}>
                            <Typography sx={{minWidth: {xs: '245px'}}}  variant="body1"
                                        component="div" color="textSecondary">
                                {overview}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item  xs={3} md={2} sx={{ml: 5, mr: 14}}>
                        <Typography sx={{m: 1}} variant="h5" color="textSecondary" >
                            <FormattedMessage id="singlePage.genres"/>:
                        </Typography>
                        {genres.map(({id, name}) => (
                            <Paper sx={{ m: 1, p: 0.7, minWidth: '160px',
                                background: theme.palette.background.lightTheme,
                                color: theme.palette.primary.contrastText}} key={id}>
                                {name}
                            </Paper>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

CardSingleFilm.propTypes = {
    film: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        runtime: PropTypes.number,
        genres: PropTypes.object,
        production: PropTypes.object,
        adult: PropTypes.bool,
        voteAverage: PropTypes.number,
    }).isRequired,
    onCardSelect: PropTypes.func
}

export default CardSingleFilm
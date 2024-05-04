import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Box, CardContent, Typography} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import {FormattedMessage} from 'react-intl';

import PropTypes from 'prop-types';
import CardMenu from '../CardMenu';


const CardFilmSelected = ({film, onCardDelete}) => {
    const {title, releaseDate, image} = film;
    return (
        <Card sx={{ display: 'flex', minHeight: '160px'}}>
            <CardMedia
                component="img" sx={{ width: 120 }}
                image={image} alt={title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', position: 'relative' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {releaseDate}
                    </Typography>
                </CardContent>
                <CardMenu>
                    <MenuItem onClick={() => onCardDelete(film)}>
                        <FormattedMessage id="delete"/>
                    </MenuItem>
                </CardMenu>
            </Box>
        </Card>
    );
};


CardFilmSelected.propTypes = {
    film: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        releaseDate: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        })),
        runtime: PropTypes.number,
    }).isRequired,
    onCardDelete: PropTypes.func,
};


export default CardFilmSelected;
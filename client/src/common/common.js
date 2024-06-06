import theme from '../assets/theme';

export const getVoteCicle = (vote) => {
    if (vote <= 100) {
        return vote.toFixed(1);
    }
};

export const changeColor = (vote) => {
    if (vote >= 66.67) {
        return theme.palette.success.main;
    } else if (vote >= 33.34) {
        return theme.palette.warning.light;
    }else {
        return theme.palette.error.light;
    }
};


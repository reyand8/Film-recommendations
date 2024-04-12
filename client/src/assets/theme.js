import {createTheme} from "@mui/material";


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#da3a72',
            dark: '#98274f',
            light: '#e0618e',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#f50057',
            light: '#f73378',
            dark: '#ab003c',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f3e3e3',
            paper: '#fff'
        },
        text: {
            primary: 'rgba(0,0,0,0.87)',
        },
        error: {
            main: '#d32f2f',
            light: '#db5858',
            dark: '#932020',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#ed6c02',
            light: '#f08934',
            dark: '#a54b01',
        },
        success: {
            main: '#2b792f',
            light: '#559358',
            dark: '#1e5420',
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontSize: 16,
        fontWeightLight: 300,
        h6: {
            fontSize: 14,
        },
        h5: {
            fontSize: 19,
        },
        h4: {
            fontSize: 21,
        },
        subtitle2: {
            fontWeight: 600,
            lineHeight: 1.21,
            fontSize: 14,
        },
    },
});

export default theme

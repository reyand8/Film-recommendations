import {useCallback, useContext, useState} from "react";
import { Link as RouterLink } from "react-router-dom";
import {FormattedMessage} from "react-intl";

import Fade from '@mui/material/Fade';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button'
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Box, Drawer, Hidden, IconButton, Link,
    List, Toolbar, Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {AppContext} from "../../providers/appContext";
import {LOCALES} from "../../const";
import theme from '../../assets/theme'


const Navigation = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    const { state, dispatch } = useContext(AppContext)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageClick = (language) => {
        setLanguage(language)
        handleClose()
    }

    const setLanguage = useCallback((locale) => {
        dispatch({
            type: 'setLocale',
            locale
        })
    }, [])

    const languageMenu = () => (
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem disabled={state.locale === LOCALES.ENGLISH}
                          sx={{ my: 1 }}
                          onClick={() =>
                              handleLanguageClick(LOCALES.ENGLISH)}>
                    ENG
                </MenuItem>
                <MenuItem disabled={state.locale === LOCALES.UKRAINIAN}
                          sx={{ my: 1 }}
                          onClick={() => handleLanguageClick(LOCALES.UKRAINIAN)}>
                    UKR
                </MenuItem>
                <MenuItem disabled={state.locale === LOCALES.SPANISH}
                          sx={{ my: 1 }}
                          onClick={() => handleLanguageClick(LOCALES.SPANISH)}>
                    ES
                </MenuItem>
                <MenuItem disabled={state.locale === LOCALES.RUSSIAN}
                          sx={{ my: 1 }}
                          onClick={() => handleLanguageClick(LOCALES.RUSSIAN)}>
                    RU
                </MenuItem>
                <MenuItem disabled={state.locale === LOCALES.GERMAN}
                          sx={{ my: 1 }}
                          onClick={() => handleLanguageClick(LOCALES.GERMAN)}>
                    DE
                </MenuItem>
            </Menu>
    )

    const burgerList = () => (
        <Box sx={{ width: 190, ml: 3 }} role="presentation">
            <List>
                <Link component={RouterLink} to='settings'>
                    <Button size="large"
                            startIcon={<SettingsIcon/>}
                            onClick={() => setDrawerOpen(false)}>
                        <FormattedMessage id="navigation.settings"/>
                    </Button>
                </Link>
                <>
                    <Button size="large"
                        startIcon={<LanguageIcon/>}
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <FormattedMessage id="navigation.language"/>
                    </Button>
                    {languageMenu()}
                </>
            </List>
        </Box>
    )

    return (
        <>
            <Box sx={{ flexGrow:1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{display: {
                            xs: 'block', lg: 'none', xl: 'none', xxl: 'none'} }} >
                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
                            <Typography variant="h4" component="div" sx={{
                                color:  theme.palette.primary.contrastText,
                                flexGrow: 1
                            }}>
                                <FormattedMessage id="navigation.home"/>
                            </Typography>
                        </Link>
                        <Box sx={{display: {
                                xs: 'none', sm: 'none',
                                md: 'none', lg: 'flex',
                                xl: 'flex', xxl: 'flex'} }}>
                            <Button component={RouterLink}
                                    to='genres'
                                    size="large"
                                    sx={{ my: 2, pt: 1.5, color:
                                        theme.palette.primary.contrastText, display: 'block',
                                    }}>
                                <FormattedMessage id="navigation.genres" />
                            </Button>
                            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                                <Button component={RouterLink}
                                        to='settings'
                                        size="large"
                                        sx={{
                                            my: 2,
                                            pt: 1.5,
                                            color:
                                            theme.palette.primary.contrastText,
                                            display: 'block',
                                }}>
                                    <FormattedMessage id="navigation.settings" />
                                </Button>
                            </Box>
                            <Button
                                startIcon={<LanguageIcon sx={{ my: 2, color: theme.palette.primary.contrastText }}/>}
                                size="large"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                            </Button>
                            {languageMenu()}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}>
                {burgerList()}
            </Drawer>
        </>
    )
}

export default Navigation
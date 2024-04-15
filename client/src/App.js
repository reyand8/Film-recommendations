import {useContext} from "react";
import {CssBaseline, Container, Box, ThemeProvider} from '@mui/material'
import {
    ApolloClient, InMemoryCache, ApolloProvider,
    HttpLink, ApolloLink, from
} from "@apollo/client";

import {Navigation} from './components'
import {AppContext} from "./providers/appContext";
import I18nProvider from './providers/i18n'
import theme  from './assets/theme.js';
import AppRoutes from "./components/AppRoutes/AppRoutes";


function App() {
    const {state} = useContext(AppContext)
    const httpLink = new HttpLink({uri: 'http://localhost:4000/',})
    const localeMiddleware = new ApolloLink((operation, forward) => {
        const customHeaders = operation.getContext().hasOwnProperty('headers')
            ? operation.getContext().headers
            : {};

        operation.setContext({
            headers: {
                ...customHeaders,
                locale: state.locale
            }
        })
        return forward(operation)
    })

    const client = new ApolloClient({
        link: from([localeMiddleware, httpLink]),
        cache: new InMemoryCache(),
        connectToDevTools: true
    });

    return (
        <I18nProvider locale={state.locale}>
            <ApolloProvider client={client}>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <Box>
                        <Navigation/>
                        <Container maxWidth="xl">
                            <AppRoutes/>
                        </Container>
                    </Box>
                </ThemeProvider>
            </ApolloProvider>
        </I18nProvider>
    )
}

export default App
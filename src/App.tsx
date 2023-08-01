import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeOptions } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'

import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { ApplicationProvider } from '@/core/application'
import { Header } from '@/core/layout'
import { SecurityProvider } from '@/core/security'
import { Home } from '@/features/home'
import { RegionIndex, RegionShow } from '@/features/region'
import { CountryIndex, CountryShow } from '@/features/country'
import { PlaceIndex, PlaceShow } from '@/features/place'
import { SignIn, SignOut } from '@/features/user'
import { TypographyOptions } from '@mui/material/styles/createTypography'

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        leadParagraph: true
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    leadParagraph: React.CSSProperties
}

const theme = createTheme({
    typography: {
        leadParagraph: {
            fontSize: '1.5rem',
            fontStyle: 'italic',
        },
    } as ExtendedTypographyOptions,
} as ThemeOptions)

function App() {
    return (
        <SecurityProvider>
            <ThemeProvider theme={theme}>
                <ApplicationProvider>
                    <CssBaseline />
                    <div className="App">
                        <Header />
                        <Box className={'content'}>
                            <Routes>
                                <Route path={'/'} element={<Home />} />
                                <Route
                                    path={'/regions'}
                                    element={<RegionIndex />}
                                />
                                <Route
                                    path={'/regions/:id'}
                                    element={<RegionShow />}
                                />
                                <Route
                                    path={'/countries'}
                                    element={<CountryIndex />}
                                />
                                <Route
                                    path={'/countries/:id'}
                                    element={<CountryShow />}
                                />
                                <Route
                                    path={'/destinations'}
                                    element={<PlaceIndex />}
                                />
                                <Route
                                    path={'/destinations/:id'}
                                    element={<PlaceShow />}
                                />
                                <Route path={'/sign-in'} element={<SignIn />} />
                                <Route
                                    path={'/sign-out'}
                                    element={<SignOut />}
                                />
                            </Routes>
                        </Box>
                    </div>
                </ApplicationProvider>
            </ThemeProvider>
        </SecurityProvider>
    )
}

export default App

import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Typography,
} from '@mui/material'

import { API_BASE_URL } from '@/core/application'
import { useApiGet } from '@/core/api'
import { Footer } from '@/core/layout'
import { ICountry } from '@/common/models/country'
import { H1 } from '@/components/data-display'

const CountryIndex = () => {
    const [countrys, setCountrys] = useState<any[]>([])
    const {
        data: fetchedCountrys,
        loading: getLoading,
        error: getError,
    } = useApiGet<ICountry[]>(`${API_BASE_URL}/countries`)

    const navigate = useNavigate()

    useEffect(() => {
        if (fetchedCountrys) {
            setCountrys(
                fetchedCountrys.map((country: ICountry) => ({
                    id: country.countryCode,
                    name: country.countryName,
                    briefDescription: country.briefDescription,
                    ranking: country.ranking,
                }))
            )
        }
    }, [fetchedCountrys])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: 20 }}>
                <header>
                    <H1 data-testid="country-index-title" sx={{ mt: 3 }}>
                        Countries
                    </H1>
                </header>
                {fetchedCountrys && (
                    <Grid container spacing={4}>
                        {fetchedCountrys.map((country: ICountry) => (
                            <Grid
                                item
                                key={country.countryCode}
                                xs={12}
                                sm={6}
                                md={4}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={`https://placehold.co/300x169`}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <article>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
                                                {country.countryName}
                                            </Typography>
                                            <Typography>
                                                {country.briefDescription}
                                            </Typography>
                                        </article>
                                    </CardContent>
                                    <CardActions sx={{ mb: 1, ml: 1, mr: 1 }}>
                                        <Link
                                            key={country.countryName}
                                            to={`/countries/${country.countryCode}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                size="small"
                                                variant="contained"
                                                title={`Discover more about ${country.countryName}`}
                                                aria-label={`Discover more about ${country.countryName}`}
                                                sx={{ mr: 1 }}
                                            >
                                                Discover
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default CountryIndex

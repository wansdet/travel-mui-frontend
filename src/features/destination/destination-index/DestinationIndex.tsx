import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import { IRegion } from '@/common/models/region'
import { H1 } from '@/components/data-display'

const DestinationIndex = () => {
    const [regions, setRegions] = useState<any[]>([])
    const {
        data: fetchedRegions,
        loading: getLoading,
        error: getError,
    } = useApiGet<IRegion[]>(`${API_BASE_URL}/regions`)

    useEffect(() => {
        if (fetchedRegions) {
            setRegions(
                fetchedRegions.map((region: IRegion) => ({
                    id: region.regionCode,
                    name: region.regionName,
                    briefDescription: region.briefDescription,
                    ranking: region.ranking,
                }))
            )
        }
    }, [fetchedRegions])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: 20 }}>
                <header>
                    <H1 sx={{ mt: 3 }}>Destinations</H1>
                </header>
                {fetchedRegions && (
                    <Grid container spacing={4}>
                        {fetchedRegions.map((region: IRegion) => (
                            <Grid
                                item
                                key={region.regionCode}
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
                                        image={`https://source.unsplash.com/random/300×169/?${region.regionName},landscape`}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <article>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h2"
                                            >
                                                {region.regionName}
                                            </Typography>
                                            <Typography>
                                                {region.briefDescription}
                                            </Typography>
                                        </article>
                                    </CardContent>
                                    <CardActions sx={{ mb: 1, ml: 1, mr: 1 }}>
                                        <Link
                                            key={region.regionName}
                                            to={`/destinations/regions/${region.regionCode}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                size="small"
                                                variant="contained"
                                                title={`Discover more about ${region.regionName}`}
                                                aria-label={`Discover more about ${region.regionName}`}
                                                sx={{ mr: 1 }}
                                            >
                                                Discover
                                            </Button>
                                        </Link>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            title={`Top 10 destinations in ${region.regionName}`}
                                            aria-label={`Top 10 destinations in ${region.regionName}`}
                                        >
                                            Top 10
                                        </Button>
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

export default DestinationIndex

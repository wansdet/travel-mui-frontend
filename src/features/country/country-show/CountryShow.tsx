import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import {
    API_URL_COUNTRIES,
    BASE_IMAGE_ASSETS_URL,
    PATH_DESTINATIONS,
} from '@/core/application'
import { useApiGet } from '@/core/api'
import { Footer } from '@/core/layout'
import { IImage } from '@/common'
import { ICountry } from '@/common/models/country'
import { IPlace } from '@/common/models/place'
import { SideBar } from '@/components/layout'
import { Heading, ParagraphSanitized, Section } from '@/components/data-display'
import { ImageGallery } from '@/components/layout'
import { Carousel, IImageCarousel, SocialMedia } from '@/components/utils'
import CountryInformation from './CountryInformation'
import { NavigationList } from '@/components/navigation'

const carouselImageParams: string[] = [
    'Capital%20City%20Skyline',
    'Tourist%20Attraction',
    'Historical%20Site',
    'Cultural%20Heritage',
    'Scenic%20Landscapes',
]

const mainImageParams: string[] = [
    'Scenic%20Landscape',
    'Iconic%20Landmark',
    'National%20Cuisine',
]

const secondaryImageParams: string[] = [
    'Capital%20City%20Skyline',
    'Tourist%20Attraction',
    'Historical%20Site',
    'Cultural%20Heritage',
    'Scenic%20Landscapes',
    'National%20Cuisine',
]

const CountryShow = () => {
    const { id } = useParams()
    const [country, setCountry] = useState<ICountry | null>(null)
    const [placeNavLinks, setPlaceNavLinks] = useState<any[]>([])
    const [carouselImages, setCarouselImages] = useState<IImageCarousel[]>([])
    const [mainImages, setMainImages] = useState<IImage[]>([])
    const [secondaryImages, setSecondaryImages] = useState<IImage[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const {
        data: fetchedCountry,
        loading: getLoading,
        error: getError,
    } = useApiGet<ICountry>(`${API_URL_COUNTRIES}/${id}`)

    useEffect(() => {
        if (fetchedCountry) {
            setCountry(fetchedCountry)

            setPlaceNavLinks(
                fetchedCountry.places.map((place: IPlace) => ({
                    title: place.placeName,
                    url: `${PATH_DESTINATIONS}/${place.id}`,
                }))
            )

            // TODO: Use data from API
            carouselImageParams.map((param: string) => {
                setCarouselImages((prevImages) => [
                    ...prevImages,
                    {
                        original: `${BASE_IMAGE_ASSETS_URL}/1000x300?text=${param}`,
                        thumbnail: `${BASE_IMAGE_ASSETS_URL}/100x30`,
                    },
                ])
            })

            // TODO: Use data from API
            mainImageParams.map((param: string) => {
                setMainImages((prevImages) => [
                    ...prevImages,
                    {
                        url: `${BASE_IMAGE_ASSETS_URL}/300x300?text=${param}`,
                        title: `${param}`,
                    },
                ])
            })

            // TODO: Use data from API
            secondaryImageParams.map((param: string) => {
                setSecondaryImages((prevImages) => [
                    ...prevImages,
                    {
                        url: `${BASE_IMAGE_ASSETS_URL}/300x300?text=${param}`,
                        title: `${param}`,
                    },
                ])
            })
        }
    }, [fetchedCountry])

    return (
        <React.Fragment>
            <CssBaseline />
            {country && (
                <React.Fragment>
                    <Box
                        sx={{
                            overflowX: 'hidden',
                        }}
                    >
                        {carouselImages && <Carousel images={carouselImages} />}
                    </Box>
                    <Container maxWidth="lg" sx={{ mb: 20 }}>
                        <Grid container spacing={5} sx={{ pt: 3 }}>
                            <Grid item xs={12} md={8}>
                                <main>
                                    <article>
                                        <Section id="main-content-country">
                                            <header>
                                                <Heading data-testid="country-show-title">
                                                    {country.countryName}
                                                </Heading>
                                            </header>
                                            <ParagraphSanitized
                                                data-testid="country-show-lead-description"
                                                variant="leadParagraph"
                                                text={country.shortDescription}
                                            />
                                            <ImageGallery images={mainImages} />
                                            <ParagraphSanitized
                                                data-testid="country-show-long-description"
                                                text={country.longDescription}
                                                sx={{ mb: 3 }}
                                            />
                                            <SocialMedia />
                                            <ImageGallery
                                                images={secondaryImages}
                                            />
                                        </Section>
                                    </article>
                                </main>
                            </Grid>
                            <SideBar>
                                {placeNavLinks.length > 0 && (
                                    <NavigationList
                                        data-testid="country-show-top-destinations"
                                        listTitle="Top Destinations"
                                        navLinks={placeNavLinks}
                                        linkColor="white"
                                        sx={{
                                            backgroundColor: 'secondary.main',
                                            color: 'grey.200',
                                        }}
                                    />
                                )}
                                <CountryInformation
                                    data-testid="country-show-country-information"
                                    country={country}
                                />
                            </SideBar>
                        </Grid>
                    </Container>
                    <Footer />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default CountryShow

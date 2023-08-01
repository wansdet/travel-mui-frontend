import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CssBaseline, Grid, ImageList, ImageListItem } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import {
    API_URL_REGIONS,
    BASE_IMAGE_ASSETS_URL,
    PATH_COUNTRIES,
} from '@/core/application'
import { useApiGet } from '@/core/api'
import { Footer } from '@/core/layout'
import { IRegion } from '@/common/models/region'
import { ICountry } from '@/common/models/country'
import { SideBar } from '@/components/layout'
import { NavigationList } from '@/components/navigation'
import { Heading, ParagraphSanitized, Section } from '@/components/data-display'
import { FeaturedCard } from '@/components/surfaces'
import { Carousel, IImageCarousel } from '@/components/utils'

const carouselImageParams: string[] = [
    'Historical%20Site',
    'Cultural%20Heritage',
    'Scenic%20Landscapes',
]

const imageParams: string[] = [
    'Scenic%20Landscape',
    'Iconic%20Landmark',
    'National%20Cuisine',
]

const RegionShow = () => {
    const { id } = useParams()
    const [region, setRegion] = React.useState<IRegion | null>(null)
    const [navLinks, setNavLinks] = React.useState<any[]>([])
    const [featuredCountry, setFeaturedCountry] =
        React.useState<ICountry | null>(null)
    const [carouselImages, setCarouselImages] = useState<IImageCarousel[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)
    const {
        data: fetchedRegion,
        loading: getLoading,
        error: getError,
    } = useApiGet<IRegion>(`${API_URL_REGIONS}/${id}`)

    useEffect(() => {
        if (fetchedRegion) {
            setRegion(fetchedRegion)
            setNavLinks(
                fetchedRegion.countries.map((country: ICountry) => ({
                    title: country.countryName,
                    url: `${PATH_COUNTRIES}/${country.countryCode}`,
                }))
            )
            const randomIndex = Math.floor(
                Math.random() * fetchedRegion.countries.length
            )
            setFeaturedCountry(fetchedRegion.countries[randomIndex])
            carouselImageParams.map((param: string) => {
                setCarouselImages((prevImages) => [
                    ...prevImages,
                    {
                        original: `${BASE_IMAGE_ASSETS_URL}/1000x300?text=${param}`,
                        thumbnail: `${BASE_IMAGE_ASSETS_URL}/100x30`,
                    },
                ])
            })
        }
    }, [fetchedRegion])

    return (
        <React.Fragment>
            <CssBaseline />
            {region && (
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
                            <Grid item xs={12} md={8} sx={{ py: 3 }}>
                                <main>
                                    <article>
                                        <Section id="main-content-region">
                                            <header>
                                                <Heading>
                                                    {region.regionName}
                                                </Heading>
                                            </header>
                                            <ParagraphSanitized
                                                data-testid="region-show-lead-description"
                                                variant="leadParagraph"
                                                text={region.briefDescription}
                                            />
                                            <ImageList
                                                sx={{ display: 'flex', mt: 5 }}
                                                cols={3}
                                                gap={15}
                                            >
                                                {imageParams.map((image) => (
                                                    <ImageListItem key={image}>
                                                        <img
                                                            src={`${BASE_IMAGE_ASSETS_URL}/300x300?text=${image}`}
                                                            alt={image}
                                                            loading="lazy"
                                                            style={{
                                                                maxWidth:
                                                                    '100%',
                                                                height: 'auto',
                                                            }}
                                                        />
                                                    </ImageListItem>
                                                ))}
                                            </ImageList>
                                            <ParagraphSanitized
                                                data-testid="region-show-long-description"
                                                text={region.longDescription}
                                            />
                                        </Section>
                                    </article>
                                </main>
                            </Grid>
                            <SideBar>
                                {featuredCountry && (
                                    <FeaturedCard
                                        data-testid="featured-country"
                                        title={featuredCountry?.countryName}
                                        description={`Experience culture, history, natural beauty, adventure, hospitality, cuisine, and relaxation.`}
                                        image={`https://source.unsplash.com/random?${featuredCountry?.countryName},landscape`}
                                        link={{
                                            url: `${PATH_COUNTRIES}/${featuredCountry?.countryCode}`,
                                            title: 'Discover...',
                                        }}
                                    />
                                )}
                                <NavigationList
                                    data-testid="countries-list"
                                    listTitle="Countries"
                                    navLinks={navLinks}
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

export default RegionShow

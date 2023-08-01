import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container, CssBaseline, Grid, Paper } from '@mui/material'
import { TagCloud } from 'react-tagcloud'

import {
    API_BASE_URL,
    API_URL_PLACES,
    BASE_IMAGE_ASSETS_URL,
} from '@/core/application'
import { useApiGet } from '@/core/api'
import { Footer } from '@/core/layout'
import { IImage } from '@/common'
import { IPlace, IPlaceImage } from '@/common/models/place'
import { SideBar } from '@/components/layout'
import {
    H3,
    Heading,
    ParagraphSanitized,
    Section,
} from '@/components/data-display'
import { ImageGallery } from '@/components/layout'
import { Carousel, IImageCarousel } from '@/components/utils'

interface ITagCloudItem {
    value: string
    count: number
}

const carouselImageParams: string[] = [
    'Tourist%20Attraction',
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

const PlaceShow = () => {
    const { id } = useParams()
    const [place, setPlace] = useState<IPlace | null>(null)
    const [carouselImages, setCarouselImages] = useState<IImageCarousel[]>([])
    const [mainImages, setMainImages] = useState<IImage[]>([])
    const [secondaryImages, setSecondaryImages] = useState<IImage[]>([])
    const [tags, setTags] = useState<ITagCloudItem[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const {
        data: fetchedPlace,
        loading: getLoading,
        error: getError,
    } = useApiGet<IPlace>(`${API_URL_PLACES}/${id}`)

    useEffect(() => {
        if (fetchedPlace) {
            setPlace(fetchedPlace)
            /*
            const placeCarouselImages: IImageCarousel[] =
                fetchedPlace.placeImages
                    ?.filter((image) => image.orientation === 'panorama')
                    .map((image) => ({
                        original: `${API_BASE_URL}/${image.filePath}`,
                        thumbnail: `${BASE_IMAGE_ASSETS_URL}/100x30`, // TODO: set this to small dummy image as not used
                    })) ?? []

            setCarouselImages(placeCarouselImages)
*/
            //if (placeCarouselImages?.length === 0) {
            const placeCarouselImages: IImageCarousel[] = []
            placeCarouselImages.push({
                original: `${BASE_IMAGE_ASSETS_URL}/1280x600?text=${fetchedPlace.placeName}`,
                thumbnail: `${BASE_IMAGE_ASSETS_URL}/100x30`,
            })
            //}

            setCarouselImages(placeCarouselImages)

            // TODO: Use data from API
            /*
            carouselImageParams.map((param: string) => {
                setCarouselImages((prevImages) => [
                    ...prevImages,
                    {
                        original: `${BASE_IMAGE_ASSETS_URL}/1000x300?text=${param}`,
                        thumbnail: `${BASE_IMAGE_ASSETS_URL}/100x30`,
                    },
                ])
            })

             */

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

            fetchedPlace.tags.map((tag: string) => {
                setTags((prevTags) => [
                    ...prevTags,
                    {
                        value: tag,
                        count: 1,
                    },
                ])
            })
        }
    }, [fetchedPlace])

    return (
        <React.Fragment>
            <CssBaseline />

            {place && (
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
                                        <Section id="place-main-content">
                                            <header data-testid="place-show-title">
                                                <Heading>
                                                    {place.placeName}
                                                </Heading>
                                            </header>
                                            <ParagraphSanitized
                                                data-testid="place-show-lead-description"
                                                variant="leadParagraph"
                                                text={place.briefDescription}
                                            />
                                            <ImageGallery images={mainImages} />
                                            <ParagraphSanitized
                                                data-testid="place-show-long-description"
                                                text={place.longDescription}
                                            />
                                            <Section
                                                id="place-things-to-do"
                                                data-testid="place-things-to-do"
                                            >
                                                <Heading data-testid="things-to-do-title">
                                                    Things to do in{' '}
                                                    {place.placeName}
                                                </Heading>
                                                <ParagraphSanitized
                                                    datat-testid="things-to-do-description"
                                                    text={place.thingsToDo}
                                                />
                                                <Heading data-testid="where-to-stay">
                                                    Where to Stay
                                                </Heading>
                                                <ParagraphSanitized
                                                    datat-testid="where-to-stay-description"
                                                    text={place.accommodation}
                                                />
                                                <Heading data-testid="where-to-eat">
                                                    Where to Eat
                                                </Heading>
                                                <ParagraphSanitized
                                                    datat-testid="where-to-eat-description"
                                                    text={place.food}
                                                />
                                                <ImageGallery
                                                    images={secondaryImages}
                                                />
                                            </Section>
                                        </Section>
                                    </article>
                                </main>
                            </Grid>
                            <SideBar>
                                <aside>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            mt: 3,
                                            backgroundColor: 'secondary.main',
                                            color: 'secondary.contrastText',
                                        }}
                                    >
                                        <H3 data-testid="travel-information-title">
                                            Traveling to {place.placeName}
                                        </H3>
                                        <ParagraphSanitized
                                            data-testid="travel-information-description"
                                            text={place.travelInformation}
                                        />
                                    </Paper>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            mt: 3,
                                            backgroundColor: 'grey.700',
                                            color: 'grey.200',
                                        }}
                                    >
                                        <H3 data-testid="best-time-visit-title">
                                            Best Time to Visit
                                        </H3>
                                        <ParagraphSanitized
                                            data-testid="best-time-visit-description"
                                            text={place.bestTimeToVisit}
                                        />
                                    </Paper>
                                    <Box
                                        data-testid={'tag-cloud'}
                                        sx={{
                                            p: 2,
                                            mt: 3,
                                            backgroundColor: 'grey.400',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <TagCloud
                                            minSize={12}
                                            maxSize={35}
                                            tags={tags}
                                        />
                                    </Box>
                                </aside>
                            </SideBar>
                        </Grid>
                    </Container>
                    <Footer />
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default PlaceShow

import React, { useEffect, useState } from 'react'
import { Box, Container, CssBaseline, Grid } from '@mui/material'
import 'react-image-gallery/styles/css/image-gallery.css'

import {
    API_BASE_URL,
    API_URL_ASSETS_IMAGES,
    API_URL_FEATURED_DESTINATIONS,
    API_URL_FEATURED_IMAGES,
    BASE_IMAGE_ASSETS_URL,
} from '@/core/application/app.settings'
import { useApiGet } from '@/core/api'
import { IImage } from '@/common/generic.interface'
import { Carousel, IImageCarousel } from '@/components/utils'
import { Footer } from '@/core/layout'
import { ImageGallery } from '@/components/layout'
import { H1, Paragraph } from '@/components/data-display'
import { IMedia } from '@/components/components.generic.interface'
import { IFeaturedDestination } from '@/common/models/featured-destination'
import { IFeaturedImage } from '@/common/models/featured-image'
import { CardMediaGrid } from '@/components/surfaces'

const Home = () => {
    const [firstSection, setFirstSection] = useState<IImageCarousel[]>([])
    const [secondSection, setSecondSection] = useState<IImage[]>([])
    const [thirdSection, setThirdSection] = useState<IMedia[]>([])
    const [fourthSection, setForthSection] = useState<IMedia[]>([])
    const [featuredDestinations, setFeaturedDestinations] = useState<
        IFeaturedDestination[]
    >([])

    const {
        data: fetchedFeaturedDestinations,
        loading: featuredDestinationsLoading,
        error: featuredDestinationsError,
    } = useApiGet<IFeaturedDestination[]>(
        `${API_URL_FEATURED_DESTINATIONS}?pageType=home`
    )

    const {
        data: fetchedFeaturedImages,
        loading: featuredImagesLoading,
        error: featuredImagesError,
    } = useApiGet<IFeaturedImage[]>(`${API_URL_FEATURED_IMAGES}?pageType=home`)

    useEffect(() => {
        if (fetchedFeaturedDestinations) {
            setFeaturedDestinations(fetchedFeaturedDestinations)
        }
    }, [fetchedFeaturedDestinations])

    useEffect(() => {
        if (fetchedFeaturedImages) {
            const firstSectionData = fetchedFeaturedImages
                .filter((image) => image.section === 1)
                .map((image) => {
                    return {
                        original: `${BASE_IMAGE_ASSETS_URL}/1280x600?text=${image.title}`,
                        thumbnail: `${BASE_IMAGE_ASSETS_URL}/100x30`,
                        description: image.description,
                    }
                })
            setFirstSection(firstSectionData)

            const secondSectionData = fetchedFeaturedImages
                .filter((image) => image.section === 2)
                .map((image) => {
                    return {
                        url: `${BASE_IMAGE_ASSETS_URL}/400x600?text=${image.title}`,
                        title: image.description,
                    }
                })
            setSecondSection(secondSectionData)

            const thirdSectionData = fetchedFeaturedImages
                .filter((image) => image.section === 3)
                .map((image) => {
                    return {
                        id: image.id,
                        image: `${BASE_IMAGE_ASSETS_URL}/400x300?text=${image.title}`,
                        title: image.title,
                        description: image.description,
                        link: image.link,
                    }
                })
            setThirdSection(thirdSectionData)

            const fourthSectionData = fetchedFeaturedImages
                .filter((image) => image.section === 4)
                .map((image) => {
                    return {
                        id: image.id,
                        image: `${BASE_IMAGE_ASSETS_URL}/400x300?text=${image.title}`,
                        title: image.title,
                        description: image.description,
                        link: image.link,
                    }
                })
            setForthSection(fourthSectionData)
        }
    }, [fetchedFeaturedImages])

    return (
        <React.Fragment>
            {featuredDestinations && featuredDestinations.length > 0 && (
                <React.Fragment>
                    <CssBaseline />
                    <Box
                        data-testid="featured-first-section"
                        sx={{ overflowX: 'hidden' }}
                    >
                        {firstSection && <Carousel images={firstSection} />}
                    </Box>
                    <Container maxWidth="lg" sx={{ mt: 5, mb: 15 }}>
                        <section data-testid="featured-second-section">
                            <H1
                                data-testid="featured-second-section-title"
                                align="center"
                                sx={{ mt: 10 }}
                            >
                                {featuredDestinations[1].title}
                            </H1>
                            <Paragraph
                                data-testid="featured-second-section-description"
                                variant="leadParagraph"
                                align="center"
                            >
                                {featuredDestinations[1].description}
                            </Paragraph>
                            <ImageGallery images={secondSection} gap={30} />
                        </section>
                        <section data-testid="featured-third-section">
                            <H1
                                data-testid="featured-third-section-title"
                                align="center"
                                sx={{ mt: 10 }}
                            >
                                {featuredDestinations[2].title}
                            </H1>
                            <Paragraph
                                data-testid="featured-third-section-description"
                                variant="leadParagraph"
                                align="center"
                            >
                                {featuredDestinations[2].description}
                            </Paragraph>
                            <CardMediaGrid
                                data-testid="featured-third-section-cards"
                                media={thirdSection}
                                buttonText="Discover"
                                infoPrefix="Discover more about"
                            />
                        </section>
                    </Container>
                    <Box
                        data-testid="featured-fourth-section"
                        sx={{ backgroundColor: 'grey.200', py: 1 }}
                    >
                        <Container sx={{ mt: 10, mb: 20 }}>
                            <H1
                                data-testid="featured-fourth-section-title"
                                align="center"
                                sx={{ mt: 10 }}
                            >
                                {featuredDestinations[3].title}
                            </H1>
                            <Paragraph
                                data-testid="featured-fourth-section-description"
                                variant="leadParagraph"
                                align="center"
                            >
                                {featuredDestinations[3].description}
                            </Paragraph>
                            <CardMediaGrid
                                media={fourthSection}
                                buttonText="Discover"
                                infoPrefix="Discover more about"
                            />
                        </Container>
                    </Box>
                </React.Fragment>
            )}
            <Footer />
        </React.Fragment>
    )
}

export default Home

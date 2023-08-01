import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { CssBaseline } from '@mui/material'

import { API_URL_REGIONS, BASE_IMAGE_ASSETS_URL } from '@/core/application'
import { useApiGet } from '@/core/api'
import { Footer } from '@/core/layout'
import { IRegion } from '@/common/models/region'
import { H1 } from '@/components/data-display'
import { CardMediaGrid } from '@/components/surfaces'

const RegionIndex = () => {
    const [regions, setRegions] = useState<any[]>([])
    const {
        data: fetchedRegions,
        loading: getLoading,
        error: getError,
    } = useApiGet<IRegion[]>(`${API_URL_REGIONS}`)

    useEffect(() => {
        if (fetchedRegions) {
            setRegions(
                fetchedRegions.map((region: IRegion) => ({
                    id: region.regionCode,
                    image: `${BASE_IMAGE_ASSETS_URL}/300x169?text=${region.regionName}`,
                    title: region.regionName,
                    description: region.briefDescription,
                    link: `/regions/${region.regionCode}`,
                }))
            )
        }
    }, [fetchedRegions])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: 20 }}>
                <header>
                    <H1 data-testid="region-index-title" sx={{ mt: 3 }}>
                        Travel Regions
                    </H1>
                </header>
                {regions && regions.length > 0 && (
                    <CardMediaGrid
                        media={regions}
                        buttonText="Discover"
                        infoPrefix="Discover more about"
                    />
                )}
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default RegionIndex

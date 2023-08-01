import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { CssBaseline, Pagination } from '@mui/material'

import {
    API_BASE_URL,
    API_URL_COUNTRIES,
    API_URL_PLACES,
    API_URL_REGIONS,
    BASE_IMAGE_ASSETS_URL,
    PATH_DESTINATIONS,
} from '@/core/application'
import { useApiGet } from '@/core/api'
import { Footer } from '@/core/layout'
import { IPlaceImage, IPlace } from '@/common/models/place'
import { IRegion } from '@/common/models/region'
import { ICountry } from '@/common/models/country'
import { IMedia } from '@/components/components.generic.interface'
import { H1, H2, IRadio, RadioGroupGrid } from '@/components/data-display'
import { CardMediaGrid } from '@/components/surfaces'

const PlaceIndex = () => {
    const [placesMedia, setPlacesMedia] = useState<IMedia[]>([])
    const [regionRadios, setRegionRadios] = useState<IRadio[]>([])
    const [countryRadios, setCountryRadios] = useState<IRadio[]>([])
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [regionFilter, setRegionFilter] = useState<string>('')
    const [countryFilter, setCountryFilter] = useState<string>('')
    const [countryRegion, setCountryRegion] = useState<string>('')
    const itemsPerPage = 12
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = page * itemsPerPage

    const {
        data: fetchedPlaces,
        loading: getPlacesLoading,
        error: getPLacesError,
    } = useApiGet<IPlace[]>(
        `${API_URL_PLACES}?order[ranking]=ASC${regionFilter}${countryFilter}`
    )

    const {
        data: fetchedRegions,
        loading: getRegionsLoading,
        error: getRegionsError,
    } = useApiGet<IRegion[]>(`${API_URL_REGIONS}`)

    const {
        data: fetchedCountries,
        loading: getCountriesLoading,
        error: getCountriesError,
    } = useApiGet<ICountry[]>(`${API_URL_COUNTRIES}${countryRegion}`)

    useEffect(() => {
        if (fetchedPlaces) {
            const places = fetchedPlaces.map((place: IPlace) => {
                const landscapeImage = place.placeImages?.find(
                    (image: IPlaceImage) =>
                        image.orientation === 'landscape' &&
                        image.sortOrder === 1
                )
                /*
                const imageUrl = landscapeImage
                    ? `${API_BASE_URL}/${landscapeImage.filePath}`
                    : `${BASE_IMAGE_ASSETS_URL}/300x169?text=${place.placeName}`
*/
                const imageUrl = `${BASE_IMAGE_ASSETS_URL}/300x169?text=${place.placeName}`

                return {
                    id: place.id.toString(),
                    image: imageUrl,
                    title: place.placeName,
                    description: place.briefDescription,
                    link: `${PATH_DESTINATIONS}/${place.id}`,
                }
            })

            setPlacesMedia(places)
            setTotalPages(Math.ceil(fetchedPlaces.length / itemsPerPage))
        }
    }, [fetchedPlaces, regionFilter])

    useEffect(() => {
        if (fetchedRegions) {
            const radios = fetchedRegions.map((region: IRegion) => ({
                label: region.regionName,
                value: region.regionCode,
            }))
            setRegionRadios(radios)
        }
    }, [fetchedRegions])

    useEffect(() => {
        if (fetchedCountries) {
            const radios = fetchedCountries.map((country: ICountry) => ({
                label: country.countryName,
                value: country.countryCode,
            }))
            setCountryRadios(radios)
        }
    }, [fetchedCountries])

    const displayedPlaces = placesMedia?.slice(startIndex, endIndex)

    const handleRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        setPage(1)
        setCountryRadios([])

        if (value === '') {
            setRegionFilter('')
            setCountryRegion('')
        } else {
            setRegionFilter(`&country.region.regionCode=${value}`)
            setCountryRegion(`?region.regionCode=${value}`)
        }
    }

    const handleCountryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value

        setPage(1)
        if (value === '') {
            setCountryFilter('')
        } else {
            setCountryFilter(`&country.countryCode=${value}`)
        }
    }

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mb: 20 }}>
                <header>
                    <H1 data-testid="place-index-title" sx={{ mt: 3 }}>
                        Destinations
                    </H1>
                </header>
                {fetchedRegions && (
                    <RadioGroupGrid
                        labelGroup={'Region'}
                        labelAll={'All regions'}
                        checkAll={regionFilter}
                        radios={regionRadios}
                        onChange={handleRegionChange}
                    />
                )}
                {fetchedCountries && countryRegion !== '' && (
                    <RadioGroupGrid
                        labelGroup={'Country'}
                        labelAll={'All countries'}
                        checkAll={countryFilter}
                        radios={countryRadios}
                        onChange={handleCountryChange}
                    />
                )}

                {displayedPlaces?.length === 0 ? (
                    <H2 data-testid="no-results" sx={{ mt: 5 }}>
                        No destinations found.
                    </H2>
                ) : (
                    <React.Fragment>
                        <Pagination
                            data-testid="pagination-top"
                            count={totalPages}
                            page={page}
                            sx={{ mt: 3 }}
                            onChange={handlePageChange}
                        />
                        {displayedPlaces && (
                            <CardMediaGrid
                                media={displayedPlaces}
                                buttonText="Discover"
                                infoPrefix="Discover more about"
                            />
                        )}
                        <Pagination
                            data-testid="pagination-bottom"
                            count={totalPages}
                            page={page}
                            sx={{ mt: 3 }}
                            onChange={handlePageChange}
                        />
                    </React.Fragment>
                )}
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default PlaceIndex

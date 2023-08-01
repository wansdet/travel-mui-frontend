import { ICountry } from '@/common/models/country'

export interface IPlaceImage {
    id: number
    orientation: string
    filePath: string
    sortOrder: number
}

export interface IPlace {
    id: number
    placeName: string
    countryRegion?: string
    briefDescription: string
    longDescription: string
    travelInformation: string
    bestTimeToVisit: string
    thingsToDo: string
    accommodation: string
    food: string
    imageTags?: string[]
    tags: string[]
    ranking?: number
    worldRanking?: number
    sortOrder?: number
    country?: ICountry
    placeImages?: IPlaceImage[]
}

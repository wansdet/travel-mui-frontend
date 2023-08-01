/* src/common/models/country/country.interface.ts */
import { IRegion } from '@/common/models/region'
import { IPlace } from '@/common/models/place'

export interface ICountry {
    countryCode: string
    countryName: string
    region?: IRegion
    capital?: string
    briefDescription: string
    shortDescription: string
    longDescription: string
    currency?: string
    language?: string
    atm?: string
    mobilePhone?: string
    electricity?: string
    imageTags?: string[]
    ranking?: number
    sortOrder?: number
    places: IPlace[]
}

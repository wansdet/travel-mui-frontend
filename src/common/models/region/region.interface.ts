/* src/common/models/region/region.interface.ts */
import { ICountry } from '@/common/models/country'

export interface IRegion {
    regionCode: string
    regionName: string
    briefDescription: string
    shortDescription?: string
    longDescription: string
    imageTags?: string[]
    ranking?: number
    sortOrder?: number
    createdAt?: Date
    createdBy?: string
    updatedAt?: Date
    updatedBy?: string
    countries: ICountry[]
}

import React from 'react'
import Paper from '@mui/material/Paper'

import { ICountry } from '@/common/models/country'
import { Heading, Paragraph, Section } from '@/components/data-display'

interface ICountryInformationProps {
    country: ICountry
}

const CountryInformation = (props: ICountryInformationProps) => {
    const { country } = props

    return (
        <React.Fragment>
            <Paper
                elevation={0}
                sx={{
                    backgroundColor: 'grey.700',
                    color: 'grey.200',
                    p: 2,
                    mt: 3,
                }}
            >
                <Section id="country-information-heading" level={2}>
                    <Heading>Country Information</Heading>
                    <Section id="country-information-details">
                        <Heading>Capital</Heading>
                        <Paragraph>{country.capital}</Paragraph>
                        <Heading>Currency</Heading>
                        <Paragraph>{country.currency}</Paragraph>
                        <Heading>Languages</Heading>
                        <Paragraph>{country.language}</Paragraph>
                        <Heading>ATM and Credit Cards</Heading>
                        <Paragraph>{country.atm}</Paragraph>
                        <Heading>Mobile Phone</Heading>
                        <Paragraph>{country.mobilePhone}</Paragraph>
                        <Heading>Electricity</Heading>
                        <Paragraph>{country.electricity}</Paragraph>
                    </Section>
                </Section>
            </Paper>
        </React.Fragment>
    )
}

export default CountryInformation

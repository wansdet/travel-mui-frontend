import { Footer } from '../page-objects/core'
import { Header } from '../page-objects/core'
import { PlaceIndex, PlaceShow } from '../page-objects/features'
import { CardMediaGrid } from '../page-objects/components/surfaces/CardMediaGrid'
import { RadioGroupGrid } from '../page-objects/components/data-display/RadioGroupGrid'

describe('The Destinations Page (Place Index)', () => {
    const header = new Header()
    const placeIndex = new PlaceIndex()
    const placeShow = new PlaceShow()
    const footer = new Footer()
    const cardMediaGrid = new CardMediaGrid()
    const radioGroupGrid = new RadioGroupGrid()

    beforeEach(() => {
        placeIndex.visit()
    })

    it('successfully loads and contains the expected elements', () => {
        // Check if the header is visible
        header.getAppBar().should('be.visible')

        placeIndex.getPlaceIndexTitle().contains('Destinations')

        // Check region filter is visible and contains the expected elements
        cy.get('[data-test="radio-group-grid-region"]')
            .should('be.visible')
            .within(() => {
                radioGroupGrid.getRadioGroupLabel().contains('Region')
                radioGroupGrid.getRadio().should('have.length', 11)
                radioGroupGrid.getRadioLabel().first().contains('All regions')
                radioGroupGrid.getRadioLabel().last().contains('South America')
                radioGroupGrid
                    .getRadioLabel()
                    .first()
                    .within(() => {
                        cy.get('input').should('be.checked')
                    })
            })

        // Check country filter should not exist
        cy.get('[data-test="radio-group-grid-country"]').should('not.exist')

        // Check if the top pagination is visible and contains the expected elements
        placeIndex.getPaginationTop().should('be.visible')

        // Check if the bottom pagination is visible and contains the expected elements
        placeIndex.getPaginationBottom().should('be.visible')

        // Check if the card media grid is visible and contains the expected elements
        cardMediaGrid
            .getCardMediaGrid()
            .should('be.visible')
            .find('[data-test="grid-card"]')
            .should('have.length', 12)
        cardMediaGrid.getGridCardTitle().first().contains('Vancouver')
        cardMediaGrid
            .getGridCardDescription()
            .first()
            .contains('Vancouver, located on the west coast of Canada')
        cardMediaGrid.getGridCardButton().first().contains('Discover')

        // Check if the footer is visible and contains the expected elements
        footer.getFooter().should('be.visible')
    })

    it('successfully displays the country filter when a region is selected', () => {
        cy.get('[data-test="radio-group-grid-region"]').within(() => {
            radioGroupGrid.getRadioLabel().contains('Africa').click()
        })

        cy.get('[data-test="radio-group-grid-country"]')
            .should('be.visible')
            .within(() => {
                radioGroupGrid.getRadioGroupLabel().contains('Country')
                radioGroupGrid.getRadio().should('have.length', 12)
                radioGroupGrid.getRadioLabel().eq(1).contains('Botswana')
                radioGroupGrid.getRadioLabel().last().contains('Zimbabwe')
                radioGroupGrid
                    .getRadioLabel()
                    .first()
                    .within(() => {
                        cy.get('input').should('be.checked')
                    })
            })

        // Check if the card media grid is visible and contains the expected elements
        cardMediaGrid
            .getCardMediaGrid()
            .should('be.visible')
            .find('[data-test="grid-card"]')
            .should('have.length', 12)
        cardMediaGrid.getGridCardTitle().first().contains('Okavango Delta')
        cardMediaGrid
            .getGridCardDescription()
            .first()
            .contains('The Okavango Delta is a vast inland river ')
    })

    it('successfully loads the country page when a country is selected', () => {
        cy.get('[data-test="radio-group-grid-region"]').within(() => {
            radioGroupGrid.getRadioLabel().contains('Europe').click()
        })

        cardMediaGrid.getGridCardButtonByTitle('Barcelona').click()
        placeShow.getPlaceShowTitle().contains('Barcelona')
    })
})

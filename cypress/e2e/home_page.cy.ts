import { Footer } from '../page-objects/core'
import { Header } from '../page-objects/core'
import { Home, PlaceShow } from '../page-objects/features'
import { CardMediaGrid } from '../page-objects/components/surfaces/CardMediaGrid'

describe('The Home Page', () => {
    const header = new Header()
    const home = new Home()
    const placeShow = new PlaceShow()
    const footer = new Footer()
    const cardMediaGrid = new CardMediaGrid()

    beforeEach(() => {
        home.visit()
    })

    it('successfully loads and contains the expected elements', () => {
        // Check if the header is visible
        header.getAppBar().should('be.visible')

        // Check if the carousel is visible and contains the expected image elements
        home.getFeaturedFirstSection()
            .should('be.visible')
            .within(() => {
                cy.get('[data-testid="carousel"]').should('be.visible')
                //.find('img')
                //.should('have.length', 5)
            })

        // Check if the seconds section is visible and contains the expected elements
        home.getFeaturedSecondSectionTitle().contains('City Breaks')
        home.getFeaturedSecondSectionDescription().contains(
            "Immerse Yourself in Europe's Cultural Tapestry!"
        )

        // Check if the third section is visible and contains the expected elements
        home.getFeaturedThirdSection()
            .should('be.visible')
            .within(() => {
                home.getFeaturedThirdSectionTitle().contains('Asia')
                home.getFeaturedThirdSectionDescription().contains(
                    'Explore Exotic Asia on Your Dream Holiday!'
                )
                cardMediaGrid
                    .getCardMediaGrid()
                    .should('be.visible')
                    .find('[data-test="grid-card"]')
                    .should('have.length', 6)
                cardMediaGrid.getGridCardTitle().first().contains('Bali')
                cardMediaGrid
                    .getGridCardDescription()
                    .first()
                    .contains('Tropical paradise')
                cardMediaGrid.getGridCardButton().first().contains('Discover')
            })

        // Check if the fourth section is visible and contains the expected elements
        home.getFeaturedFourthSection()
            .should('be.visible')
            .within(() => {
                home.getFeaturedFourthSectionTitle().contains('North America')
                home.getFeaturedFourthSectionDescription().contains(
                    'Unleash Your Wanderlust on an Epic North American Holiday!'
                )
                cardMediaGrid
                    .getCardMediaGrid()
                    .should('be.visible')
                    .find('[data-test="grid-card"]')
                    .should('have.length', 6)
                cardMediaGrid
                    .getGridCardTitle()
                    .first()
                    .contains('New York City')
                cardMediaGrid
                    .getGridCardDescription()
                    .first()
                    .contains('Vibrant metropolis')
                cardMediaGrid.getGridCardButton().first().contains('Discover')
            })

        // Check if the footer is visible and contains the expected elements
        footer.getFooter().should('be.visible')
    })

    it('successfully loads the country page when a country is selected in features section 3', () => {
        home.getFeaturedThirdSection().then((section) => {
            cy.wrap(section).within(() => {
                cardMediaGrid.getGridCardButtonByTitle('Bali').click()
            })
        })

        placeShow.getPlaceShowTitle().contains('Bali')
    })

    it('successfully loads the country page when a country is selected in features section 4', () => {
        home.getFeaturedFourthSection().then((section) => {
            cy.wrap(section).within(() => {
                cardMediaGrid.getGridCardButtonByTitle('New York City').click()
            })
        })

        placeShow.getPlaceShowTitle().contains('New York City')
    })
})

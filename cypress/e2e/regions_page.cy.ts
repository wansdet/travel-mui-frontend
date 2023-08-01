import { Footer } from '../page-objects/core'
import { Header } from '../page-objects/core'
import { RegionIndex, RegionShow } from '../page-objects/features'
import { CardMediaGrid } from '../page-objects/components/surfaces/CardMediaGrid'

describe('The Regions Page (Region Index)', () => {
    const header = new Header()
    const regionIndex = new RegionIndex()
    const regionShow = new RegionShow()
    const footer = new Footer()
    const cardMediaGrid = new CardMediaGrid()

    beforeEach(() => {
        regionIndex.visit()
    })

    it('successfully loads and contains the expected elements', () => {
        // Check if the header is visible
        header.getAppBar().should('be.visible')

        regionIndex.getRegionIndexTitle().contains('Regions')

        // Check if the card media grid is visible and contains the expected elements
        cardMediaGrid
            .getCardMediaGrid()
            .should('be.visible')
            .within(() => {
                cardMediaGrid.getGridCard().should('have.length', 10)
                cardMediaGrid.getGridCardTitle().first().contains('Africa')
                cardMediaGrid
                    .getGridCardDescription()
                    .first()
                    .contains(
                        'Africa attracts tourists with its diverse wildlife'
                    )
                cardMediaGrid
                    .getGridCardButton()
                    .should('be.visible')
                    .contains('Discover')
                cardMediaGrid.getGridCardTitle().eq(1).contains('Antarctica')
                cardMediaGrid.getGridCardTitle().eq(2).contains('Asia')
                cardMediaGrid.getGridCardTitle().eq(3).contains('Caribbean')
                cardMediaGrid
                    .getGridCardTitle()
                    .eq(4)
                    .contains('Central America')
                cardMediaGrid.getGridCardTitle().eq(5).contains('Europe')
                cardMediaGrid.getGridCardTitle().eq(6).contains('Middle East')
                cardMediaGrid.getGridCardTitle().eq(7).contains('North America')
                cardMediaGrid.getGridCardTitle().eq(8).contains('Oceania')
                cardMediaGrid.getGridCardTitle().eq(9).contains('South America')
            })

        // Check if the footer is visible and contains the expected elements
        footer.getFooter().should('be.visible')
    })

    it('successfully loads the region page when a region is selected', () => {
        // Check if the card media grid is visible and contains the expected elements
        cardMediaGrid.getGridCardButtonByTitle('Africa').click()

        // Check if the region page is visible and contains the expected elements
        regionShow.getRegionShowTitle().contains('Africa')
    })
})

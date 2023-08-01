/**
 * src/page-objects/features/place/PlaceIndex.ts
 * page object for the PlaceIndex page
 */
export class PlaceIndex {
    visit() {
        cy.visit('/destinations')
    }

    getPlaceIndexTitle() {
        return cy.get('[data-testid="place-index-title"]')
    }

    getNoResults() {
        return cy.get('[data-testid="no-results"]')
    }

    getPaginationTop() {
        return cy.get('[data-testid="pagination-top"]')
    }

    getDestinationCardMediaGrid() {
        return cy.get('[data-test="destination-card-media-grid"]')
    }

    getPaginationBottom() {
        return cy.get('[data-testid="pagination-bottom"]')
    }
}

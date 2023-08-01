/**
 * src/page-objects/features/region/RegionIndex.ts
 * page object for the RegionIndex page
 */
export class RegionIndex {
    visit() {
        cy.visit('/regions')
    }

    getRegionIndexTitle() {
        return cy.get('[data-testid="region-index-title"]')
    }
}

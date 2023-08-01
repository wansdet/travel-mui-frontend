/**
 * cypress/page-objects/features/region/RegionShow.ts
 * page object for the RegionShow page
 */
export class RegionShow {
    visit(id: number) {
        cy.visit('/regions/{id}')
    }

    getRegionShowTitle() {
        return cy.get('[data-test="h1')
    }
}

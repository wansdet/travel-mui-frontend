/**
 * cypress/page-objects/features/place/PlaceShow.ts
 * page object for the PlaceShow feature
 */
export class PlaceShow {
    visit(id: number) {
        return cy.visit(`/places/${id}`)
    }

    getPlaceShowTitle() {
        // return cy.get('[data-test="h1"]')
        return cy.get('[data-testid="place-show-title"]')
    }

    getPlaceShowLeadDescription() {
        return cy.get('[data-testid="place-show-lead-description"]')
    }

    getPlaceShowLongDescription() {
        return cy.get('[data-testid="place-show-long-description"]')
    }

    getPlaceThingsToDo() {
        return cy.get('[data-testid="place-things-to-do"]')
    }

    getThingsToDoTitle() {
        return cy.get('[data-testid="things-to-do-title"]')
    }

    getThingsToDoDescription() {
        return cy.get('[data-testid="things-to-do-description"]')
    }

    getWhereToStayTitle() {
        return cy.get('[data-testid="where-to-stay-title"]')
    }

    getWhereToStayDescription() {
        return cy.get('[data-testid="where-to-stay-description"]')
    }

    getWhereToEatTitle() {
        return cy.get('[data-testid="where-to-eat-title"]')
    }

    getWhereToEatDescription() {
        return cy.get('[data-testid="where-to-eat-description"]')
    }

    getTraveInformatioTitle() {
        return cy.get('[data-testid="travel-information-title"]')
    }

    getTravelInformationDescription() {
        return cy.get('[data-testid="travel-information-description"]')
    }

    getBestTimeVisitTitle() {
        return cy.get('[data-testid="best-time-visit-title"]')
    }

    getBestTimeVisitDescription() {
        return cy.get('[data-testid="best-time-visit-description"]')
    }

    getTagCloud() {
        return cy.get('[data-testid="tag-cloud"]')
    }
}

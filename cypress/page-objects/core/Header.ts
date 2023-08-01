/**
 * src/cypress/page-objects/Header.ts
 * Header page object class.
 */
export class Header {
    getAppBar() {
        return cy.get('[data-testid="app-bar"]')
    }

    getAppTitle() {
        return cy.get('[data-testid="app-title"]')
    }

    getHomeMobileLinkButton() {
        return cy.get('[data-testid="home-mobile-button"]')
    }

    getDestinationsMobileLinkButton() {
        return cy.get('[data-testid="destinations-mobile-button"]')
    }

    getRegionsMobileLinkButton() {
        return cy.get('[data-testid="regions-mobile-button"]')
    }

    getHomeLinkButton() {
        return cy.get('[data-testid="home-button"]')
    }

    getDestinationsLinkButton() {
        return cy.get('[data-testid="destinations-button"]')
    }

    getRegionsLinkButton() {
        return cy.get('[data-testid="regions-button"]')
    }

    getMyAccountLinkButton() {
        return cy.get('[data-testid="my-account-button"]')
    }

    getAdminLinkButton() {
        return cy.get('[data-testid="admin-button"]')
    }

    getSignInLinkButton() {
        return cy.get('[data-testid="sign-in-button"]')
    }

    getSignOutLinkButton() {
        return cy.get('[data-testid="sign-out-button"]')
    }
}

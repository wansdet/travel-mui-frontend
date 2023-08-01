/**
 * src/cypress/page-objects/core/Footer.ts
 * Footer page object class.
 */
export class Footer {
    getFooter() {
        return cy.get('[data-testid="footer"]')
    }

    getNewsletter() {
        return cy.get('[data-testid="newsletter"]')
    }

    getLatestPosts() {
        return cy.get('[data-testid="latest-posts"]')
    }

    getTags() {
        return cy.get('[data-testid="tags"]')
    }

    getCopyright() {
        return cy.get('[data-testid="copyright"]')
    }

    getSocialMedia() {
        return cy.get('[data-testid="social-media"]')
    }
}

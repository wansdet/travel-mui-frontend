/**
 * src/cypress/page-objects/core/Newsletter.ts
 * Newsletter page object class.
 */
export class Newsletter {
    getNewsletterTitle() {
        return cy.get('[data-testid="newsletter-title"]')
    }

    getNewsletterDescription() {
        return cy.get('[data-testid="newsletter-description"]')
    }

    getEmailAddress() {
        return cy.get('[data-testid="email-address"]')
    }

    getSubscribeButton() {
        return cy.get('[data-testid="subscribe-button"]')
    }
}

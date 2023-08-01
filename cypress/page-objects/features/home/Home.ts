/**
 * src/page-objects/Home.ts
 * page object for the Home page
 */
export class Home {
    visit() {
        cy.visit('/')
    }
    getFeaturedFirstSection() {
        return cy.get('[data-testid="featured-first-section"]')
    }

    getFeaturedSecondSectionTitle() {
        return cy.get('[data-testid="featured-second-section-title"]')
    }

    getFeaturedSecondSectionDescription() {
        return cy.get('[data-testid="featured-second-section-description"]')
    }

    getFeaturedThirdSection() {
        return cy.get('[data-testid="featured-third-section"]')
    }

    getFeaturedThirdSectionTitle() {
        return cy.get('[data-testid="featured-third-section-title"]')
    }

    getFeaturedThirdSectionDescription() {
        return cy.get('[data-testid="featured-third-section-description"]')
    }

    getFeaturedThirdSectionCards() {
        return cy.get('[data-testid="featured-third-section-cards"]')
    }

    getFeaturedFourthSection() {
        return cy.get('[data-testid="featured-fourth-section"]')
    }

    getFeaturedFourthSectionTitle() {
        return cy.get('[data-testid="featured-fourth-section-title"]')
    }

    getFeaturedFourthSectionDescription() {
        return cy.get('[data-testid="featured-fourth-section-description"]')
    }
}

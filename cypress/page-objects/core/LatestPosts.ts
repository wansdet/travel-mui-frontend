/**
 * src/cypress/page-objects/core/LatestPosts.ts
 * Latest posts page object class.
 */
export class LatestPosts {
    getLatestPostsTitle() {
        return cy.get('[data-testid="latest-posts-title"]')
    }

    getLatestPost() {
        return cy.get('[data-test="latest-post"]')
    }
}

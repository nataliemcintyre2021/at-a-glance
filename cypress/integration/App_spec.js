describe("At a Glance Page User Flows", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  describe("Main Page Render", () => {

    it("Should have a header with app name on load", () => {
      cy.get('header').find('.app-title').find('.title').contains("At a Glance")
      cy.get('header').find('.app-title').find('.tag-line').contains("Top NY Times stories in the Arts")
    })

    it("Should show date in header area", () => {
      cy.intercept("GET", 'https://api.nytimes.com/svc/topstories/v2/arts**', { fixture: 'news-stories.json', status: 200})
    })
  })
})

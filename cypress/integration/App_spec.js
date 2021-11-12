describe("At a Glance Page User Flows", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept("GET", 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=nPVp32YA7sHGkr7BavN6MlRsA3YRLZF4', { fixture: 'news-stories.json', status: 200 })
  })
  describe("Main Page Render", () => {

    it("Should have a header with app name on load", () => {
      cy.get('header').find('.app-title').find('.title').contains("At a Glance")
      cy.get('header').find('.app-title').find('.tag-line').contains("Top NY Times stories in the Arts")
    })

    it("Should show date in header area", () => {
      cy.get('header').find('.header-date').find('h4').contains('2021-11-09')
    })

    it("Should show search bar at top of main section", () => {
      cy.get('.search-container').find('input').invoke('attr', 'placeholder').should('contain', 'Search articles')
    })

    it("Should show title of article as link", () => {
      cy.get('a').should('have.attr', 'href').and('include', '/‘Dickinson’ Uses the Civil War to Explore Modern Divisions')
    })

    it("Should show author of article", () => {
      cy.get('.card').find('p').contains('By Sarah Lyall')
    })

    it("Should show details page on click of article", () => {
      cy.get('a').click()
      cy.get('.the-details').find('.the-details-card').find('h1').contains('‘Dickinson’ Uses the Civil War to Explore Modern Divisions')
    })
  })
})

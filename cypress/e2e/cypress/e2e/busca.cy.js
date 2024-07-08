///<reference types='cypress'/>



describe('US-001 Funcionalidade de Buscas', () => {
    beforeEach(() => {
        cy.visit'/')
    });

    it.only('Deve validar a busca de filme com sucesso', () => {
       
        cy.get("#search-input").type("Matrix")
        cy.get("#search-button").click()
        cy.get('#results-section').should('contain', "Matrix")

    })

    it('Deve validar a limpeza do campo busca de filme', () => {

        cy.get("#clear-button").click()
        cy.get('#search-input').should("have.value", "")
        cy.get('#results-section').should("be empty")
    })
    it('Deve validar a busca com o campo vazio', () => {

        cy.get("#search-button").click()
        cy.get('#results-section').should("contain", "Por favor, digite o nome de um filme")
    })
    it('Deve validar a busca de filme invalido ou não encontrado.', () => {

        cy.get("#search-input").type("O Poderoso Chefao")
        cy.get("#search-button").click()
        cy.get('#results-section').should("contain", "Filme não encontrado.")
    })
});
    it("Deve buscar filmes de uma lista com sucesso", () => {
    cy.fixture("filmes.json").then(filmes) => {
        cy.get("#search-input").type(filmes[1].título)
        cy.get("#search-button").click()
        cy.get('#results-section').should('contain', filmes[0].título)
    })

    it("Deve buscar filmes da lista inteira com sucesso", () => {
        cy.fixture("filmes.json").each((filmes) => {
            cy.get("#search-input").clear().type(filmes.título)
            cy.get("#search-button").click({force:true})
            cy.get('#results-section').should('contain', filmes.título)
        })
  });

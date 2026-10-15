// // ecommerce.cy.js


// describe('Fluxo de Interação no E-commerce', () => {


// it('Deve permitir que o usuário navegue até a página de produtos', () => {

// cy.visit('http://localhost:3000');

// cy.get('#products-list li').should('have.length.greaterThan', 0); // Verifica se há produtos listados

// });


// it('Deve exibir os botões de "Adicionar ao Carrinho"', () => {

// cy.visit('http://localhost:3000');

// cy.get('#products-list li button').should('contain', 'Adicionar ao Carrinho'); // Verifica se o botão está presente

// });


// it('Deve permitir que o usuário clique no botão de "Adicionar ao Carrinho"', () => {

// cy.visit('http://localhost:3000');

// cy.get('#products-list li').first().find('button').click(); // Simula o clique no primeiro botão

// });


// })

describe('Fluxo de Interação no E-commerce', () => {

  it('Deve exibir produtos na tela', () => {
    cy.visit('http://localhost:3000');

    cy.get('#products-list li')
      .should('have.length.greaterThan', 0);
  });

  it('Deve exibir botão Adicionar ao Carrinho', () => {
    cy.visit('http://localhost:3000');

    cy.get('#products-list li button')
      .should('contain', 'Adicionar ao Carrinho');
  });

  it('Deve adicionar um item ao carrinho', () => {
    cy.visit('http://localhost:3000');

    cy.get('#cart-count')
      .should('contain', '0');

    cy.get('#products-list li')
      .first()
      .find('button')
      .click();

    cy.get('#cart-count')
      .should('contain', '1');
  });

  it('Deve adicionar dois itens ao carrinho', () => {
    cy.visit('http://localhost:3000');

    cy.get('#products-list li')
      .eq(0)
      .find('button')
      .click();

    cy.get('#products-list li')
      .eq(1)
      .find('button')
      .click();

    cy.get('#cart-count')
      .should('contain', '2');
  });

});

// funcionalidade de carrinho de compras na aplicação de e-commerce.
// Ao clicar no botão “Adicionar ao Carrinho”, o sistema atualiza a 
// quantidade de itens exibidos na tela.
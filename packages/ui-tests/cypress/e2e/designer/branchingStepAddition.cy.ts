describe('Test for Branching actions from the canvas', () => {
  beforeEach(() => {
    cy.openHomePage();
  });

  it(' User appends a branch from the canvas', () => {
    cy.uploadFixture('flows/ComplexKamelet.yaml');
    cy.openDesignPage();

    cy.checkNodeExist('when', 3);
    cy.selectInsertSpecialNode('choice');

    cy.get('#otherwise').should('not.exist');
    cy.get('#when').should('be.visible').click();
    // wait for the canvas rerender
    cy.wait(1000);
    cy.checkNodeExist('when', 4);
  });

  it('User deletes a branch from the canvas', () => {
    cy.uploadFixture('flows/ComplexKamelet.yaml');
    cy.openDesignPage();

    cy.checkNodeExist('when', 3);
    cy.removeNodeByName('when', 0);
    // wait for the canvas rerender
    cy.wait(1000);
    cy.checkNodeExist('otherwise', 1);
    cy.removeNodeByName('otherwise');
    // wait for the canvas rerender
    cy.wait(1000);
    cy.checkNodeExist('otherwise', 0);
    // once there are is no "otherwise" node in the canvas - it shuld be again selectable in the special node insert
    cy.selectInsertSpecialNode('choice');
    cy.get('#otherwise').should('exist');
  });

  it('User inserts a branch from the canvas', () => {
    cy.uploadFixture('flows/BasicKamelet.yaml');
    cy.openDesignPage();

    cy.selectAppendNode('marshal');
    cy.get('[data-testid="processor-catalog-tab"]').click();
    cy.get('.pf-v5-c-text-input-group__text-input').click();
    cy.get('.pf-v5-c-text-input-group__text-input').type('choice');
    cy.get('#choice').should('be.visible').click();
    // wait for the canvas rerender
    cy.wait(1000);
    cy.checkNodeExist('choice', 1);
    cy.checkNodeExist('when', 1);
    cy.checkNodeExist('otherwise', 1);

    cy.openSourceCode();
    cy.editorScrollToTop();
    cy.checkCodeSpanLine('choice:', 1);
    cy.checkCodeSpanLine('otherwise:', 1);
  });

  it('User appends a step in a branch from the canvas (last in the branch)', () => {
    cy.uploadFixture('flows/ComplexKamelet.yaml');
    cy.openDesignPage();

    cy.checkNodeExist('setHeader', 1);
    cy.selectAppendNode('setHeader');
    cy.get('.pf-v5-c-text-input-group__text-input').click();
    cy.get('.pf-v5-c-text-input-group__text-input').type('activemq');
    cy.get('#activemq').should('be.visible').click();

    cy.checkNodeExist('activemq', 1);
    cy.checkEdgeExists('setHeader', 'activemq');
  });

  it('User prepends a step in a branch from the canvas (first in the branch)', () => {
    cy.uploadFixture('flows/ComplexKamelet.yaml');
    cy.openDesignPage();

    cy.checkNodeExist('digitalocean', 1);
    cy.selectPrependNode('digitalocean');
    cy.get('.pf-v5-c-text-input-group__text-input').click();
    cy.get('.pf-v5-c-text-input-group__text-input').type('activemq');
    cy.get('#activemq').should('be.visible').click();

    cy.checkNodeExist('activemq', 1);
    cy.checkEdgeExists('activemq', 'digitalocean');
  });

  it('User prepends a step to a step whose previous step contains branches', () => {
    cy.uploadFixture('flows/ComplexKamelet.yaml');
    cy.openDesignPage();

    cy.checkNodeExist('filter', 1);
    cy.selectPrependNode('filter');
    cy.get('.pf-v5-c-text-input-group__text-input').click();
    cy.get('.pf-v5-c-text-input-group__text-input').type('activemq');
    cy.get('#activemq').should('be.visible').click();

    cy.checkNodeExist('activemq', 1);
    cy.checkEdgeExists('activemq', 'filter');
  });
});

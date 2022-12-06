describe('index page', () => {
  it('should have a rendered list of enumerated values', () => {
    // when
    cy.visit('/');

    // then
    cy.contains('foo');
    cy.contains('bar');
    cy.contains('baz');
  })
});

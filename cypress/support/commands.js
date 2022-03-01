// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
import 'cypress-file-upload';
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://qa.cassbana.com/#/');
      cy.get('input[type=text]').type(email);
      cy.get('input[type=password]').type(password);
      cy.get('.vs-button-text').click();
      cy.contains('You are in home.');
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

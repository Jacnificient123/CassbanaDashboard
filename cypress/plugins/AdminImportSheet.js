/// <reference types="cypress" />

describe('Cassbana Admin', () => 
{
    it('Navigate to Cassbana Dashboard Valid', () => 
    {
      cy.visit('/');
      cy.get('input[type=text]').type('Cassbanateam@cassbana.com');
      cy.get('input[type=password]').type('P@$$w0rd');
      cy.get('.vs-button-text').click();
      cy.contains('You are in home.');
      
    })

    it('Navigate to merchant import page' , () =>
    {
      cy.get('.ps-container > :nth-child(1) > :nth-child(1) > .flex > .truncate').click();
      cy.get(':nth-child(6) > .vs-sidebar-group > .group-header > .flex > .truncate').click();
      cy.get(':nth-child(6) > .vs-sidebar-group > .vs-sidebar-group-items > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
      cy.scrollTo('500px')
      cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(1)').click();
    })
    

  //  it('Merchant Import Sheet Wrong Phone Number Format', () => 
  //   {

  //     cy.get('.flex > div > .vs-component > .vs-button-text').as('Import Sheet');
  //     cy.get('@Import Sheet').click();
  //     const fileName2 = 'Test2.csv';

  //     cy.get('.file-input.hidden').attachFile(fileName2);
  //     //cy.contains('Sorry  invalid phone')
  //     cy.get('.content-noti').click({ multiple: true });
    
  //   })

    it('Merchant Import Sheet successfully', () => 
    {

      cy.get('.flex > div > .vs-component > .vs-button-text').as('Import Sheet');
      cy.get('@Import Sheet').click({ multiple: true });
      const fileName2 = 'Test.csv';

      cy.get('.file-input.hidden').attachFile(fileName2);
      //cy.get('.content-noti').click({ multiple: true });
    
    })

    // it('Merchant Import Sheet Missing Mandatory Fields', () => 
    // {

    //   cy.get('.flex > div > .vs-component > .vs-button-text').click();
    //   const fileName1 = 'Test1.csv';

    //   cy.get('.file-input.hidden').attachFile(fileName1);
    //   cy.get('.content-noti').contains('Bad format for Phone field with Country code at row index 2');
    //   cy.get('.content-noti').click({ multiple: true });
    
    // })

    it('Merchant Import Sheet Wrong Name Format', () => 
    {

      cy.get('.flex > div > .vs-component > .vs-button-text').click();
      const fileName3 = 'Test3.csv';

      cy.get('.file-input.hidden').attachFile(fileName3);
      cy.get('.content-noti').contains('Bad format for Phone field with Country code');
      cy.get('.content-noti').click({ multiple: true });
    
    })

    // it('Merchant Import Sheet Wrong National ID Format', () => 
    // {

    //   cy.get('.flex > div > .vs-component > .vs-button-text').click();
    //   const fileName4 = 'Test4.csv';

    //   cy.get('.file-input.hidden').attachFile(fileName4);
    //   cy.get('.content-noti').contains('The National ID should be 14 digits please enter a valid National ID');
    //   cy.get('.content-noti').click({ multiple: true });
    
    // })

    // it('Merchant Import Sheet Wrong Credit Limit Format', () => 
    // {

    //   cy.get('.flex > div > .vs-component > .vs-button-text').click();
    //   const fileName5 = 'Test5.csv';

    //   cy.get('.file-input.hidden').attachFile(fileName5);
    //   cy.get('.content-noti').contains('The Limit field Not valid');
    //   cy.get('.content-noti').click({ multiple: true });

    // })

    // it('Merchant Import Sheet Credit Limit Exceeded', () => 
    // {

    //   cy.get('.flex > div > .vs-component > .vs-button-text').click();
    //   const fileName6 = 'Test6.csv';

    //   cy.get('.file-input.hidden').attachFile(fileName6);
    //   cy.contains('The Limit field Bigger than max limit of supplier');
    //   cy.get('.content-noti').click({ multiple: true });

    // })

    /*it('Merchant Import Sheet Already Existing Merchant Phone Number Under Different Supplier', () => 
    {

      cy.get('.flex > div > .vs-component > .vs-button-text').click();
      const fileName7 = 'Test7.csv';

      cy.get('.file-input.hidden').attachFile(fileName7);
    
    })

    it('Merchant Import Sheet Already Existing Merchant Phone Number Under Same Supplier', () => 
    {

      cy.get('.flex > div > .vs-component > .vs-button-text').click();
      const fileName8 = 'Test8.csv';

      cy.get('.file-input.hidden').attachFile(fileName8);
    
    })

    it('Merchant Import Sheet Already Existing National ID Under Same Supplier', () => 
    {

      cy.get('.flex > div > .vs-component > .vs-button-text').click();
      const fileName9 = 'Test9.csv';

      cy.get('.file-input.hidden').attachFile(fileName9);
    
    })

    it('Merchant Import Sheet Already Existing National ID Under another Supplier', () => 
    {

      cy.get('.flex > div > .vs-component > .vs-button-text').click();
      const fileName10 = 'Test9.csv';

      cy.get('.file-input.hidden').attachFile(fileName10);
    
    })

    
    it('Merchant Import Sheet with More Than 10 Records', () => 
    {

      cy.get('.flex > div > .vs-component > .vs-button-text').click();
      const fileName11 = 'Test9.csv';

      cy.get('.file-input.hidden').attachFile(fileName11);
    
    })*/

  })
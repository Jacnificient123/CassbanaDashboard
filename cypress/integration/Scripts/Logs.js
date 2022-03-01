/// <reference types="cypress" />
import Logs from '../PageObjects/Logs'

describe('Web Dashboard', () => 
{
  const Log = new Logs();
    before(function(){
        // runs once before all tests
        cy.fixture('datasheet').then(function(data)
        {
            this.data=data;

        })
      })

    it('View and Serach Transaction Logs',function(){
      //This block of code seraches and views transaction logs
      cy.login(this.data.email,this.data.password);
      Log.getLogs().click();
      Log.getTransactionLogs().click();
      Log.getMerchantSearchName().type('Ahmed Mousa');
      Log.getResults().contains('Ahmed Mousa');
      Log.getMerchantSearchName().clear();
      // cy.get(':nth-child(1) > .w-full > .vdp-datepicker > :nth-child(1) > input').click();
      // cy.get('div.vdp-datepicker__calendar span:nth-child(2)').click({ multiple: true });
      // cy.get('span.prev').click();
      // cy.get('span.next').click();
      cy.scrollTo('right');
      Log.getViewTrans().click();
      Log.getViewContent().contains('Ahmed Mousa');
      cy.get('.vs-button-text').click();
    })

    // it('View and Serach Loans',() =>{
    //   //block of code searches Loans by status
    //   cy.get('.vs-sidebar-group-open > .vs-sidebar-group-items > :nth-child(2) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
    //   cy.get(':nth-child(1) > .con-select > .input-select-con > .input-select').type('due applied');
    //   cy.get('[data-text="Due Applied"] > .vs-select--item > span').invoke('show').click();
    //   cy.get(':nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    //   cy.get(':nth-child(1) > .con-select > .input-select-con > .input-select').type('Cancelled by admin');
    //   cy.get('[data-text="Cancelled by Admin"] > .vs-select--item > span').click();
    //   cy.get(':nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    //   cy.get(':nth-child(1) > .con-select > .input-select-con > .input-select').type('Rejected');
    //   cy.get('[data-text="Rejected"] > .vs-select--item > span').click();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').type('Created');
    //   cy.get('[data-text="Created"] > .vs-select--item > span').click();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').type('Pending 2nd Verification');
    //   cy.get('[data-text="Pending 2nd Verification"] > .vs-select--item > span').click();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').type('Approved');
    //   cy.get('[data-text="Approved"] > .vs-select--item > span').click();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').type('Partially Settled');
    //   cy.get('[data-text="Partially Settled"] > .vs-select--item > span').click();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').type('Settled');
    //   cy.get('[data-text="Settled"] > .vs-select--item > span').click();
    //   cy.get('.lg\:w-1\/2 > .vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').clear();
    // })
})
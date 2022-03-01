/// <reference types="cypress" />
import Contents from '../PageObjects/Contents'

describe('Web Dashboard', () => 
{
    const Content = new Contents();
    beforeEach(function(){
        // runs once before all tests
        cy.fixture('datasheet').then(function(data)
        {
            this.data=data;

        })
      })

    it('How It Works for customers/add a content', function() {
        //Navigating how it works page for customers
        cy.login(this.data.email,this.data.password);
        Content.getContents().click();
        Content.getHowItWorks().click();
        Content.getCustomers().click();
        // Content.getContentViewBtn().click();
        // Content.getContentTitle().should('be.visible').clear();
        // Content.getContentTitle().type(this.data.newContentTitle);
        Content.getUploadBtn().attachFile("QA.png");
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .truncate').click();
        Content.getHowItWorks().click();
        Content.getCustomers().click();

        //add new content for customers
        Content.getAddNewBtn().click();
        cy.get("input[type=file]").attachFile("QA.png");
        cy.wait(2000);
        Content.getNewTitleEn().should('be.visible').type('QA Automation');
        Content.getNewTitleAr().type('Test');
        Content.getNewContentEn().type('This is an automated test');
        Content.getNewContentAr().type('This is still an automated test');
        Content.getSubNewContentBtn().click();
        Content.getCloseAddNewBtn().click();

    })
    it('How It Works for Merchants/add a content', function() {
        //Navigating how it works page for merchants
        cy.get(':nth-child(2) > .vs-sidebar-group > .vs-sidebar-group-items > :nth-child(2) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
        cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(2)').click();
        cy.get('.vx-row > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').clear();
        cy.get('.vx-row > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('Personal Info');
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .truncate').click();
        cy.get(':nth-child(2) > .vs-sidebar-group > .group-header > .flex > .truncate').click();
        cy.get(':nth-child(2) > .vs-sidebar-group > .vs-sidebar-group-items > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
        //add new content for merchants
        cy.get('.p-3 > .feather-icon > .feather').click();
        cy.get("input[type=file]").attachFile("QA.png");
        cy.wait(3000);
        cy.get('.ps-container > .p-6 > :nth-child(5) > .vs-con-input > .vs-inputx').type('QA Automation');
        cy.get(':nth-child(7) > .vs-con-input > .vs-inputx').type('Test');
        cy.get('.ps-container > .p-6 > :nth-child(9) > .quill-editor > .ql-container > .ql-editor > p').type('This is an automated test');
        cy.get('.ps-container > .p-6 > :nth-child(10) > .quill-editor > .ql-container > .ql-editor > p').type('This is still an automated test');
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6 > .vs-button-text').click();
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--items > .flex > .cursor-pointer > .feather').click();

    })
    it('Walkthrough', function(){
        //Add a new walkthrough
        cy.wait(3000);
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
        cy.wait(2000);
        cy.get('.p-3').click();
        cy.get("input[type=file]").attachFile("QA.png");
        cy.wait(3000);
        cy.get('.ps-container > .p-6 > :nth-child(3) > .vs-con-input > .vs-inputx').type('QA Automation');
        cy.get(':nth-child(4) > .vs-con-input > .vs-inputx').type('Test');
        cy.get('.ps-container > .p-6 > :nth-child(5) > .vs-con-input > .vs-inputx').type('QA Automation');
        cy.get(':nth-child(6) > .vs-con-input > .vs-inputx').type('Test');
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6 > .vs-button-text').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('New Item was added')
            return true
        })

        //Delete a walkthrough
        cy.get(':nth-child(4) > .whitespace-no-wrap > :nth-child(1) > .actions > .ml-2').click();
        cy.get('footer > .vs-button-danger').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('The selected item was successfully deleted')
            return true
        })
    })

    it('FAQs',function(){
        //Add a new FAQ
        cy.get(':nth-child(2) > .vs-sidebar-group > .group-header > .flex > .truncate').click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
        cy.wait(2000);
        cy.get('.p-3').click();
        cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('QA Automation');
        cy.get('.ps-container > .p-6 > :nth-child(3) > .vs-con-input > .vs-inputx').type('QA Automation');
        cy.get('.mb-5 > .quill-editor > .ql-container > .ql-editor > p').type('QA Automation');
        cy.get(':nth-child(6) > .quill-editor > .ql-container > .ql-editor > p').type('QA Automation');
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6 > .vs-button-text').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('New Item was added')
            return true
        })

        //Delete a FAQ
        cy.scrollTo('bottom');
        cy.get(':nth-child(8) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(2)').click();
        cy.get('footer > .vs-button-danger').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('The selected item was successfully deleted')
            return true
        })
    })

    })

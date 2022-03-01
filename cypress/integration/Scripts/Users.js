/// <reference types="cypress" />
import Users from '../PageObjects/Users' 
describe('Web Dashboard', () => 
{
    const User = new Users();
    beforeEach(function(){
        // root-level hook
        // runs once before all tests
        cy.fixture('datasheet').then(function(data)
        {
            this.data=data;

        })
      }) 

    it('Update roles/permission', function() //this code simply updates a permission
    {
        cy.login(this.data.email,this.data.password);
        //const User = new Users();
        User.getUsers().click()
        User.getRoles().click();
        User.getViewRoles().click();
        User.getpermission().click();
        cy.scrollTo('bottom');
        User.getSubmitbtn().click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('New Role was Updated')
            return true
        })
    })

    it('Add and update admin', function ()
    {   // This block code adds an admin
        User.getAdmin().click();
        User.getAddNewBtn().should('be.visible');
        cy.wait(1000);
        User.getAddNewBtn().click();
        cy.wait(1000);
        User.getUploadBtn().attachFile("QA.png");
        User.getAdminNameTextBox().type(this.data.adminName)
        User.getAdminMailTextBox().type(this.data.adminMail);
        User.getAdminType().get('.input-select').type(this.data.adminbox);
        User.getselectAdminTpe().click();
        User.getAdminPwdTextBox().type(this.data.adminpwd);
        //User.getAdminSubmitBtn().click();
        User.getCloseAddNewBtn().click();
        // cy.on('window:alert',(str) =>{
        //     expect(str).to.equal('New admin is added')
        //      return true
        //  })

        //This block of code updates an admin 
        cy.scrollTo('bottom');
        User.getAdminUpdateBtn().click();
        User.getUploadBtn().attachFile("QA.png");
        User.getUpdateAdminName().clear();
        User.getUpdateAdminName().type(this.data.adminupdatename);
        User.getAdminSubmitBtn().click();
        User.getCloseUpdateAdminBtn().click();
    })
 
    it('Search for an Agent', function()
    {   //This block of code searches for an agent by using the phone number of a filter
        User.getAgents().click();
        User.getAgentPhoneTextBox().type(this.data.agentnumber);
        cy.contains('+2001225337801');
        User.getAgentPhoneTextBox().clear();
        User.getStatusDropdown().type('Block');
        User.getStatusBlocked().click();
        cy.contains('Blocked');
        User.getStatusDropdown().clear();
        User.getStatusActive().click();
        cy.scrollTo('top');
    })

    it('update and block/unblock Agent', function()
    {    //This block of code updates an agent
       User.getViewAgent().click();
       User.getAgentTextBox().clear();
       User.getAgentTextBox().type(this.data.agentupdatename);
       User.getAgentSubmitBtn().click();
       cy.on('window:alert',(str) =>{
                expect(str).to.equal('Item is Updated')
                 return true
             })
        
         //This block of code blocks an agent 
       User.getAgentBlockUnblockBtn().should('be.visible').click();
       User.getAcceptBlockBtn().click();
       cy.on('window:alert',(str) =>{
           expect(str).to.equal('The selected Item was successfully Blocked')
            return true
        })
        //This block of code unblocks an agent
        cy.scrollTo('top');
        User.getStatusDropdown().clear();
        User.getStatusDropdown().type('Block');
        User.getStatusBlocked().click();
        User.getAgentBlockUnblockBtn().should('be.visible').click();
        User.getAcceptUnblockBtn().click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('The selected item was successfully Unblocked')
             return true
         })

    })

    it('Merchant search, view and block/unblock', function() 
    {// This block of code searches for an agent
        cy.get('[style="max-height: none;"] > :nth-child(4) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
        cy.get('.vx-row > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('Ahmed{enter}');
        cy.contains('Ahmed');
        cy.get('.vx-row > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').clear();
        cy.wait(1000);
        cy.get(':nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('0BG');
        cy.wait(1000);
        cy.get(':nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('{enter}');
        cy.wait(1000);
        cy.contains('0BG');
        cy.wait(1000);
        cy.get(':nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').clear();
        cy.get(':nth-child(3) > .vs-component > .vs-con-input > .vs-inputx').type('2760{enter}');
        cy.contains('27609011201195');
        cy.get(':nth-child(3) > .vs-component > .vs-con-input > .vs-inputx').clear();
        cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').type('act');
        cy.get('[data-text="Active"] > .vs-select--item').click();
        cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').type('act');
        cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').clear();
        //cy.get(':nth-child(5) > .vs-component > .vs-con-input > .vs-inputx').click({multiple:true});
        //cy.get('Input[type=number]').type(this.data.merchantnumber);
        //cy.contains('+2001211251033')
        cy.scrollTo('top');
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').click();
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').type('No');
        cy.get('[data-text="No"] > .vs-select--item').click();
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').clear();
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').click();
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').type('Yes');
        cy.get('[data-text="Yes"] > .vs-select--item').click();
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').clear();

        //This block of code views an admin's details
        //cy.scrollTo('bottomRight');
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').click();
        cy.get(':nth-child(6) > .con-select > .input-select-con > .input-select').type('No');
        cy.get('[data-text="No"] > .vs-select--item').click();
        cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(1)').click();
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--items > .mt-6 > .cursor-pointer > .feather').click();

        //This block of code blocks/unblocks a merchant
        cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(2)').click();
        cy.get('footer > .vs-button-danger').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('The selected Item was successfully Blocked')
             return true
         })
         cy.scrollTo('top');
         cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').clear();
         cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').type('blo');
         cy.get('[data-text="Block"] > .vs-select--item').click();
         cy.wait(1000);
         cy.contains('Blocked');
         cy.wait(1000)
         cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(2)').click(); 
         cy.get('.vs-button-warning').click();
         cy.on('window:alert',(str) =>{
            expect(str).to.equal('The selected item was successfully Unblocked')
             return true
         })
    })

    it('Customer search, view and block', function() 
    {   //This block of code searches for a customer using different available parameters
        cy.get('[style="max-height: none;"] > :nth-child(5) > :nth-child(1) > .vs-sidebar--item > a').click();
        cy.get('.vx-row > :nth-child(1) > .con-select > .input-select-con > .input-select').type('Ala');
        cy.get('[data-text="Heba Aladdin"] > .vs-select--item').click();
        cy.get(':nth-child(2) > .con-select > .input-select-con > .input-select').type('Act');
        cy.get('[data-text="Active"] > .vs-select--item').click();
        cy.get(':nth-child(2) > .con-select > .input-select-con > .input-select').clear();
        cy.get(':nth-child(2) > .con-select > .input-select-con > .input-select').type('Blo');
        cy.get('[data-text="Block"] > .vs-select--item').click();
        cy.get(':nth-child(2) > .con-select > .input-select-con > .input-select').clear();
        cy.get(':nth-child(2) > .con-select > .input-select-con > .input-select').type('Act');
        cy.get('[data-text="Active"] > .vs-select--item').click();
        cy.get(':nth-child(3) > .vs-component > .vs-con-input > .vs-inputx').type('2028');
        cy.contains('+2001020281787');
        cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').type('Yes');
        cy.get('[data-text="Yes"] > .vs-select--item > span').click();
        cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').clear();
        cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').type('No');
        cy.get('[data-text="No"] > .vs-select--item > span').click();
        cy.get(':nth-child(4) > .con-select > .input-select-con > .input-select').clear();

        //This block of code views a customer details
        cy.get('.actions > :nth-child(1)').click();
        cy.contains('008MI6');
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--items > .mt-6 > .cursor-pointer > .feather').click();

        //This block of code blocks and unblocks a customer
        cy.get('.actions > :nth-child(2)').click();
        cy.get('footer > .vs-button-danger').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('The selected Item was successfully Blocked')
             return true
         })  
        cy.get(':nth-child(2) > .con-select > .input-select-con > .input-select').type('Blo');
        cy.get('[data-text="Block"] > .vs-select--item').click();
        cy.get('.actions > :nth-child(2)').click();
        cy.wait(1000);
        cy.get('.vs-button-warning').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('The selected item was successfully Unblocked')
             return true
         })
    })

     it('Add new agent under supplier', function()
    {
        cy.get(':nth-child(6) > .vs-sidebar-group > .group-header > .flex > .truncate').click();
        cy.get(':nth-child(6) > .vs-sidebar-group > .vs-sidebar-group-items > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a > .truncate').click();
        cy.scrollTo('right');
        cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(1)').click();
        cy.get('.p-3').should('be.visible').click();
        cy.get('.ps-container > .p-6 > :nth-child(1) > :nth-child(1) > :nth-child(1) > .vs-con-input > .vs-inputx').type(this.name.newagentname1);
        cy.get('.ps-container > .p-6 > :nth-child(1) > :nth-child(1) > :nth-child(3) > .vs-con-input > .vs-inputx').type(this.name.newagentname2);
        cy.get('.ps-container > .p-6 > :nth-child(1) > :nth-child(1) > :nth-child(5) > .vs-con-input > .vs-inputx').type(this.name.newagentnumber);
        cy.get('[data-v-1a531f45=""][name="country code"] > .input-select-con > .input-select').type('Egy');
        //cy.get('[style="left: 884px; top: 414.781px; width: 358px;"] > :nth-child(1) > .vs-component > .vs-select--item > span').click();
        cy.get("button[name=button]").contains('Egypt (+20)').click();
        cy.get('[data-v-1a531f45=""][name="area"] > .input-select-con > .input-select').type('haram');
        //cy.get('[data-text="Nasr City (مدينة نصر)"] > .vs-select--item > :nth-child(1)').invoke('show');
        cy.get('.scrollx > :nth-child(1) > [data-text="Haram (الهرم)"] > .vs-select--item').click({ multiple: true });
        cy.get('[data-v-1a531f45=""][name="country code"] > .input-select-con > .input-select').type('Egy');
        cy.get("button[name=button]").contains('Egypt (+20)').click();
        cy.get('[data-v-1a531f45=""][name="area"] > .input-select-con > .input-select').click();
        cy.get('.scrollx > :nth-child(1) > [data-text="Haram (الهرم)"] > .vs-select--item').click();
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6').click();
        cy.on('window:alert',(str) =>{
                     expect(str).to.equal('Item is updated')
                           return true
                    })
     })

     it('Update and block agent under supplier', function()
     {  //this block of code updates and agent details
        cy.get('.con-tab-ejemplo > .data-list-container > .vs-con-table > .con-tablex > .vs-con-tbody > .vs-table > tbody > :nth-child(4) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(1)').should('be.visible').click();
        cy.get('.p-6 > :nth-child(1) > :nth-child(1) > .con-select > .input-select-con > .input-select').clear();
        //cy.get("input[type=text]").type('haram');
        cy.get('.scrollx > :nth-child(1) > [data-text="Nasr City (مدينة نصر)"] > .vs-select--item > span').click({ multiple: true });     
        //cy.get('.scrollx > :nth-child(1) > [data-text="Nasr City (مدينة نصر)"] > .vs-select--item > span').click({ multiple: true });
        cy.get(':nth-child(2) > :nth-child(1) > .vs-con-input > .vs-inputx').type('jacnificient@123');
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6').click();  
        cy.on('window:alert',(str) =>{
                expect(str).to.equal('Item is updated')
                    return true
             })

        //This block of code blocks and unblocks and agent
        cy.scrollTo('top');
        cy.get(':nth-child(4) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(3)').click();
        cy.get('footer > .vs-button-danger').should('be.visible').click();
        cy.on('window:alert',(str) =>{
                    expect(str).to.equal('The selected Item was successfully Blocked')
                     return true
                 })  
        cy.get(':nth-child(4) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(3)').should('be.visible').click();
        cy.get('.vs-button-warning').click();
        cy.on('window:alert',(str) =>{
                    expect(str).to.equal('The selected item was successfully Unblocked')
                      return true
              })
     })

    it('Add new supplier, update and block a supplier', function()
    {   //This block of code adds a new supplier
        cy.get('.ps-container > :nth-child(1) > :nth-child(1) > .flex').should('be.visible').click();
        cy.get(':nth-child(6) > .vs-sidebar-group > .group-header > .flex').click();
        cy.get(':nth-child(6) > .vs-sidebar-group > .vs-sidebar-group-items > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a').click();
        cy.get('.p-3').click({multiple:true});
        cy.get('.ps-container > .p-6 > :nth-child(1) > .vs-con-input > .vs-inputx').type(this.data.newsuppliername1);
        cy.get('.ps-container > .p-6 > :nth-child(3) > .vs-con-input > .vs-inputx').type(this.data.newsuppliername2);
        cy.get('.ps-container > .p-6 > :nth-child(5) > .vs-con-input > .vs-inputx').type(this.data.newsupplieremail);
        cy.get('.ps-container > .p-6 > .autocompletex > .input-select-con > .input-select').click();
        cy.get("button[name=button]").contains('super-supplier').click();
        cy.get('.ps-container > .p-6 > :nth-child(9) > .vs-con-input > .vs-inputx').type(this.data.newsupplierpwd);
        cy.get('.ps-container > .p-6 > :nth-child(13) > .vs-con-input > .vs-inputx').type(this.data.newsupplieradd);
        cy.get('.ps-container > .p-6 > :nth-child(15) > .vs-con-input > .vs-inputx').type(this.data.newsuppliermaxtrans);
        cy.get('.ps-container > .p-6 > :nth-child(17) > .vs-con-input > .vs-inputx').type(this.data.newsuppliermaxcollect);
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6').click();
        cy.on('window:alert',(str) =>{
           expect(str).to.equal('New Item was added')
           return true
           })

        //This block of code updates a supplier
        cy.scrollTo('right');
        cy.get(':nth-child(2) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(2)').click();
        cy.get(':nth-child(5) > .vs-con-input > .vs-inputx').clear();
        cy.get(':nth-child(5) > .vs-con-input > .vs-inputx').type('test_supplier@test.com');
        cy.get(':nth-child(9) > .vs-con-input > .vs-inputx').type('Jacnnificient@123');
        cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6').click();
        cy.on('window:alert',(str) =>{
            expect(str).to.equal('Item is updated')
            return true
            })

        //This block of code blocks/unblocks a supplier
        cy.scrollTo('right');
        cy.get(':nth-child(2) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(4)').click();
        cy.get('footer > .vs-button-danger').click();
        cy.on('window:alert',(str) =>{
                    expect(str).to.equal('The selected Item was successfully Blocked')
                     return true
                 })  
        cy.get(':nth-child(2) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(4)').should('be.visible').click();
        cy.get('.vs-button-warning').click();
        cy.on('window:alert',(str) =>{
                    expect(str).to.equal('The selected item was successfully Unblocked')
                      return true
              })
     })

    it('Import merchant sheet under supplier', function()
    {   // This block of code successfully imports a merchant sheet
        cy.get('.ps-container > :nth-child(1) > :nth-child(1) > .flex').should('be.visible').click();
        cy.get(':nth-child(6) > .vs-sidebar-group > .group-header > .flex').click();
        cy.get(':nth-child(6) > .vs-sidebar-group > .vs-sidebar-group-items > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a').click();
        cy.scrollTo('right');
        cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(1)').click();
        cy.get(':nth-child(2) > .vs-tabs--btn > span').should('be.visible').click();
        cy.get("input[name=excel_file]").attachFile("Test.csv");
        // cy.get('.flex > div > .vs-component > .vs-button-text').as('Import Sheet');
        // cy.get('@Import Sheet').click({ multiple: true });
        // const validfile = 'Test.csv';
        // cy.get('.file-input.hidden').attachFile(validfile);
        cy.on('window:alert',(str) =>{
            xpect(str).to.equal('Upload Successful')
            return true
            })

        //This block of code tries to upload Merchant Import Sheet Missing Mandatory Fields
        cy.get("input[name=excel_file]").attachFile("Test1.csv");
        cy.on('window:alert',(str) =>{
            xpect(str).to.equal('Bad format for Phone field with Country code at row index 2')
            return true
            })

        //This block of code tries to import a sheet with wrong details
        cy.get("input[name=excel_file]").attachFile("Test3.csv");
        cy.on('window:alert',(str) =>{
            xpect(str).to.equal('Bad format for Phone field with Country code at row index 2')
            return true
            })
    })

    // it('Add new supplier payment, update and delete payment', function()
    // {

    // })

 })
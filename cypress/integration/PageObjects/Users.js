class Users
{
    getUsers()
    {   //clicks users button on side menu
        return cy.get('.ps-container > :nth-child(1) > :nth-child(1) > .flex')
    }

    getRoles()
    {  //clicks roles and permission button on side menu
        return cy.get('[style="max-height: none;"] > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a > .truncate')
    }

    getViewRoles()
    {  // click view button on admin you want to view
        return cy.get(':nth-child(8) > .whitespace-no-wrap > :nth-child(1) > .actions > .vs-component')
    }

    getpermission()
    {   //clicks on a checkbox to remove one permission from role of admin
        return cy.get(':nth-child(2) > .permission-card > :nth-child(5) > .vs-component > .vs-checkbox--input')
    }

    getSubmitbtn()
    {  // click subit button to update admin role
        return cy.get('.vs-button-text')
    }

    getAdmin()
    {  //clicks admin button on side menu
        return cy.get('[style="max-height: none;"] > :nth-child(2) > :nth-child(1) > .vs-sidebar--item > a')
        cy.get('[style="max-height: none;"] > :nth-child(2) > :nth-child(1) > .vs-sidebar--item > a')
    }

    getAddNewBtn()
    {  //clicks on add new button
        return cy.get('.p-3')
    }

    getUploadBtn()
    {  //clicks on the image upload button
        return cy.get("input[type=file]")
    }
    
    getAdminNameTextBox()
    {  //clicks on name text box 
        return cy.get(':nth-child(4) > .vs-con-input > .vs-inputx')
    }

    getAdminMailTextBox()
    {  //clicks on email text box
        return cy.get(':nth-child(6) > .vs-con-input > .vs-inputx')
    }

    getAdminType()
    {  //Click and tpe in admin type text box 
        return cy.get('.input-select')
    }

    getselectAdminTpe()
    {  //Select admin type for option displayed
        return cy.get('[data-text="super-admin"] > .vs-select--item')
    }

    getAdminPwdTextBox()
    {  //clicks on password text box
        return cy.get(':nth-child(10) > .vs-component > .vs-con-input > .vs-inputx')
    }

    getAdminSubmitBtn()
    {  //clicks on submit button
        return cy.get('.mr-6')
    }

    getCloseAddNewBtn()
    {  //click on to close add admin page
        return cy.get('[style=""] > .vs-sidebar > .vs-sidebar--items > .mt-6 > .cursor-pointer > .feather')
    }

    getAdminUpdateBtn()
    {  //clicks on to display admin details
        return cy.get(':nth-child(15) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(1)')
    }

    getUpdateAdminName()
    {  //clicks on to clear admin name
        return cy.get(':nth-child(4) > .vs-con-input > .vs-inputx')
    }

     getCloseUpdateAdminBtn()
    {  //click on to close add admin page
        return cy.get('[style=""] > .vs-sidebar > .vs-sidebar--items > .mt-6 > .cursor-pointer > .feather')
    }

    getAgents()
    {   //clicks Agents button on side menu
        return cy.get('[style="max-height: none;"] > :nth-child(3) > :nth-child(1) > .vs-sidebar--item > a')
    }

    getAgentPhoneTextBox()
    {   //clicks phone numvber textbox and type phone number
        return cy.get('.vx-row > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx')
    }

    getStatusDropdown()
    {   //clicks phone numvber textbox and type phone number
        return cy.get(':nth-child(3) > .con-select > .input-select-con > .input-select')
    }

    getStatusBlocked()
    {   //select blocked status from drop down
        return cy.get('[data-text="Block"] > .vs-select--item')
    }

    getStatusActive()
    {   //select Active status from drop down
        return cy.get('[data-text="Active"] > .vs-select--item > span')
    }

    
    getViewAgent()
    {   //click to display agents details
        return cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(1)')
    }

    getAgentTextBox()
    {   //click to be able to edit agent name
        return cy.get('.ps-container > .p-6 > :nth-child(1) > :nth-child(1) > :nth-child(3) > .vs-con-input > .vs-inputx')
    }

    getAgentSubmitBtn()
    {  //clicks on submit button
        return cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6')
    }

    getAgentBlockUnblockBtn()
    {  //click to block and unlock agent
        return cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(3)')
    }

    getAcceptBlockBtn()
    {  //clicks on submit button
        return cy.get('footer > .vs-button-danger')
    }

    // getAgentUnblockBtn()
    // {  //clicks on submit button
    //     return cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(3)')
    // }

    getAcceptUnblockBtn()
    {  //clicks on submit button
        return cy.get('.vs-button-warning')
    }

}

export default Users;
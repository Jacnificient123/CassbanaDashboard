class Contents
{
    getContents()
    {   //clicks Contents button on side menu
        return cy.get(':nth-child(2) > :nth-child(1) > .flex > .truncate')
    }

    getHowItWorks()
    {   //clicks How it works button on side menu underneath Contents
        return cy.get(':nth-child(2) > .vs-sidebar-group > .group-header > .flex > .truncate')
    }

    getCustomers()
    {   //clicks Customers button on side menu underneath Contents
        return cy.get(':nth-child(2) > .vs-sidebar-group > .vs-sidebar-group-items > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a > .truncate')
    }

    getContentViewBtn()
    {   //click to view content detaikls
        return cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > :nth-child(2)')
    }

    getContentTitle()
    {   //click to edit content title
        return cy.get(cy.get('.vx-row > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx'))
    }

    getUploadBtn()
    {  //clicks on the image upload button
        return cy.get("input[type=file]")
    }

    getAddNewBtn()
    {  //clicks on add new button
        return cy.get('.p-3')
    }

    getNewTitleEn()
    {  //clicks on content title text box
        return cy.get(':nth-child(5) > .vs-con-input > .vs-inputx')
    }

    getNewTitleAr()
    {  //clicks on content tilte second text box
        return cy.get(':nth-child(7) > .vs-con-input > .vs-inputx')
    }

    getNewContentEn()
    {  //clicks on content description text box
        return cy.get(':nth-child(9) > .quill-editor > .ql-container > .ql-editor')
    }

    getNewContentAr()
    {  //clicks on content description second text box
        return cy.get(':nth-child(10) > .quill-editor > .ql-container > .ql-editor')
    }

    getSubNewContentBtn()
    {  //click on to close add admin page
        return cy.get('[style=""] > .vs-sidebar > .vs-sidebar--footer > .flex > .mr-6 > .vs-button-text')
    }

    getCloseAddNewBtn()
    {  //click on to close add admin page
        return cy.get('.items-center > .cursor-pointer > .feather')
    }
}

export default Contents;
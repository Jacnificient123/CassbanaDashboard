class Logs
{
    getLogs()
    {
        return cy.get(':nth-child(3) > .group-header > .flex')
    }

    getTransactionLogs()
    {
        return cy.get('.vs-sidebar-group-open > .vs-sidebar-group-items > :nth-child(1) > :nth-child(1) > .vs-sidebar--item > a > .truncate')
    }

    getMerchantSearchName()
    {
        return cy.get(':nth-child(4) > .vx-row > .vx-col > .vs-component > .vs-con-input > .vs-inputx')
    }

    getResults()
    {
        return cy.get('.vs-table')
    }

    getViewTrans()
    {
        return cy.get(':nth-child(1) > .whitespace-no-wrap > :nth-child(1) > .actions > .vs-component')
    }

    getViewContent()
    {
        return cy.get(':nth-child(1) > .vx-card__collapsible-content > .vx-card__body > table > :nth-child(2) > :nth-child(2)')
    }
}

export default Logs;
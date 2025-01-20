// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

Cypress.Commands.add('loginForm', (username, password) => {
	// cy.clearCookies()
	// cy.clearLocalStorage()

	cy.get('input[name=username][placeholder="Username"]')
		.clear()
		.type(username)
	cy.get('input[name=password][placeholder="Password"]')
		.clear()
		.type(password)
	cy.get('.orangehrm-login-button').click()
})

Cypress.Commands.add('menuClick', (item, urlItem) => {
	cy.get('a').contains(item).click()
	cy.url().should('include', urlItem)
	cy.get('h6.oxd-topbar-header-breadcrumb-module').should(
		'contain.text',
		item
	)
})

Cypress.Commands.add('employeeSearch', (label, emp) => {
	cy.get('label:contains("Employee ' + label + '")')
		.parent()
		.siblings('div')
		.find('input')
		.clear()
		.type(emp)
})

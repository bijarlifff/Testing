/// <reference types="cypress" />

describe('Search Employee Feature in PIM Module', () => {
	beforeEach(() => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.password)
		})
		cy.get('a').contains('PIM').click()
	})

	it('Search for an employee successfully by name', () => {
		cy.fixture('employee').then(employee => {
			cy.employeeSearch('Name', employee.employeeName)
			cy.get('button[type=submit]').contains('Search').click()
			cy.get('div.orangehrm-container').should(
				'contain.text',
				employee.employeeName
			)
		})
	})

	it('Search for an employee successfully by ID', () => {
		cy.fixture('employee').then(employee => {
			cy.employeeSearch('Id', employee.employeeId)
			cy.get('button[type=submit]').contains('Search').click()
			cy.get('div.orangehrm-container').should(
				'contain.text',
				employee.employeeId
			)
		})
	})

	it('Display no result for non-existent employee by Name and ID', () => {
		cy.fixture('employee').then(employee => {
			cy.employeeSearch('Name', employee.wrongEmployeeName)
			cy.employeeSearch('Id', employee.wrongEmployeeId)
			cy.get('button[type=submit]').contains('Search').click()
		})
		cy.get(
			'div.orangehrm-horizontal-padding.orangehrm-vertical-padding'
		).should('contain.text', 'No Records Found')
	})
})

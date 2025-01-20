/// <reference types='cypress' />

describe('Logout Function', () => {
	beforeEach(() => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.password)
		})
	})

	it('Logout successfully', () => {
		cy.get('.oxd-userdropdown').click()
		cy.get('.oxd-dropdown-menu')
			.should('be.visible')
			.contains('Logout')
			.click()
		cy.url().should('include', '/index.php/auth/login')
		cy.get('.orangehrm-login-slot').should('contain.text', 'Login')
	})
})

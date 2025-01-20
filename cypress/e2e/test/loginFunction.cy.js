/// <reference types="cypress" />

describe('Login Function', () => {
	beforeEach(() => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.url().should('include', '/login')
	})

	it('Success Login', () => {
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.password)
		})
		cy.url().should('include', '/index')
		cy.get('h6').should('contain.text', 'Dashboard')
	})

	it('Failed Login wrong password', () => {
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.wrongPassword)
		})
		cy.get('div[role=alert]')
			.should('be.visible')
			.and('contain.text', 'Invalid credentials')
	})

	it('Failed Login wrong username', () => {
		cy.fixture('login').then(login => {
			cy.loginForm(login.wrongUsername, login.password)
		})
		cy.get('div[role=alert]')
			.should('be.visible')
			.and('contain.text', 'Invalid credentials')
	})

	it('Failed Login wrong username and password', () => {
		cy.fixture('login').then(login => {
			cy.loginForm(login.wrongUsername, login.wrongPassword)
		})
		cy.get('div[role=alert]')
			.should('be.visible')
			.and('contain.text', 'Invalid credentials')
	})

	it('Forgot Password', () => {
		cy.get('p').contains('Forgot your password? ').click()
		cy.url().should('include', '/requestPasswordResetCode')
		cy.fixture('login').then(login => {
			cy.get('input[name=username]').clear().type(login.username)
		})
		cy.get('button').contains(' Reset Password ').click()
		cy.url().should('include', '/sendPasswordReset')
		cy.get('h6').should(
			'contain.text',
			'Reset Password link sent successfully'
		)
	})
})

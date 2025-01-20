/// <reference types="cypress" />

describe('Menu Navigation', () => {
	const menuItems = [
		{ name: 'Admin', url: '/admin' },
		{ name: 'PIM', url: '/pim' },
		{ name: 'Leave', url: '/leave' },
		{ name: 'Time', url: '/time' },
		{ name: 'Recruitment', url: '/recruitment' },
		{ name: 'Performance', url: '/performance' },
		{ name: 'Dashboard', url: '/dashboard' },
		{ name: 'Directory', url: '/directory' },
		{ name: 'Claim', url: '/claim' },
		{ name: 'Buzz', url: '/buzz' },
	]

	beforeEach(() => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.password)
		})
	})

	menuItems.forEach(item => {
		it('Navigate to ' + item.name + ' Section', () => {
			cy.menuClick(item.name, item.url)
		})
	})

	it('Navigate to My Info Section', () => {
		cy.get('a').contains('My Info').click()
		cy.url().should('include', '/pim/viewPersonalDetails')
		cy.get('h6.oxd-topbar-header-breadcrumb-module').should(
			'contain.text',
			'PIM'
		)
	})

	it('Navigate to Maintenance Section', () => {
		cy.get('a').contains('Maintenance').click()
		cy.url().should('include', '/maintenance')
		cy.get('h6').should('contain.text', 'Administrator Access')
		cy.fixture('login').then(login => {
			cy.get('input[name=password]').clear().type(login.password)
		})
		cy.get('button').contains(' Confirm ').click()
		cy.get('h6.oxd-topbar-header-breadcrumb-module').should(
			'contain.text',
			'Maintenance'
		)
	})

	it('Navigate to Maintenance Section with wrong password', () => {
		cy.get('a').contains('Maintenance').click()
		cy.fixture('login').then(login => {
			cy.get('input[name=password]').clear().type(login.wrongPassword)
		})
		cy.get('button').contains(' Confirm ').click()
		cy.url().should('include', '/auth/adminVerify')
		cy.get('div[role=alert]')
			.should('be.visible')
			.and('contain.text', 'Invalid credentials')
	})
})

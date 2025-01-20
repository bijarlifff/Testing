/// <reference types='cypress' />

describe('Form Validation', () => {
	const alertItems = [
		{ input: 'input[name=firstName]', include: 'Required' },
		{ input: 'input[name=lastName]', include: 'Required' },
		{
			input: 'label:contains("Employee Id")',
			include: 'Employee Id already exists',
		},
	]

	const inputItems = [
		{ input: 'input[name=firstName]', ftype: 0, ltype: 6 },
		{ input: 'input[name=middleName]', ftype: 7, ltype: 10 },
		{ input: 'input[name=lastName]', ftype: 11, ltype: 19 },
	]

	beforeEach(() => {
		cy.visit(
			'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
		)
		cy.fixture('login').then(login => {
			cy.loginForm(login.username, login.password)
		})
		cy.get('a').contains('PIM').click()
		cy.get('.orangehrm-header-container button').click()
		cy.url().should('include', '/pim/addEmployee')
	})

	it('Validate required fields', () => {
		cy.fixture('employee').then(employee => {
			cy.employeeSearch('Id', employee.employeeId)
		})
		cy.get('button[type=submit]').click()
		alertItems.forEach(item => {
			cy.get(item.input)
				.parent()
				.siblings('span')
				.should('be.visible')
				.and('include.text', item.include)
		})
	})

	it('Should allow saving when all required fields are valid', () => {
		cy.fixture('employee').then(employee => {
			const fullName =
				employee.newEmployeeName.substring(
					inputItems[0].ftype,
					inputItems[0].ltype
				) +
				' ' +
				employee.newEmployeeName.substring(
					inputItems[2].ftype,
					inputItems[2].ltype
				)

			inputItems.forEach(item => {
				cy.get(item.input)
					.clear()
					.type(
						employee.newEmployeeName.substring(
							item.ftype,
							item.ltype
						)
					)
			})
			cy.employeeSearch('Id', employee.newEmployeeId)
			cy.get('button').contains('Save').click()
			cy.url().should('include', '/pim/viewPersonalDetails/empNumber')
			cy.get('.orangehrm-edit-employee-imagesection').should(
				'contain.text',
				fullName
			)
		})
	})

	it('Delete Employee in PIM Module', () => {
		cy.get('.oxd-topbar-body-nav').contains('Employee List').click()
		cy.fixture('employee').then(employee => {
			cy.employeeSearch('Name', employee.newEmployeeName)
			cy.employeeSearch('Id', employee.newEmployeeId)
			cy.get('button[type=submit]').contains('Search').click()
			cy.get('.oxd-table-body').should(
				'contain.text',
				employee.newEmployeeId
			)
			cy.get('.oxd-icon.bi-trash').click()
			cy.get('.orangehrm-modal-footer').contains(' Yes, Delete ').click()
			cy.get(
				'.orangehrm-horizontal-padding.orangehrm-vertical-padding'
			).should('contain.text', 'No Records Found')
		})
	})
})

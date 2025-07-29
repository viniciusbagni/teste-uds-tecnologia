/// <reference types='Cypress' />

class LoginLocators {

	loginButton = () => { return '[data-test="login-button"]' }
	usernameLogin = () => { return '[data-test="username"]' }
	passwordLogin = () => { return '[data-test="password"]' }
	visibleMessageError = () => { return '[data-test="error"]' }
}

export default LoginLocators
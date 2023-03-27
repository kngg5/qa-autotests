class LoginPage {
    get usernameField () { return $('input[name="userName"]') }
    get passwordField () { return $('input.password') }
    get loginButton () { return $('button[type="submit"]') }

    async open(){
        await browser.url('http://167.114.201.175:5000/login'); 
        await browser.pause(5000);

    }

    async doLogin(username, password){
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
        await expect(browser).toHaveUrlContaining('clients');
    }
}

module.exports = new LoginPage();
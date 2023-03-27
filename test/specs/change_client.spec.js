const LoginPage = require( "../spec/LoginPage");
const assert = require('assert');


describe('Try to change client', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');
    });

    afterEach( async()=>{
        await browser.reloadSession();
    });

    it('should login with valid credentials', async () => {
        let driver = await new Builder().build();
        const surname = await driver.findElement(By.id('surnameField'));
        await surname.sendKeys('Doe');

        const firstn = await driver.findElement(By.id('firstnameField'));
        await firstn.sendKeys('Jason');

        const emailF = await driver.findElement(By.id('emailField'));
        await emailF.sendKeys('doe323@example.com');

        const saveB = await driver.findElement(By.id('saveButton'));
        await saveB.click();
        await driver.quit();
    })

})
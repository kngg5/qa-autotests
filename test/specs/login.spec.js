const LoginPage = require( "../pageobjects/LoginPage");

describe("Login to Navigator", ()=>{
    it("Invalid login", async ()=>{
        await LoginPage.open()
        await LoginPage.doLogin('Admin', 'InvalidPass')
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('login')
    })


    it("Success login", async ()=>{
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('clients');
    })
})
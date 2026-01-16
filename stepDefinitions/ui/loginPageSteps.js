import { Given, When, Then } from '../customFixer';    


When('Login using the {string} user.', async function (userType) {
    if(userType === "existing"){
        await this.loginPage.loginUser(process.env.USER_NAME, process.env.PASSWORD);   
    } 
});

Then('Verify and Validate username as {string}', async function (userType) {
if(userType === "existing"){
        await this.loginPage.validateUserName(process.env.USER_NAME);   
    } 
});


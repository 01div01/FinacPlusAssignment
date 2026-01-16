import { Given, When, Then } from '../customFixer';

Given('Create a user as {string} and job {string} and store the userId', async function (name, job) {
    await this.apiUserAction.init();
    let response = await this.apiUserAction.createUser({ name, job });
    let responseBody = await response.json();
    this.setApiData('responseStatus', response.status());
    this.setApiData('userId', responseBody.id);
    this.setApiData('name', responseBody.name);
    this.setApiData('job', responseBody.job);

});

Then('validate the response http status code as {int}', async function (status) {
    let statusCode = this.getApiData('responseStatus');
    await this.apiUserAction.validateEquals(status, statusCode);
});

Then('validate the created user details as {string} and job {string}', async function (name, job) {
    await this.apiUserAction.validateEquals(name, this.getApiData('name'));
    await this.apiUserAction.validateEquals(job, this.getApiData('job'));
});


When('I update the user with name {string} and job {string}', async function (name, job) {
    await this.apiUserAction.init();
    let response = await this.apiUserAction.updateUser(this.getApiData('userId'), { name, job });
    let responseBody = await response.json();
    this.setApiData('responseStatus', response.status());
    this.setApiData('name', responseBody.name);
    this.setApiData('job', responseBody.job);
});

Then('the user name should be {string}', async function (name) {
    expect(world.responseBody.name).toBe(name);
});

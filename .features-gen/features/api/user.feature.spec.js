// Generated from: features\api\user.feature
import { test } from "../../../stepDefinitions/customFixer.js";

test.describe('ReqRes User API Automation', () => {

  test('Create, fetch and update a user', async ({ Given, When, Then, And }) => { 
    await Given('Create a user as "Divyanshu" and job "QA Architect" and store the userId'); 
    await Then('validate the response http status code as 201'); 
    await And('validate the created user details as "Divyanshu" and job "QA Architect"'); 
    await When('I update the user with name "Divyanshu Updated" and job "QA Lead"'); 
    await Then('validate the response http status code as 200'); 
    await And('validate the created user details as "Divyanshu Updated" and job "QA Lead"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\api\\user.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  $world: [({ customWorld }, use) => use(customWorld), { scope: 'test', box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Create a user as \"Divyanshu\" and job \"QA Architect\" and store the userId","stepMatchArguments":[{"group":{"start":17,"value":"\"Divyanshu\"","children":[{"start":18,"value":"Divyanshu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":37,"value":"\"QA Architect\"","children":[{"start":38,"value":"QA Architect","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then validate the response http status code as 201","stepMatchArguments":[{"group":{"start":42,"value":"201","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"And validate the created user details as \"Divyanshu\" and job \"QA Architect\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Divyanshu\"","children":[{"start":38,"value":"Divyanshu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":57,"value":"\"QA Architect\"","children":[{"start":58,"value":"QA Architect","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I update the user with name \"Divyanshu Updated\" and job \"QA Lead\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Divyanshu Updated\"","children":[{"start":29,"value":"Divyanshu Updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"QA Lead\"","children":[{"start":57,"value":"QA Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then validate the response http status code as 200","stepMatchArguments":[{"group":{"start":42,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And validate the created user details as \"Divyanshu Updated\" and job \"QA Lead\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Divyanshu Updated\"","children":[{"start":38,"value":"Divyanshu Updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"QA Lead\"","children":[{"start":66,"value":"QA Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
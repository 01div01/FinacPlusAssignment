// Generated from: features\ui\searchBook.feature
import { test } from "../../../stepDefinitions/customFixer.js";

test.describe('Book Store Application - Login and Search Book Functionality', () => {

  test('Perform login in Book Store Application and logout', async ({ Given, Then, And }) => { 
    await Given('Navigate to Books Store Application'); 
    await And('User clicks on "Book Store Application" text'); 
    await And('User clicks on "Login" button'); 
    await And('Login using the "existing" user.'); 
    await Then('Verify and Validate username as "existing"'); 
    await And('User clicks on "Log out" button'); 
  });

  test.describe('Search Book in Book Store Application and write the details to a file', () => {

    test('Example #1', async ({ Given, When, Then, And }) => { 
      await Given('Navigate to Books Store Application'); 
      await And('User clicks on "Book Store Application" text'); 
      await And('User clicks on "Login" button'); 
      await And('Login using the "existing" user.'); 
      await When('Search "Learning JavaScript Design Patterns"'); 
      await Then('Validate the search result to contain "Learning JavaScript Design Patterns" book.'); 
      await And('Print Title, Author and Publisher into a file for "Learning JavaScript Design Patterns"'); 
      await And('User clicks on "Log out" button'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\ui\\searchBook.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  $world: [({ customWorld }, use) => use(customWorld), { scope: 'test', box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Navigate to Books Store Application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And User clicks on \"Book Store Application\" text","stepMatchArguments":[{"group":{"start":15,"value":"\"Book Store Application\"","children":[{"start":16,"value":"Book Store Application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And User clicks on \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And Login using the \"existing\" user.","stepMatchArguments":[{"group":{"start":16,"value":"\"existing\"","children":[{"start":17,"value":"existing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Verify and Validate username as \"existing\"","stepMatchArguments":[{"group":{"start":32,"value":"\"existing\"","children":[{"start":33,"value":"existing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And User clicks on \"Log out\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Log out\"","children":[{"start":16,"value":"Log out","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given Navigate to Books Store Application","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"And User clicks on \"Book Store Application\" text","stepMatchArguments":[{"group":{"start":15,"value":"\"Book Store Application\"","children":[{"start":16,"value":"Book Store Application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"And User clicks on \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And Login using the \"existing\" user.","stepMatchArguments":[{"group":{"start":16,"value":"\"existing\"","children":[{"start":17,"value":"existing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Search \"Learning JavaScript Design Patterns\"","stepMatchArguments":[{"group":{"start":7,"value":"\"Learning JavaScript Design Patterns\"","children":[{"start":8,"value":"Learning JavaScript Design Patterns","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Validate the search result to contain \"Learning JavaScript Design Patterns\" book.","stepMatchArguments":[{"group":{"start":38,"value":"\"Learning JavaScript Design Patterns\"","children":[{"start":39,"value":"Learning JavaScript Design Patterns","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And Print Title, Author and Publisher into a file for \"Learning JavaScript Design Patterns\"","stepMatchArguments":[{"group":{"start":50,"value":"\"Learning JavaScript Design Patterns\"","children":[{"start":51,"value":"Learning JavaScript Design Patterns","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And User clicks on \"Log out\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Log out\"","children":[{"start":16,"value":"Log out","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
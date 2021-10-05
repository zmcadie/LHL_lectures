# Unit & Integration Testing

## Outline
1. Types of testing
2. Testing functions with Jest
3. Testing React Components
4. Mocking data

## Types of testing
There are two broad methods when it comes to testing software, manual and automated testing. Manual testing is performed by a person clicking through an application or interacting with an API. Conversely automated testing is performed by software executing test scripts written in advance.

Manual testing is *expensive* and *error prone* due to its high time requirement and reliance on humans to not make typos or skip steps in the testing script. Despite this manual testing also has the benefit of human intuition and allows us to identify errors that we may not have thought to write a test script for or are hard for a computer to identify, eg. design defects, poorly-written code, etc.

Automated testing removes the drawbacks of manual testing and can be much more robust and reliable, but the quality of your automated testing is directly dependant on how well your test scripts are written. The biggest benefit of automating our testing is consistency, automation ensures that even when we change code our application's function does not change.

We will briefly discuss 4 types of testing:
* Static testing
* Unit testing
* Integration testing
* End-to-end testing

### Static testing
Static testing is used to check for errors in our application *without* executing our code. This can include checking for code syntax and style errors, missing business requirements, and design defects. Static testing is often done through a mix of manual and automated testing.

### Unit testing
Unit testing usually involves testing individual functions or methods in our application, ensuring output is consistent and predictable.

Cheap to automate and very quick to run.

### Integration testing
Integration testing verifies that different modules or services used by our application work when used together. eg. testing that our server can fetch data from the database. Integration testing only verifies that an integration *works*, not whether it returns the *correct* response.

Integration testing is often used synonymously with ***Functional testing*** which verifies the business requirements of an application. Functional testing verifies the output of an action without checking the intermediate states.

An integration test may simply verify that you can query the database while a functional test would expect to get a specific value from the database as defined by the product requirements.

More expensive to run since it requires multiple parts of an application.

### End-to-end testing

End-to-end testing replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc.

Very expensive to run and hard to maintain. Typically you should have a few key end-to-end tests and rely more heavily on other tests to identify breaking changes.

## Useful links
- https://jestjs.io/docs/en/expect
- https://testing-library.com/docs/dom-testing-library/cheatsheet/
- https://testing-library.com/docs/react-testing-library/cheatsheet
- https://github.com/testing-library/jest-dom
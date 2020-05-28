declare namespace Cypress {
    interface Chainable<Subject = any> {
        typeAndPressEnter(text: string): Chainable<Element>;
    }
}
Cypress.Commands.add("typeAndPressEnter", { prevSubject: "element" }, (subject, text: string) => {
    return cy.get(subject).type(`${text}{enter}`);
})

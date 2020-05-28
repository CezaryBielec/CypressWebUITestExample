/// <reference path="../../support/index.d.ts" />

const googleSearchFieldSelector = "[name='q']";
const resultStatsSelector = "[id='result-stats']";

const searchText = "sweet kittens";

describe("example google test", () => {
    it("searchesFor", () => {
        //Arrange
        cy.visit('/');

        //Act
        cy.get(googleSearchFieldSelector).typeAndPressEnter(searchText);

        //Assert
        cy.get(resultStatsSelector);
    })
})
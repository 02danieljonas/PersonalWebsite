import KNumerals from "./KNumerals";

describe("KNumeral testing", () => {
    it("KNumeral is visible, has proper sizing and", () => {
        cy.mount(<KNumerals height={400} />);
        cy.get("img")
            .should("be.visible")
            .should("have.css", "height", "400px")
            .should("have.css", "width", "250px")
            .should("have.attr", "src", "/static/k_numerals/0.svg");
    });

    it("KNumeral should be 12", () => {
        cy.mount(<KNumerals value={12} height={100} />);
        cy.get("img")
            .should("be.visible")
            .should("have.css", "height", "100px")
            .should("have.css", "width", "62.5px")
            .should("have.attr", "src", "/static/k_numerals/12.svg");
    });
});

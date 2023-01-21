import KNumerals, { toBase20 } from "./KNumerals";

describe("Testing toBase20 function", () => {
    const checkArrayEquality = (arr1: number[], arr2: number[]) => {
        it("Are the two variables arrays", () => {
            expect(Array.isArray(arr1)).to.eq(true);
            expect(Array.isArray(arr2)).to.eq(true);
        });

        it("Are the two arrays the same length", () => {
            expect(arr1.length).to.eq(arr2.length);
        });

        it("Do each of the values match", () => {
            expect(JSON.stringify(arr1)).to.eq(JSON.stringify(arr2));
        });
    };
    context("Testing checkArrayEquality() on duplicate arrays", () => {
        checkArrayEquality([0, 2], [0, 2]);
        checkArrayEquality([0], [0]);
        checkArrayEquality(
            [0, 3, 4, 6, 8, 1, 3, 5, 2, 6, 8, 1, 12, 12345667788990],
            [0, 3, 4, 6, 8, 1, 3, 5, 2, 6, 8, 1, 12, 12345667788990]
        );
        checkArrayEquality([], []);
        checkArrayEquality(
            [
                12, 543, 75, 123, 654, 56, 32, 45, 657, 34, 2326, 234, 347,
                2413, 5
            ],
            [
                12, 543, 75, 123, 654, 56, 32, 45, 657, 34, 2326, 234, 347,
                2413, 5
            ]
        );
    });

    context("Expecting toBase20(0) to equal []", () => {
        checkArrayEquality(toBase20(0), []);
    });

    context("Expecting toBase20(20) to equal [1, 0]", () => {
        checkArrayEquality(toBase20(20), [1, 0]);
    });

    context("Expecting toBase20(100) to equal [5, 0]", () => {
        checkArrayEquality(toBase20(100), [5, 0]);
    });

    context("Expecting toBase20(23290) to equal [2, 18, 4, 10]", () => {
        checkArrayEquality(toBase20(23290), [2, 18, 4, 10]);
    });

    context(
        "Expecting toBase20(123019223290) to equal [4, 16, 2, 3, 10, 2, 18, 4, 10]",
        () => {
            checkArrayEquality(
                toBase20(123019223290),
                [4, 16, 2, 3, 10, 2, 18, 4, 10]
            );
        }
    );
});
describe("KNumeral testing", () => {
    it("KNumeral should be 12 and have proper css values", () => {
        cy.mount(<KNumerals value={12} height={100} />);
        cy.get("img")
            .should("be.visible")
            .should("have.css", "height", "100px")
            .should("have.css", "width", "62.5px")
            .should("have.attr", "src", "/static/k_numerals/12.svg");
    });

    it("KNumeral should be 0 and have proper css values", () => {
        cy.mount(<KNumerals height={400} />);
        cy.get("img")
            .should("be.visible")
            .should("have.css", "height", "400px")
            .should("have.css", "width", "250px")
            .should("have.attr", "src", "/static/k_numerals/0.svg");
    });
    it("KNumeral Container should be properly displayed", () => {
        cy.mount(<KNumerals value={9876543210} height={50} />);
        cy.get("#KNumerals-container")
            .should("have.css", "display", "flex")
            .should("have.css", "flex-wrap", "nowrap")
            .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
    });
});

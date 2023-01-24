import ApplicationContainer from "./ApplicationContainer";

describe("Hello", () => {
    cy.mount(
        <ApplicationContainer
            appUrl=""
            onClose={() => null}
            appIcon=""
            appName=""
        />
    );
});

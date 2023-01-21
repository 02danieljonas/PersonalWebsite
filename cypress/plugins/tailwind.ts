before(() => {
    // replace this path with the css/scss path of where tailwind is imported
    cy.exec("pnpx tailwindcss -i ./src/styles/globals.scss -m").then(
        ({ stdout }) => {
            if (!document.head.querySelector("#tailwind-style")) {
                const link = document.createElement("style");
                link.id = "tailwind-style";
                link.innerHTML = stdout;

                document.head.appendChild(link);
            }
        }
    );
});

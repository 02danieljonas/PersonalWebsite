/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack"
        },
        specPattern: "src/**/*.cy.{js,jsx,ts,tsx}"
    },

    e2e: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});

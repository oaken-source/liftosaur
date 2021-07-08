import { g } from "../support/utils";

describe("Custom Exercises", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.clearIndexedDb();
    cy.viewport("iphone-6");
  });

  it("CRUD custom exercises", () => {
    cy.visit("http://local.liftosaur.com:8080");

    // Creating the program

    cy.contains("Let's choose a program!").click();
    cy.contains("Create").click();

    g("modal-create-program-input").clear().type("My Program");
    g("modal-create-program-submit").click();

    g("edit-day").click();
    cy.contains("Create New Exercise").click();

    g("select-exercise").click();
    g("custom-exercise-create").click();
    g("custom-exercise-name-input").clear().type("My Exercise");
    g("custom-exercise-equipment-select").select("Band");
    g("custom-exercise-create").click();

    g("custom-exercise-edit-my-exercise").click();
    g("custom-exercise-name-input").clear().type("My Exercise 2");
    g("custom-exercise-equipment-select").select("Cable");
    g("custom-exercise-create").click();

    g("menu-item-my-exercise-2").click();
    cy.contains("Save").click();
    cy.contains("Back").click();
    cy.contains("Back").click();
    g("menu-item-my-program").click();

    cy.contains("Start New Workout").click();
    cy.contains("Got it").click();
    g("set-nonstarted").click();
    cy.contains("Finish the workout").click();
    cy.contains("Continue").click();

    cy.contains("Edit Program").click();
    g("edit-exercise").click();
    g("select-exercise").click();
    g("custom-exercise-delete-my-exercise-2").click();

    g("custom-exercise-create").click();
    g("custom-exercise-name-input").clear().type("Blah One");
    g("custom-exercise-equipment-select").select("Barbell");
    g("custom-exercise-create").click();

    g("menu-item-blah-one").click();
    cy.contains("Save").click();
    cy.contains("Back").click();

    g("history-entry-exercise-name").eq(0).should("have.text", "Blah One");
    g("history-entry-exercise-name").eq(1).should("have.text", "My Exercise 2");

    cy.contains("Edit Program").click();
    g("edit-exercise").click();
    g("select-exercise").click();
    g("custom-exercise-create").click();

    g("custom-exercise-name-input").clear().type("My Exercise 2");
    g("custom-exercise-equipment-select").select("Barbell");
    g("custom-exercise-create").click();

    g("custom-exercise-edit-my-exercise-2").click();
    g("custom-exercise-name-input").clear().type("My Exercise 3");
    g("custom-exercise-equipment-select").select("Band");
    g("multiselect-target_muscles").clear().type("Adductor Magnus");
    g("multiselect-target_muscles").clear().type("Deltoid Posterior");
    g("multiselect-synergist_muscles").clear().type("Obliques");
    g("custom-exercise-create").click();

    g("menu-item-my-exercise-3").click();
    cy.contains("Save").click();
    cy.contains("Back").click();

    g("history-entry-exercise-name").eq(0).should("have.text", "My Exercise 3");
    g("history-entry-exercise-name").eq(1).should("have.text", "My Exercise 3");

    g("footer-muscles").click();
    g("target-muscles-list").should("contain.text", "Hamstrings");
    g("target-muscles-list").should("contain.text", "Shoulders");
    g("synergist-muscles-list").should("contain.text", "Abs");
  });
});

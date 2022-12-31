/// reference types="cypress" />
describe("JSON Object", () => {
  it("JSON Object", () => {
    cy.visit("https://google.com");
    cy.get('#L2AGLb > .QS5gu').click()
    const simpleObject = {
      key1: "Value1",
      key2: "Value2",
      key3: "Value3",
    };
    console.log(simpleObject.key1);
    console.log(simpleObject["key2"]);
    const simleArrayValue=["one","two","three"]
    console.log(simleArrayValue[0])
    const arrayObje=[{ key1: "Value1",key2: "Value2"}]
    console.log(arrayObje[2].key2)
    const dataType={"string":"metin","number":5}
    const body={
      "Student":[
      { "FirstName":"Tery","LastName":"Wilson"},
         { "FirstName":"Luis","LastName":"Fernando"},
         { "FirstName":"Jeny","LastName":"Simson"}
      ]
    }
    console.log(body.Student[2].LastName)
  });

});

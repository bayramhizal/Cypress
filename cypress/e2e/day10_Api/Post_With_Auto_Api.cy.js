/// reference types="cypress" />
describe("Post With Auto", () => {
  it.only("Test 01", () => {
    cy.request({
      url: "https://restful-booker.herokuapp.com/booking",
      method: "post",
      auth: {
        "username": "admin",
        "password": "password123"
      },
      body:{
    "firstname" : "Byrm",
    "lastname" : "Hizal",
    "totalprice" : 121,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2022-01-01",
        "checkout" : "2022-01-03"
    },
    "additionalneeds" : "Breakfast and Spa"
},

    "token": "abc123"


    }).then((response)=>{
        console.log(response)
        expect(response.status).to.eq(200)
        expect(response.body.booking.additionalneeds).to.eq("Breakfast and Spa")


    })
  })
})

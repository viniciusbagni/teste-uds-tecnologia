Cypress.Commands.add('postBooking', (firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseApiUrl') + 'booking',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            "firstname": firstname,
            "lastname": lastname,
            "totalprice": totalprice,
            "depositpaid": depositpaid,
            "bookingdates": {
                "checkin": checkin,
                "checkout": checkout
            },
            "additionalneeds": additionalneeds
        },
        failOnStatusCode: false,
    })
})

Cypress.Commands.add('getBooking', (firstname) => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseApiUrl') + 'booking',
        headers: {
            'Content-Type': 'application/json',
        },
        qs: {
            firstname: firstname
        },
        failOnStatusCode: false,
    })
})
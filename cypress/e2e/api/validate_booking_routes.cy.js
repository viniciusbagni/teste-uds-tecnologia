/// <reference types="cypress" />

import { generateFirstName, generateLastName, generateId, generateDescription } from '../../fixtures/faker'
import { formatDateToISO } from '../../fixtures/data'

describe('Validation of routes Booking', () => {

    context('POST methods for endpoint Booking', () => {
        it('returning status success for creating booking', () => {
            var dateNow = new Date()
            const nextDate = formatDateToISO(new Date(dateNow.setDate(dateNow.getDate() + 1)))
            dateNow = formatDateToISO(new Date())
            var firstname = generateFirstName()
            var lastname = generateLastName()
            var totalprice = generateId()
            var depositpaid = true
            var checkin = dateNow
            var checkout = nextDate
            var additionalneeds = generateDescription()
            cy.postBooking(firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq('OK')
                expect(response.body.bookingid).to.exist
                expect(response.body.booking.additionalneeds).to.eq(additionalneeds)
                expect(response.body.booking.firstname).to.eq(firstname)
                expect(response.body.booking.lastname).to.eq(lastname)
                expect(response.body.booking.totalprice).to.eq(totalprice)
                expect(response.body.booking.depositpaid).to.eq(depositpaid)
                expect(response.body.booking.bookingdates.checkin).to.eq(checkin)
                expect(response.body.booking.bookingdates.checkout).to.eq(checkout)
            })
        })
        it('returning error status for creating booking with invalid payload', () => {
            var dateNow = new Date()
            const nextDate = formatDateToISO(new Date(dateNow.setDate(dateNow.getDate() + 1)))
            dateNow = formatDateToISO(new Date())
            var firstname = generateId()
            var lastname = generateLastName()
            var totalprice = generateId()
            var depositpaid = true
            var checkin = dateNow
            var checkout = nextDate
            var additionalneeds = generateDescription()
            cy.postBooking(firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds).then((response) => {
                expect(response.status).to.eq(500)
                expect(response.statusText).to.eq('Internal Server Error')
            })
        })
        it('returning error status for creating booking with blank body', () => {
            cy.postBooking().then((response) => {
                expect(response.status).to.eq(500)
                expect(response.statusText).to.eq('Internal Server Error')
            })
        })
    })

    context('GET methods for endpoint Booking', () => {
        it('returning status success for getting name in the database', () => {
            var dateNow = new Date()
            const nextDate = formatDateToISO(new Date(dateNow.setDate(dateNow.getDate() + 1)))
            dateNow = formatDateToISO(new Date())
            var firstname = generateFirstName()
            var lastname = generateLastName()
            var totalprice = generateId()
            var depositpaid = true
            var checkin = dateNow
            var checkout = nextDate
            var additionalneeds = generateDescription()
            cy.postBooking(firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds).then((response) => {
                expect(response.status).to.eq(200)
                var bookingId = response.body.bookingid
                cy.getBooking(firstname).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.statusText).to.eq('OK')
                    expect(response.body[0].bookingid).eq(bookingId)
                })
            })
        })
        it('returning error status for getting non-existent name', () => {
            var firstname = generateFirstName()
            cy.getBooking(firstname).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.statusText).to.eq('OK')
                expect(response.body).to.be.empty
                expect(response.body.length).to.eq(0)
            })
        })
    })
})
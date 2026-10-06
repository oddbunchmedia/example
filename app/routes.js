//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/traveller-name', (request, response) => {

    let destination = request.session.data.chooseDestination;

    if ('Mars' == destination) {
        response.redirect('/coming-soon');
    } else {
        response.redirect('/traveller-name');
    }

})

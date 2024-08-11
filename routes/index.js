const express=require('express');
const router=express.Router();
const controller=require('../controllers');

router.get('/', controller.getHomePage);

router.get('/flightInfo', controller.getFlights);
router.post('/flights', controller.addFlight);
router.put('/flights/:flight_number', controller.modifyFlight);
router.delete('/flights/:flight_number', controller.deleteFlight);
router.get('/flights/:flight_number',controller.searchFlightsByNumber);
router.get('/flights/byDate/:flight_schedule_date', controller.searchFlightsByDate);
router.get('/flights', controller.searchFlightsByPlace);

module.exports=router;
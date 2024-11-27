const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.getIndexView);
router.get('/appointments', formController.getAppointmentsView);
router.post('/data', formController.postData);

module.exports = router;
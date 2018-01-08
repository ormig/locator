var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main');
var locationsController = require('../controllers/locations');
var otherController = require('../controllers/other');


router.get('/', locationsController.homeList);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

router.get('/about', otherController.about);

module.exports = router;

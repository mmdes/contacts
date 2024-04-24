const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// home routes
route.get('/',homeController.homePage);
route.post('/', homeController.handlePost);

// contact routes
route.get('/contact', contactController.contactHomePage);

module.exports = route;
const express = require('express');
const {getColor} =require('../controller/color')
const route =express.Router();

route.get('/apicolor',getColor);
module.exports = route;

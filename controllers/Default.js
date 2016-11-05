'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addMember = function addMember (req, res, next) {
  Default.addMember(req.swagger.params, res, next);
};

module.exports.addResult = function addResult (req, res, next) {
  Default.addResult(req.swagger.params, res, next);
};

module.exports.getResults = function getResults (req, res, next) {
  Default.getResults(req.swagger.params, res, next);
};

module.exports.getSurveyQuestions = function getSurveyQuestions (req, res, next) {
  Default.getSurveyQuestions(req.swagger.params, res, next);
};

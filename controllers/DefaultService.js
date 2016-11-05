'use strict';

exports.addMember = function(args, res, next) {
  /**
   * parameters expected in the args:
  * member (Member)
  **/
    var examples = {};
  examples['application/json'] = {
  "MemberId" : "aeiou",
  "NonPhiId" : 123,
  "CreatedBy" : "aeiou",
  "CreateDateTime" : "2000-01-23T04:56:07.000+00:00"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.addResult = function(args, res, next) {
  /**
   * parameters expected in the args:
  * surveyResult (SurveyResult)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getResults = function(args, res, next) {
  /**
   * parameters expected in the args:
  * member (Member)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "MemberId" : "aeiou",
  "Survey" : {
    "LastUpdateDateTime" : "2000-01-23T04:56:07.000+00:00",
    "SurveyName" : "aeiou",
    "SurveyVersion" : "aeiou",
    "CreateDateTime" : "2000-01-23T04:56:07.000+00:00",
    "Questions" : [ {
      "ID" : "aeiou",
      "Verbiage" : "aeiou"
    } ]
  },
  "Answers" : [ {
    "AnswerCode" : "aeiou",
    "AnswerText" : "aeiou",
    "ID" : "aeiou"
  } ],
  "CreatedBy" : "aeiou",
  "SurveyEnteredDate" : 123,
  "CreateDateTime" : "2000-01-23T04:56:07.000+00:00",
  "PAMLevel" : 123,
  "PAMScore" : 1.3579000000000001069366817318950779736042022705078125
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getSurveyQuestions = function(args, res, next) {
  /**
   * parameters expected in the args:
  * surveyName (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "LastUpdateDateTime" : "2000-01-23T04:56:07.000+00:00",
  "SurveyName" : "aeiou",
  "SurveyVersion" : "aeiou",
  "CreateDateTime" : "2000-01-23T04:56:07.000+00:00",
  "Questions" : [ {
    "ID" : "aeiou",
    "Verbiage" : "aeiou"
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


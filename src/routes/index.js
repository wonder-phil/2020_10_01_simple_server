const express = require('express');
//const db = require('../db');
const router = express.Router();

function no_cors_setup(res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);
  //console.log("no-cors done");
}


/*
 *
 * curl http://localhost:3001/hello?date=2021-09-22
*/
router.get('/hello', async (req,res, next) => {
  no_cors_setup(res);
  try {
	
	console.log("date: " + req.query.date);
	
      res.json({ "test" : "Good Day!" } );
  } catch(e) {
    console.log(e);
    console.log('Error in query');
    console.log('--------------');
    res.sendStatus(500);
  }
});


module.exports = router;

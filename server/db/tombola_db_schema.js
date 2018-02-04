/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/tombola_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_tombola_db_schema = [];
const db_tombola_db = [];

/**
 * SCHEMA DB tombola_db
 */



 /**
  * extraction
  */
db_tombola_db_schema.extraction = new mongoose.Schema({
	extractionDate: {
		type: 'Date', 
		required : true
	},
	fifth: {
		type: 'Number'
	},
	first: {
		type: 'Number', 
		required : true
	},
	fourth: {
		type: 'Number'
	},
	second: {
		type: 'Number'
	},
	third: {
		type: 'Number'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	extractions: {
		type: Schema.ObjectId,
		ref : "route"
	},
	*/
});


 /**
  * route
  */
db_tombola_db_schema.route = new mongoose.Schema({
	name: {
		type: 'String', 
		required : true,
		unique : true, 
	},
	//RELATIONS
	extractions: {
		type: Schema.ObjectId,
		ref : "extraction"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



/**
 * SCHEMA DB User
 */

db_tombola_db_schema.User = new mongoose.Schema({
    username: {
        type: 'String',
        required: true
    },
    password: {
        type: 'String',
        required: true
    },
    mail: {
        type: 'String'
    },
    name: {
        type: 'String'
    },
    surname: {
        type: 'String'
    },
    roles: [{
        type: 'String'
    }]
});


// Import schema customization
require('./tombola_db_customSchema.js');
var tombola_db_model = require('./tombola_db_crud.js');

// Declare mongoose model

db_tombola_db.extraction = tombola_db_model.connection.model('extraction', db_tombola_db_schema.extraction );
db_tombola_db.route = tombola_db_model.connection.model('route', db_tombola_db_schema.route );

db_tombola_db.User = tombola_db_model.connection.model('User', db_tombola_db_schema.User);

module.exports = db_tombola_db;

// Create ADMIN user if does not exist
createUser.createUser();

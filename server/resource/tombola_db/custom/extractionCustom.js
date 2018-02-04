
const app = require('../../../app.js');
const db_tombola_db = require('../../../db/tombola_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB extraction
 * 
	{
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
		
		extractions: {
			type: Schema.ObjectId,
			ref : "route"
		},
		
	}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



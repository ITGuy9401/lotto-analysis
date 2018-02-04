/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  FOR CUSTOMIZE extractionBaseService PLEASE EDIT ../extraction.service.ts
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */
 
//DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../../security/authentication.service';

// MODEL
import { Extraction } from '../../domain/tombola_db/extraction';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../extraction.service.ts
 */
 
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
 */
@Injectable()
export class ExtractionBaseService {

    contextUrl:string = config.host + "/extractions";
    constructor(
        protected http: Http,
        protected authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	
	/**
     * Create new item
     */
     create(item: Extraction): Observable<Extraction> {
        return this.http
            .post(this.contextUrl, item)
            .map(response => response.json());
    }
	
	/**
     * Remove one item by id
     */
     remove(id: string): Observable<void> {
        return this.http
            .delete(this.contextUrl + "/" + id)
            .map(response => null);
    }
	
    /**
     * Get one item by id
     */
	
	get(id: string): Observable<Extraction> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Extraction)
    }

	
    /**
     * Get list of items
     */
	
	list(): Observable<Extraction[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Extraction[])
    }
	
    /**
     * Update item
     */
	update(item: Extraction): Observable<Extraction> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }



}

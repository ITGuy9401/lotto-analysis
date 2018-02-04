// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { ExtractionBaseService } from "./base/extraction.base.service";
import { Extraction } from '../domain/tombola_db/extraction';

/**
 * YOU CAN OVERRIDE HERE extractionBaseService
 */

@Injectable()
export class ExtractionService extends ExtractionBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
}
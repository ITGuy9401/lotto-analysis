// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { ExtractionService } from '../../services/extraction.service';
import { RouteService } from '../../services/route.service';

// Import Models
import { Extraction } from '../../domain/tombola_db/extraction';

import { Route } from '../../domain/tombola_db/route';

// START - USED SERVICES
/*
 *	extractionService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	routeService.findByextractions
 *		PARAMS: 
 *					Objectid key - Id della risorsa extractions da cercare
 *		
 *
 *	extractionService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	extractionService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * extractionService  
 * routeService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for extractionEdit
 */
@Component({
    selector: 'extraction-edit',
    templateUrl : './extraction-edit.component.html',
    styleUrls: ['./extraction-edit.component.css']
})
export class ExtractionEditComponent implements OnInit {

    item: Extraction;
    listExtractions: Extraction[];
	externalRoute: Route[];
    model: Extraction;
    
    constructor(
        private extractionService: ExtractionService,
        private routeService: RouteService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Extraction();
	   this.externalRoute = [];
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.extractionService.get(id).subscribe(item => this.item = item);
                }
                this.routeService.findByExtractions(id).subscribe(list => this.externalRoute = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Extraction): void{
        if (formValid) {
            if(item._id){
                this.extractionService.update(item).subscribe(data => this.goBack());
            } else {
                this.extractionService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    

}
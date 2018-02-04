// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { RouteService } from '../../services/route.service';
import { ExtractionService } from '../../services/extraction.service';

// Import Models
import { Route } from '../../domain/tombola_db/route';
import { Extraction } from '../../domain/tombola_db/extraction';
// START - USED SERVICES
/*
 *	routeService.create
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	routeService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	extractionService.list
 *		PARAMS: 
 *		
 *
 *	routeService.update
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
 * Edit component for routeEdit
 */
@Component({
    selector: 'route-edit',
    templateUrl : './route-edit.component.html',
    styleUrls: ['./route-edit.component.css']
})
export class RouteEditComponent implements OnInit {

    item: Route;
    listExtractions: Extraction[];
    model: Route;
    
    constructor(
        private routeService: RouteService,
        private extractionService: ExtractionService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Route();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.routeService.get(id).subscribe(item => this.item = item);
                }
                this.extractionService.list().subscribe(list => this.listExtractions = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Route): void{
        if (formValid) {
            if(item._id){
                this.routeService.update(item).subscribe(data => this.goBack());
            } else {
                this.routeService.create(item).subscribe(data => this.goBack());
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
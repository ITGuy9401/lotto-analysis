// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { RouteService } from '../../services/route.service';

// Import Models
import { Route } from '../../domain/tombola_db/route';
import { Extraction } from '../../domain/tombola_db/extraction';
// START - USED SERVICES
/*
 *	routeService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	routeService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * routeService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "route-list",
    templateUrl: './route-list.component.html',
    styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {
    
    // Attributes
    list: Route[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private routeService: RouteService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.routeService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.routeService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}
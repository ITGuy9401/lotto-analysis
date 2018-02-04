// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { ExtractionService } from '../../services/extraction.service';

// Import Models
import { Extraction } from '../../domain/tombola_db/extraction';

import { Route } from '../../domain/tombola_db/route';

// START - USED SERVICES
/*
 *	extractionService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	extractionService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * extractionService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "extraction-list",
    templateUrl: './extraction-list.component.html',
    styleUrls: ['./extraction-list.component.css']
})
export class ExtractionListComponent implements OnInit {
    
    // Attributes
    list: Extraction[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private extractionService: ExtractionService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.extractionService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.extractionService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}
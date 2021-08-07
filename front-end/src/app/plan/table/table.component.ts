import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ReservationDialogComponent } from "./reservation-dialog/reservation-dialog.component";

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

	@Input() table: any;

	isTaken: boolean = false;

	constructor(
		private matDialog: MatDialog
	) {
	}

	ngOnInit() {
		this.isTaken = this.table.isTaken;
	}

	onReservationClick() {
		this.matDialog.open(ReservationDialogComponent, {
			data: this.table
		});
	}

}
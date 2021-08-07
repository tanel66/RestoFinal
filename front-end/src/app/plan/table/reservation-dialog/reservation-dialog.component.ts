import { Component, Inject, OnInit } from '@angular/core';
import { TableService } from "../table.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl } from "@angular/forms";

@Component({
	selector: 'app-reservation-dialog',
	templateUrl: './reservation-dialog.component.html',
	styleUrls: ['./reservation-dialog.component.scss']
})
export class ReservationDialogComponent implements OnInit {

	table: any;
	nameControl: FormControl;
	dateControl: FormControl;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private tableService: TableService
	) {
		this.nameControl = new FormControl("");
		this.dateControl = new FormControl("");
	}

	ngOnInit(): void {
		this.nameControl.valueChanges.subscribe(() => {
			console.log(this.nameControl.value);
		})
	}

	onReserveClick() {
		this.tableService.patchReserveTable(this.data._id, this.nameControl.value, this.dateControl.value).subscribe();

		location.reload();
	}

	onUnReserveClick() {
		this.tableService.patchUnReserveTable(this.data._id).subscribe();

		location.reload();
	}

}
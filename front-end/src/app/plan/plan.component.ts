import { Component, OnInit } from '@angular/core';
import { TableService } from "./table/table.service";

@Component({
	selector: 'app-plan',
	templateUrl: './plan.component.html',
	styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

	tables: any[] = [];
	cityTablesRowOne: any[] = [];
	cityTablesRowTwo: any[] = [];
	cityTablesRowThree: any[] = [];
	beachTablesRowOne: any[] = [];

	constructor(
		private tableService: TableService
	) {
	}

	ngOnInit() {
		this.tableService.getTables().subscribe(tables => {
			this.tables = tables.data;

			this.filterTables(this.tables);
		});

	}

	private filterTables(tables: any[]) {
		tables.forEach(table => {
			if (table.type === "CITY") {
				if (table.row === 1) {
					this.cityTablesRowOne.push(table);
				}

				if (table.row === 2) {
					this.cityTablesRowTwo.push(table);
				}

				if (table.row === 3) {
					this.cityTablesRowThree.push(table);
				}
			}

			if (table.type === "BEACH") {
				if (table.row === 1) {
					this.beachTablesRowOne.push(table);
				}
			}
		})
	}

}
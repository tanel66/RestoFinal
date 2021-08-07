const Table = require('../src/models/table/tablesModel');

class Seeder {
	constructor() {
		this.tables = [
			{
				isTaken: false,
				type: "CITY",
				row: 1,
				chairAmount: 6,
				name: "",
				date: "",
				position: 1
			},
			{
				isTaken: false,
				type: "CITY",
				row: 1,
				chairAmount: 3,
				name: "",
				date: "",
				position: 2
			},
			{
				isTaken: false,
				type: "CITY",
				row: 1,
				chairAmount: 4,
				name: "",
				date: "",
				position: 3
			},
			{
				isTaken: false,
				type: "CITY",
				row: 1,
				chairAmount: 2,
				name: "",
				date: "",
				position: 4
			},
			{
				isTaken: false,
				type: "CITY",
				row: 2,
				chairAmount: 6,
				name: "",
				date: "",
				position: 1
			},
			{
				isTaken: false,
				type: "CITY",
				row: 2,
				chairAmount: 8,
				name: "",
				date: "",
				position: 2
			},
			{
				isTaken: false,
				type: "CITY",
				row: 2,
				chairAmount: 7,
				name: "",
				date: "",
				position: 3
			},
			{
				isTaken: false,
				type: "CITY",
				row: 3,
				chairAmount: 5,
				name: "",
				date: "",
				position: 1
			},
			{
				isTaken: false,
				type: "CITY",
				row: 3,
				chairAmount: 3,
				name: "",
				date: "",
				position: 2
			},
			{
				isTaken: false,
				type: "CITY",
				row: 3,
				chairAmount: 6,
				name: "",
				date: "",
				position: 3
			},
			{
				isTaken: false,
				type: "CITY",
				row: 3,
				chairAmount: 2,
				name: "",
				date: "",
				position: 4
			},
			{
				isTaken: false,
				type: "CITY",
				row: 3,
				chairAmount: 5,
				name: "",
				date: "",
				position: 5
			},
			{
				isTaken: false,
				type: "BEACH",
				row: 1,
				chairAmount: 3,
				name: "",
				date: "",
				position: 1
			},
			{
				isTaken: false,
				type: "BEACH",
				row: 1,
				chairAmount: 5,
				name: "",
				date: "",
				position: 2
			},
			{
				isTaken: false,
				type: "BEACH",
				row: 1,
				chairAmount: 2,
				name: "",
				date: "",
				position: 3
			},
			{
				isTaken: false,
				type: "BEACH",
				row: 1,
				chairAmount: 4,
				name: "",
				date: "",
				position: 4
			},
		]
	}

	pushTablesToDb() {
		this.tables.forEach((table) => {

			const newTable = new Table(table);

			newTable.save();
		})
	}

	seedDb() {
		this.pushTablesToDb();
	}
}

module.exports = Seeder;

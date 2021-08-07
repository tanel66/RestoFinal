const mongoose = require('mongoose');

const TablesSchema = new mongoose.Schema({
    isTaken: {
        type: Boolean
    },
	type: {
		type: String
	},
	row: {
		type: Number
	},
	position: {
		type: Number
	},
	chairAmount: {
		type: Number
	},
	name: {
    	type: String
	},
	dueDate: {
    	type: Date
	}
}, {
    timestamps: true
});

module.exports = mongoose.model('Tables', TablesSchema);
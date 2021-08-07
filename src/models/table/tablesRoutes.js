const express = require('express');
const {
    getTables,
	reserveTable
} = require('./tablesController');

const router = express.Router();

router.route('/')
    .get(getTables)

router.route('/:id')
	.patch(reserveTable);

module.exports = router;
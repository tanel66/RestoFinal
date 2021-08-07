const asyncHandler = require('../../middlewares/asyncHandler');
const tablesModel = require('./tablesModel');
const ErrorResponse = require('../../utils/errorResponseUtil');

exports.getTables = asyncHandler(async (req, res, next) => {
    const tables = await tablesModel.find();

    const tablesCollection = [];

    tables.forEach((tablesItem) => {
		tablesCollection.push(tablesItem);
    });

    res.status(200).json({
        success: true,
        data: tablesCollection
    });
});

exports.reserveTable = asyncHandler(async (req, res, next) => {
    const patchObject = req.body;

    const table = await tablesModel.findByIdAndUpdate(req.params.id,
        { $set: patchObject },
        { new: true, runValidators: true }
    );

    if (!table) {
        return next(new ErrorResponse(
            'Required resource missing', 404
        ));
    }

    res.status(200).json({
        success: true,
        data: table
    });
});
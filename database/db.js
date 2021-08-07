const mongoose = require('mongoose');
const Seeder = require('./seeder');

const connectToDatabase = async () => {
	const data = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})

	await data.connection.dropDatabase();

	const seeder = new Seeder();
	seeder.seedDb();

	console.log(`Database: MongoDB connected to cluster => ${ data.connection.host }`);
};

module.exports = connectToDatabase;

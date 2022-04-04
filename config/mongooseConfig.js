import mongoose from 'mongoose';
import { config } from 'dotenv';
import Pitch from '../models/Pitch.js';
import CounterOffer from '../models/CounterOffer.js';

export const configureMongoose = () => {
	// If the environment is not production only then config file is enabled for reading data from env variables
	if (process.env.NODE_ENV !== 'production') config();
	// Our local mongodb url
	const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/xharktank';
	// connecting to mongodb
	mongoose.connect(dbUrl).then(async () => {
		console.log(`Server is up and running: ${!!mongoose.connection.readyState}`);
	});
};

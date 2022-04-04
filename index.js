import express from 'express';
import { configureMongoose } from './config/mongooseConfig.js';
import pitchRouter from './routes/pitch.js';

const app = express();

// Attaching json middlewares for better json parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuring mongoose (currently local mongoose is being used)
configureMongoose();

// All of our pitch routes
app.use('/pitches', pitchRouter);

// Listening on port 8081 as directed
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});

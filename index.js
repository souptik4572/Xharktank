import express from 'express';
import { configureMongoose } from './config/mongooseConfig.js';
import pitchRouter from './routes/pitch.js';
import cors from 'cors';

const app = express();

// Enable cors support in our application
app.use(cors())

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


// https://rebrand.ly/xharktank-pitches-https/?author=souptiksarkar4572&url=https://xharktank.herokuapp.com

// https://rebrand.ly/xharktank-invest-https/?author=souptiksarkar4572&url=https://xharktank.herokuapp.com


// https://rebrand.ly/xharktank-pitches-http/?author=souptiksarkar4572&url=xharktank.herokuapp.com

// https://rebrand.ly/xharktank-invest-http/?author=souptiksarkar4572&url=<Your HTTP backend url>


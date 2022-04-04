import mongoose from 'mongoose';
import shortid from 'shortid';

const PitchSchema = mongoose.Schema({
	id: {
		type: String,
		default: shortid.generate,
	},
	entrepreneur: {
		type: String,
		required: true,
	},
	pitchTitle: {
		type: String,
		required: true,
	},
	pitchIdea: {
		type: String,
		required: true,
	},
	askAmount: {
		type: Number,
		required: true,
	},
	equity: {
		type: Number,
		required: true,
	},
	// The offers will keep track of all counter offers received for a particular pitch which will be of type CounterOffer
	offers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'counteroffer',
		},
	],
});

PitchSchema.set('timestamps', true);

const Pitch = mongoose.model('pitch', PitchSchema);

export default Pitch;

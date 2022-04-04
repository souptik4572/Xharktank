import mongoose from 'mongoose';
import shortid from 'shortid';

const CounterOfferSchema = mongoose.Schema({
	id: {
		type: String,
		default: shortid.generate,
	},
	investor: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	equity: {
		type: Number,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
});

CounterOfferSchema.set('timestamps', true);

const CounterOffer = mongoose.model('counteroffer', CounterOfferSchema);

export default CounterOffer;

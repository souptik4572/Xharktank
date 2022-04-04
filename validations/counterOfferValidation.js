import Joi from 'joi';

// Validation schema for creating counter offer which includes all necessary attributes
const createCounterOfferValidationSchema = Joi.object({
	investor: Joi.string().required(),
	amount: Joi.number().required(),
	equity: Joi.number().min(0).max(100).required(),
	comment: Joi.string().required(),
});

export const createCounterOfferValidation = (counterOfferBody) => {
	return createCounterOfferValidationSchema.validate(counterOfferBody);
};

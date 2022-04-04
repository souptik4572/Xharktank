import Joi from 'joi';

// Validation schema for creating new pitch which includes all necessary attributes
const createPitchValidationSchema = Joi.object({
	entrepreneur: Joi.string().required(),
	pitchTitle: Joi.string().required(),
	pitchIdea: Joi.string().required(),
	askAmount: Joi.number().required(),
	equity: Joi.number().min(0).max(100).required(),
});

export const createPitchValidation = (pitchBody) => {
	return createPitchValidationSchema.validate(pitchBody);
};

import Pitch from '../models/Pitch.js';
import CounterOffer from '../models/CounterOffer.js';
import { createPitchValidation } from '../validations/pitchValidation.js';
import { createCounterOfferValidation } from '../validations/counterOfferValidation.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';

// Create a new pitch
export const createNewPitch = async (req, res) => {
	// Checking for pitch data body validation
	const { error } = createPitchValidation(req.body);
	// if invalid then wrong data format is being followed hence it is a bad request
	if (error) return res.sendStatus(StatusCodes.BAD_REQUEST);
	try {
		const pitch = await Pitch.create(req.body);
		return res.status(StatusCodes.CREATED).json({ id: pitch.id });
	} catch (error) {
		return res.sendStatus(StatusCodes.BAD_REQUEST);
	}
};

// Make a counter offer to a particular pitch
export const makeOfferOnPitch = async (req, res) => {
	// Checking for counter offer data body validation
	const { error } = createCounterOfferValidation(req.body);
	// if invalid then wrong data format is being followed hence it is a bad request
	if (error) return res.sendStatus(StatusCodes.BAD_REQUEST);
	try {
		const { pitchId } = req.params;
		// Firstly, fetching current pitch from db
		const pitch = await Pitch.findOne({ id: pitchId });
		// If pitch does not exist then not found error is sent back
		if (!pitch) return res.sendStatus(StatusCodes.NOT_FOUND);
		const counterOffer = await CounterOffer.create(req.body);
		// Inserting the counter offer unique id in offer array attribute of pitch and saving it
		pitch.offers.push(counterOffer._id);
		await pitch.save();
		return res.status(StatusCodes.CREATED).json({ id: counterOffer.id });
	} catch (error) {
		return res.sendStatus(StatusCodes.BAD_REQUEST);
	}
};

// Get details of a particular pitch
export const getPitch = async (req, res) => {
	try {
		const { pitchId } = req.params;
		// Fetching the particular pitch from the db and populating it with all dependent model data
		const pitch = await Pitch.findOne(
			{ id: pitchId },
			{
				_id: 0,
				createdAt: 0,
				updatedAt: 0,
				__v: 0,
			}
		).populate('offers', '-_id -createdAt -updatedAt -__v');
		// If pitch does not exist then not found error is sent back
		if (!pitch) {
			return res.sendStatus(StatusCodes.NOT_FOUND);
		}
		return res.status(StatusCodes.OK).json(pitch);
	} catch (error) {
		return res.sendStatus(StatusCodes.NOT_FOUND);
	}
};

// Get all pitches in reverse chronological order
export const getAllPitches = async (req, res) => {
	try {
		// Fetching the all pitches from the db and populating it with all dependent model data
		const pitches = await Pitch.find(
			{},
			{
				_id: 0,
				createdAt: 0,
				updatedAt: 0,
				__v: 0,
			}
		)
			.sort({ createdAt: -1 })
			.populate('offers', '-_id -createdAt -updatedAt -__v');
		return res.status(StatusCodes.OK).json(pitches);
	} catch (error) {
		return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
	}
};

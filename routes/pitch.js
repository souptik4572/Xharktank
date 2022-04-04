import { Router } from 'express';
import { createNewPitch, makeOfferOnPitch, getPitch, getAllPitches } from '../controllers/pitch.js';

const router = Router();

// Create a new pitch
router.post('', createNewPitch);

// Make a counter offer to a particular pitch
router.post('/:pitchId/makeOffer', makeOfferOnPitch);

// Get details of a particular pitch
router.get('/:pitchId', getPitch);

// Get all pitches in reverse chronological order
router.get('', getAllPitches);

export default router;

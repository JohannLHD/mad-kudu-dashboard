const express = require('express');
const {
  getAllSpecies,
  createNewSpecies,
  getSpeciesById,
  getSpeciesByContinent,
  deleteSpeciesById,
  reinitializeData,
} = require('../controllers/species');

const router = express.Router();

router.get('/', getAllSpecies);
router.post('/', createNewSpecies);
router.get('/download', reinitializeData);
router.get('/search/', getSpeciesByContinent);
router.get('/:id', getSpeciesById);
router.delete('/:id', deleteSpeciesById);

module.exports = router;

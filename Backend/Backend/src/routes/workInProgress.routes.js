const { Router } = require('express');
const { submitContactForm } = require('../controllers/workInProgress.controllers');

const router = Router();

router.post('/submit', submitContactForm);

module.exports = router;
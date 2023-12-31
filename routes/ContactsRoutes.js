const express = require('express');
const router = express.Router();

const contactController = require('../controllers/Contacts-controller');

router.get('/', contactController.getContacts);
router.get('/:id', contactController.getContact);
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);


module.exports = router;
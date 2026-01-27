
const express = require('express');
const router = express.Router();

const migrationController = require('../controllers/migration.controller');

router.post('/migrate', migrationController.createMigration);

module.exports = router;

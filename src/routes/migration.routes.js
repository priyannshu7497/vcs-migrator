router.get('/test', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Migration API is working'
  });
});


const express = require('express');
const router = express.Router();

const migrationController = require('../controllers/migration.controller');

router.post('/migrate', migrationController.createMigration);

module.exports = router;

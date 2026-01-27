const migrationService = require('../services/migration.service');

exports.createMigration = async (req, res) => {
  const result = await migrationService.startMigration(req.body);
  res.json(result);
};


exports.startMigration = async (payload) => {
  return {
    status: 'started',
    source: payload.source,
    target: payload.target,
    message: 'Migration job created successfully'
  };
};

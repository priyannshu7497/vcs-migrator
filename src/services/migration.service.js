const queue = require('../utils/fakeQueue');

exports.startMigration = async (payload) => {
  const job = {
    id: Date.now(),
    source: payload.source,
    target: payload.target
  };

  queue.addJob(job);

  return {
    status: 'queued',
    jobId: job.id,
    message: 'Migration job queued successfully'
  };
};

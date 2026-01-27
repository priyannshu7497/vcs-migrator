
const queue = [];

exports.addJob = (job) => {
  queue.push(job);
  process.nextTick(() => {
    const worker = require('../workers/migration.worker');
    worker.process(job);
  });
};

const queue = require('../utils/fakeQueue');

console.log('🧵 Migration worker started...');

queue.processJobs(async (job) => {
  console.log(`🚀 Starting migration job ${job.id}`);
  console.log(`🔁 Migrating from ${job.source} to ${job.target}`);

  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log(`✅ Migration completed for job ${job.id}`);
});

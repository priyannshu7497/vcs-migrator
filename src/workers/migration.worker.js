
exports.process = async (job) => {
  console.log('Worker started job:', job.id);

  // Simulate steps
  await new Promise(r => setTimeout(r, 500));
  console.log('Sync repositories');

  await new Promise(r => setTimeout(r, 500));
  console.log('Sync branches');

  await new Promise(r => setTimeout(r, 500));
  console.log('Sync completed for job:', job.id);
};

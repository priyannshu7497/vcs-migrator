exports.process = async (job) => {
  console.log('[WORKER] Job started:', job.id);

  await new Promise(r => setTimeout(r, 500));
  console.log('[WORKER] Sync repositories');

  await new Promise(r => setTimeout(r, 500));
  console.log('[WORKER] Sync branches');

  await new Promise(r => setTimeout(r, 500));
  console.log('[WORKER] Job completed:', job.id);
};

let jobs = [];
let processor = null;

exports.addJob = (job) => {
  console.log(`📥 Job queued: ${job.id}`);
  jobs.push(job);

  if (processor) {
    processor(job);
  } else {
    console.log('⚠️ No worker registered yet');
  }
};

exports.processJobs = (fn) => {
  console.log('🧵 Worker registered');
  processor = fn;
};

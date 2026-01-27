console.log("Worker started job:", jobId);
console.log("Sync repositories");
console.log("Sync branches");
console.log("Sync completed for job:", jobId);

console.log("App started...");

setInterval(() => {
  // keep process alive
}, 1000);


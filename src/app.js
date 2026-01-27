require('./workers/migration.worker');

const express = require('express');
const dotenv = require('dotenv');
const migrationRoutes = require('./routes/migration.routes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/migrations', migrationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

const express = require('express');
const app = express();

app.use(express.json());

const migrationRoutes = require('./routes/migration.routes');
app.use('/api', migrationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

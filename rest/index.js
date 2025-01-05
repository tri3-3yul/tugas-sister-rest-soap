const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaRoutes = require('./routes/mahasiswa');
const matakuliahRoutes = require('./routes/matakuliah');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Routes
app.use('/rest/mahasiswa', mahasiswaRoutes);
app.use('/rest/matakuliah', matakuliahRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

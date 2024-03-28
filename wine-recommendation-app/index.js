const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2'); // Add this line
const wineRoutes = require('./routes/wines');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost', // Your MySQL host, usually localhost
  user: 'wines', // Your MySQL username
  password: '', // Your MySQL password
  database: 'wine_recommendation_db' // Your MySQL database name

});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Routes
app.use('/', wineRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

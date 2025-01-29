// Importing the neccesary modules needed 
const express = require('express');
const cors = require('cors');

// Initialize the express app
const app = express();
// Use the cors middleware
app.use(cors());

//Define the END port
app.get('/', (req, res) => {
       res.json({
              "email": 'adejumoadedayo350@gmail.com',
              "current_datetime": new Date().toISOString(),
              "github_url": 'https://github.com/Easysoul1/HNG-INTERNSHIP.git'
       });
});

// Defining the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
});

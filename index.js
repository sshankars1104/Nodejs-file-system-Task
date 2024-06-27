const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
const folderPath = path.join(__dirname, 'files'); 

// Endpoint to create a txt file with the current timestamp
app.get('/create-file', (req, res) => {
    const currentDateTime = new Date();
    const timestamp = currentDateTime.toISOString().replace(/:/g, '-').replace(/\..+/, '');
    const formattedDateTime = currentDateTime.toString().replace(/:/g, '-'); 
    const fileName = `${formattedDateTime}.txt`;

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, fileName);

    // Write the ISO timestamp to the file
    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            return res.status(500).send('Error writing file');
        }
        res.send(`File created at ${filePath}`);
    });
});

// Endpoint to read and list all files in the folder
app.get('/read-files', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading folder');
        }
        res.json(files);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

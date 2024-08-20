// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Example folder where PDFs are stored
const book_download_api = path.join(__dirname ,'pdfs');

app.get('/download', (req, res) => {
    const { subject, year, month, course, branch, semester } = req.query;

    const fileName = `${subject}_${year}_${month}.pdf`;
    const filePath = path.join(book_download_api, fileName);


    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('File failed to send:', err);
            res.status(404).send('File not found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

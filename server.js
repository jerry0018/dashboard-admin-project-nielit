const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 1. ADD THIS LINE HERE (Imports your S3 upload configuration)
const upload = require('./aws-config');

// Serve the static SB Admin 2 files
app.use(express.static(path.join(__dirname, 'public')));

// 2. ADD THIS ROUTE HERE (Handles the actual S3 file upload)
app.post("/upload", upload.single("dashboard-file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  
  res.json({
    message: "File uploaded successfully to S3!",
    fileUrl: req.file.location 
  });
});

app.listen(PORT, () => {
    console.log(`Dashboard server running on port ${PORT}`);
});

const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// Middleware
app.use(express.json()); // For parsing application/json
// CORS Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({ "message": "hello" });
});

app.post("/", (req, res) => {
  console.log(req.body)
  // Extract folderName, fileName, and jsonData from the request body
  const { folderName, fileName, jsonData } = req.body;

  // Define the directory path and file path
  const directoryPath = path.join(__dirname, folderName);
  const filePath = path.join(directoryPath, fileName);

  // Check if the directory exists, if not, create it
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    console.log(`Directory created at ${directoryPath}`);
  }

  // Write JSON data to the file
  fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).json({ "message": "Error writing file" });
    } else {
      console.log(`File written at ${filePath}`);
      res.json({ "message": "File written successfully" });
    }
  });
});

// Start the server
app.listen(5000, '0.0.0.0', () => console.log("Server Up and Running..."));

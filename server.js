const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static client-side files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// 1. JSON API endpoint for client data interchange (Task 2)
app.get('/api/books', (req, res) => {
  const jsonPath = path.join(__dirname, 'data', 'bookstore.json');
  fs.readFile(jsonPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading bookstore.json:', err);
      return res.status(500).json({ error: 'Failed to read bookstore inventory data' });
    }
    try {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    } catch (parseErr) {
      console.error('Error parsing bookstore.json:', parseErr);
      res.status(500).json({ error: 'Malformed JSON data' });
    }
  });
});

// 2. XML Catalog Endpoint (Task 1)
app.get('/api/xml-catalog', (req, res) => {
  res.type('application/xml');
  res.sendFile(path.join(__dirname, 'data', 'bookstore.xml'));
});

// 3. XSD Schema Endpoint (Task 1)
app.get('/api/schema', (req, res) => {
  res.type('application/xml');
  res.sendFile(path.join(__dirname, 'data', 'bookstore.xsd'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`  Online Bookstore Server is live!`);
  console.log(`  - Web Application:       http://localhost:${PORT}`);
  console.log(`  - JSON Inventory API:   http://localhost:${PORT}/api/books`);
  console.log(`  - XML Catalog:           http://localhost:${PORT}/api/xml-catalog`);
  console.log(`  - XSD Schema:            http://localhost:${PORT}/api/schema`);
  console.log(`=======================================================`);
});

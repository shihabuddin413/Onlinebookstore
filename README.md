# Online Bookstore - Data Interchange System

CS 2205 (Web Programming 1) - Assignment Activity Unit 7

## Overview
This project demonstrates data interchange between a server and client using both **XML/XSD** and **JSON** technologies within a unified **Node.js/Express** application architecture.

## Project Structure
```text
OnlineBookstore/
├── server.js                        # Node.js Express server with JSON and XML endpoints
├── package.json                     # Project manifest and dependencies
├── README.md                        # Project documentation
├── LICENSE                          # MIT License
├── bookstore.xml                    # Standalone XML Catalog data file
├── bookstore.xsd                    # Standalone XML Schema Definition (XSD)
├── bookstore.html                   # Standalone HTML frontend with embedded data
├── Assignment_Submission_Document.md# Formatted essays & code documentation for submission
├── public/
│   └── index.html                   # Web frontend fetching /api/books dynamically
└── data/
    ├── bookstore.xml                # XML Catalog data file
    ├── bookstore.xsd                # XML Schema Definition (XSD)
    └── bookstore.json               # JSON Inventory data file
```

## Setup & Running

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

3. **Access Endpoints**:
   * **Web Application UI**: [http://localhost:3000](http://localhost:3000)
   * **JSON API**: [http://localhost:3000/api/books](http://localhost:3000/api/books)
   * **XML Catalog**: [http://localhost:3000/api/xml-catalog](http://localhost:3000/api/xml-catalog)
   * **XSD Schema**: [http://localhost:3000/api/schema](http://localhost:3000/api/schema)

## License
MIT

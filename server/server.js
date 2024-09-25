// Import the 'http' module to create a server
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Check if the request method is GET and the URL is "/"
  if (req.method === 'GET' && req.url === '/') {
    // Set the HTTP status to 200 (OK) and the content type to plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response text
    res.end('Hello, this is your GET response from Node.js server!');
  } else {
    // Handle 404 for other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Define the port to listen on
const PORT = 3000;

// Start the server and listen on port 3000
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
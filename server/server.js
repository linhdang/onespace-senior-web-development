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
  } else if (req.method === 'GET' &&  req.url == "/data/menus") {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end('{' +
                 '"menuItems": [' +
                 '  { "name": "Home", "link": "index.html" },' +
                 '  { "name": "Achievement", "link": "achievement.html" }, ' +
                 '  { "name": "Contact", "link": "contact.html" }' +
               ' ]'+
               '}'
               );
      return;

  } else if (req.method === 'GET' &&  req.url == "/data/plans") {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end('[ ' +
                     '{ "id": 1, "goal": "Learn Web Development on Node.js", "date": "06/10/2024" },' +
                     '{ "id": 2, "goal": "Win CodeQuest 2024", "date": "06/04/2024" },' +
                     '{ "id": 3, "goal": "Win CodeQuest 2025", "date": "06/04/2025" },' +
                     '{ "id": 4, "goal": "Win CodeQuest 2026", "date": "06/04/2026" },' +
                     '{ "id": 5, "goal": "Win CodeQuest 2027", "date": "06/04/2027" },' +
                     '{ "id": 6, "goal": "Win CodeQuest 2028", "date": "06/04/2028" },' +
                     '{ "id": 7, "goal": "Win CodeQuest 2029", "date": "06/04/2029" }' +
                   ']'
                   );
          return;

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
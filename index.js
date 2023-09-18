// Import necessary modules
import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!\n');
});

// Define the server's listening port and hostname
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});

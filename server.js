const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Update the "What I'm doing right now" text
    ws.send(`What I'm doing right now: ${message}`);
  });

  // Handle errors
  ws.on('error', (error) => {
    console.log(`Error occurred: ${error}`);
  });

  // Handle disconnections
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

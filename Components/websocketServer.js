// Import necessary libraries
const WebSocket = require("ws");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// WebSocket connection handler
wss.on("connection", (ws) => {
  console.log("Client connected");

  // Listen for messages from the client
  ws.on("message", (message) => {
    console.log(`Received message from client: ${message}`);

    // Assuming the message contains the accepted application ID
    const acceptedApplicationId = JSON.parse(message).id;

    // Emit a message to all connected clients (including the management side)
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: "ACCEPTED", id: acceptedApplicationId }));
      }
    });
  });
});

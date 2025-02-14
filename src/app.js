// Step 1: Import the Express module
import express from 'express';
import bodyParser from 'body-parser';
import { chatWithAgent } from './chat.mjs';
import pino from 'pino-http'

// Step 2: Create an instance of an Express application
const app = express();
app.use(bodyParser.json());

app.use(pino());
// Step 3: Define a route for the root URL ('/') that sends a response
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/chat', chatWithAgent);

// Step 4: Make the server listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
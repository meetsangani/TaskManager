const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const router = require('./routes/index');
const cookiesParser = require('cookie-parser');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookiesParser());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({
        message: "Server Running on " + PORT
    });
});

app.use('/api', router);


app.post('/api/task', async (req, res) => {
    try {
      const newTask = new Task(req.body);
      await newTask.save();
      res.status(201).send(newTask);
    } catch (error) {
      res.status(400).send(error);
    }
  });

connectDB().then(() => {
    app.listen(PORT, () => { // Use the HTTP server to listen
        console.log('Server Running on ' + PORT);
    });
});
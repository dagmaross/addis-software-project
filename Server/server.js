require('express-async-errors')
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect')
const app = express();
const musicRouter = require('./routes/routes');
const statRouter = require('./routes/statRoute');
const morgan  = require('morgan')
app.use(express.json())
app.get('/', (req, res) => {
    res.send('music player')
})
app.use(cors())
app.use(morgan('tiny'))

app.use('/api/v1/music', musicRouter);
app.use('/api/v1/stats', statRouter);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening port ${port}... `));
    } catch (error) {
        console.log(error);
    }
};

start();
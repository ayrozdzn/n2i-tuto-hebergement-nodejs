import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.IP || '::';
const port = parseInt(process.env.PORT || '8100');

import indexRoute from './routes/index.route';

const app = express();

app.use('/', indexRoute);

app.listen(port, host, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
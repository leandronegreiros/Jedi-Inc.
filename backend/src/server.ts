require('dotenv-flow').config();
import express from 'express';
import routes from './routes';
import mongoose from "mongoose";
import cors from 'cors';

const port = process.env.BACK_PORT;

const app = express();

app.use(cors())

app.use(express.json());
app.use(routes);

const url = `mongodb://${process.env.MONGO_DATABASE_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE_DBNAME}`;

mongoose
.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  })
});

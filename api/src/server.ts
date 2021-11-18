import 'reflect-metadata'
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { createServer } from "http";

import routes from './routes';

const app = express();

app.use(routes);

app.use(express.json());

const httpServer = createServer(app);

httpServer.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333! 🚀');
});
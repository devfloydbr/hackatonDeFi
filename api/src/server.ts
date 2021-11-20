import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import { createServer } from 'http'

import routes from './routes'

const app = express();

app.use(express.json());

app.use(routes);

const httpServer = createServer(app);

httpServer.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333! 🚀');
});
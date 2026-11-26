import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

import marcasRouter from './src/routes/marcas.routes.js'
import modelosRouter from './src/routes/modelos.routes.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
  return resp.json({ message: "HEALTHY", code: 200})
})

app.use('/marcas', marcasRouter);
app.use('/modelos', modelosRouter);

export default app;
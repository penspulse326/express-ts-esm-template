import cors from 'cors';
import express from 'express';
import { config } from './config/env.js';
import testRouter from './routes/test.js';
import { errorHandler } from './middlewares/errorHander.js';

const app = express();
const port = process.env.PORT! || 3000;

type HomeResponse = {
  message: string;
};

app.get('/', (req, res) => {
  const helloMessage: HomeResponse = {
    message: 'Hello Express!',
  };
  res.json(helloMessage);
});

app.use('/api', testRouter);

// Middlewares
app.use(
  cors({
    origin: config.cors.origin,
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handler
app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`);
});

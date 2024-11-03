import express from 'express';
import testRouter from './routes/test.js';

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

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`);
});

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

type HomeResponse = {
  message: string;
};

app.get('/', (req, res) => {
  const helloMessage: HomeResponse = {
    message: 'Hello Express!',
  };
  res.json(helloMessage);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

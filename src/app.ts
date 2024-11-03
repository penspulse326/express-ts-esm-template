import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT! || 3000;

// ES Module 中 __dirname 的替代方案
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 設定 EJS 模板引擎
app.set('views', path.join(__dirname, '../views')); // 設定視圖目錄
app.set('view engine', 'ejs'); // 設定視圖引擎為 EJS

// 設定靜態檔案目錄
app.use(express.static(path.join(__dirname, '../public')));

type HomeResponse = {
  title: string;
  message: string;
};

app.get('/', (req, res) => {
  const helloMessage: HomeResponse = {
    title: 'Express + TypeScript + EJS',
    message: 'Hello, World!',
  };
  res.render('index', helloMessage);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${port}`);
});

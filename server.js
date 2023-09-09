// 기존 코드
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// GET 요청에 대한 핸들러
app.get('/api/hello', (req, res) => {
  res.send('Hello, World!');
});

// POST 요청에 대한 핸들러
app.post('/api/data', (req, res) => {
  const data = req.body;
  // 데이터 처리 로직...
  res.send('Data received successfully!');
});

app.get('/proxy', async (req, res) => {
  const urlToProxy = req.query.url;

  try {
    const response = await axios.get(urlToProxy);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Error occurred while trying to proxy' });
  }
});

// 여기부터 추가된 코드
app.use(express.static('public')); // public 폴더 안에 있는 정적 파일들을 호스팅합니다.

// 기존 코드
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});

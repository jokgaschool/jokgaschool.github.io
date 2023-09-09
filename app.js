const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.json()); // JSON 파싱 미들웨어

app.post('/proxy', async (req, res) => {
  const { url } = req.body; // 클라이언트가 제공한 URL 가져오기
  
  try {
    const response = await fetch(url);
    const data = await response.text();
    
    res.send(data); // 결과 반환
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred.');
  }
});

app.listen(3000);

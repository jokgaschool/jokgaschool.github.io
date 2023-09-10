const express = require('express');
const cors = require('cors');

// Express 앱 생성
const app = express();

// CORS 미들웨어 사용. 특정 도메인에서 오는 요청만 허용.
app.use(cors({
  origin: 'https://jokga-school.netlify.app'
}));

// 나머지 라우트 및 미들웨어 설정

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});

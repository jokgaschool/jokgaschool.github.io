const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public'));  // 'public' 디렉토리의 정적 파일을 제공

app.get('/proxy', function(req, res) {
    const urlToProxy = req.query.url;

    // 요청된 URL로 요청을 전달하고 응답을 클라이언트에게 돌려줍니다.
    request({url: urlToProxy}).pipe(res);
});

app.listen(3000, function() {
    console.log('Proxy server is running on port 3000')
});

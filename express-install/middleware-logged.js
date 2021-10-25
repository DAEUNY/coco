const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// 생략
app.post('/api/users', jsonParser, function (req, res) {
  // req.body에는 JSON의 형태로 payload가 담겨져 있습니다.
})

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
// const express = require('express');
// const app = express();

// const myLogger = function (req, res, next) {
//   console.log('LOGGED'); // 이 부분을 req, res 객체를 이용해 고치면, 여러분들은 모든 요청에 대한 로그를 찍을 수 있습니다.
//   next();
// };

// app.use(myLogger);

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000);
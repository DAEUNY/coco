var express = require('express');     // exress 불러오기
var router = express.Router();        // router 객체 생성

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/', (req, res) => {
    res.send('Got a PUT request at ')
})

module.exports = router;                // 만든 router 객체 내보내기	-> app.js에서 불러오기
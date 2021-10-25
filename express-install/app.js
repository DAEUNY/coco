const express = require('express')
const app = express()
const port = 3000

var user = require('./routes/user');     // 1. user에서 생성한 route qnffjdhrh


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.post('/', (req, res) => {
//     res.send('Got a POST request')
// })

// app.put('/user', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

app.use('/user', user)                      // 2.'/user' 부분으로 요청이 들어오면 user 라우트로 연결시킴

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
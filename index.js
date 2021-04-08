// express module 을 가져오기
const express = require('express')

// express app 을 만듦.
const app = express()

const port = 5000

// root directory 에 접근 시 hello world 를 출력하도록 함
app.get('/', (req, res) => {
  res.send('Hello World!~ 안녕하세요~')
})

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jeonilee:test1212!@boilerplate.bya6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
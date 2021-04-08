// express module 을 가져오기
const { request } = require('express')
const express = require('express')

// express app 을 만듦.
const app = express()

const port = 5000

const bodyParser = require('body-parser')
const { User } = require('./models/User')

const config = require('./config/key')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


// root directory 에 접근 시 hello world 를 출력하도록 함
app.get('/', (req, res) => {
  res.send('Hello World!~ 안녕하세요~')
})


app.post('/register', (req, res) => {
  // 회원가입시 필요한 정보를 client 에서 가져오면
  // 그것들을 데이터베이스에 저장한다.

  const user = new User(req.body)

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
   })

})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
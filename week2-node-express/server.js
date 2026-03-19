require('dotenv').config();

const express = require('express')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT

//Middlewares
function logger(req, res, next){
  console.log(`Your request method is ${req.method}, with URL: ${req.url}`)

  next()
}

app.use(express.json())
app.use(cors())

app.use(logger)

//Roures
app.get('/', (req, res) =>{
  res.status(200).send('My Week 2 API!')
})

app.get('/user/:id', (req, res)=>{
  const userId = req.param.id
  res.status(200).send(`User [${userId}] profile`)
})

app.post('/user', (req, res)=> {
  const {name, email} = req.body

  if (!name || !email){
    res.status(400).send('Empty field detected. All fields are required')
  }
  
  res.status(200).send(`Hello, ${name}`)
})


//init server
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})
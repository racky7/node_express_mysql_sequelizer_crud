const express = require('express')
const cors = require('cors')
// var bodyParser = require('body-parser')


const app = express()

var corOptions = {
	origin: 'https://localhost:8081'
}

// middlewares
app.use(cors(corOptions))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))


// routers

const router = require('./routes/productRouter.js')

app.use('/api/products', router)

//testing api

app.get('/', (req, res)=>{
	res.json({message:'hello from api'})
})

//port 

const PORT = process.env.PORT || 8080

app.listen(PORT, () =>{
	console.log(`server is running on port ${PORT}`)
})


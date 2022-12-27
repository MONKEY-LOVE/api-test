const express = require('express')
const app = express()
const routes = require('./routes/routes');

app.use(express.json())
app.use(routes);

app.get('/ping', (req,res) =>{
    res.send('pong')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
console.log(`Servidor Corriendo en el puerto: ${port}`)
})



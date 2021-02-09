const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.get('/', (req, res) => {
    return res.json({ message: 'Hello, docker!'})
})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))
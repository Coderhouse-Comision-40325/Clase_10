// Importar nuestras dependencias
import express from 'express'

// Instanciar nuestras dependencias
const app = express()

app.use(express.static('public'))

// Configuramos el servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

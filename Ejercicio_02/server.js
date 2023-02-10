// Importando nuestras dependencias
import express from 'express'
import {create} from 'express-handlebars'

// Instanciando nuestras constantes
const app = express()

const hbs = create({ defaultLayout: 'index',
extname: '.hbs',});

// Register hbs.engine with the Express app.
app.engine('handlebars', hbs.engine);

// Tenemos que definir las rutas estaticas de nuestras vistas
app.set('view engine', "handlebars");
app.set('views', './views')

// Enviamos datos a handlebars
app.get("/", (req, res) => {
    res.render("datos", {
        nombre: 'Juan',
        apellido: 'Romano',
        edad: 29,
        email: "profe@jpromano.net",
        fyh: new Date().toLocaleString()
    })
})

// Configuración del servidor
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
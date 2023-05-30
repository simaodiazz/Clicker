const Express = require('express')

const app = Express(); 

const server = require('./config/server')
const sequelize = require("./config/database")

const userRoute = require('./routes/userRoute')

const auth = require('./middleware/auth')

// Middleware para interpretação de arquivos JSON
app.use(Express.json)

app.use(
    session({
        secret: "NAWIGPNijsngPIAWgnPUIAJSngIPAWgiupANSJGANiup",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 604800000
        }
    })
)

app.use('/api/user', auth.checkAuth, userRoute)

sequelize
    .sync()
    .then(() => {
        app.listen(server.port, () => {
            console.log(`Running Express Server on Port ${server.port}`)
        });
    })
    .catch((error) => {
        console.log('Erro ao sincrozinar o banco de dados', error)
    }
);

module.exports = sequelize
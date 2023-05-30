const User = require('../models/user')

const createUser = async(request, response) => {

    try {

        const { name, password, coins } = request.body

        const user = await User.create({
            name,
            password,
            coins
        })

        request.session.user = user; // Armazena o usuário na sessão
        res.cookie('sessionId', req.session.id); // Envia o cookie para o utilizador

        response.status(201).send("Utilizador criado com sucesso.");
    } catch (error) {
        console.error('Erro ao criar utilizador: ', error)
        response.status(500).send('Erro ao tentar criar utilizador.');
    }
}

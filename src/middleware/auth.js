const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    const token = req.headers['authorization']
    
    if(!token) {
        return res.status(400)
            .send({ msg: "Se pa o token não funciona."})
    }

    jwt.verify(token, "seccret", (err, decoded) => {
        if (err) {
            console.error('Erro ao decodificar', err)
            return res.status(400)
                .send({ msg: "Se pa o token não funciona."})
        }

        console.log(decoded)
        req.session = decoded

        next()
    })
}

module.exports = auth;
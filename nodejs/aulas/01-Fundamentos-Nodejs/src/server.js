import http from 'node:http'

// const server = http.createServer((req, res) => {
//     return res.end('te amo muito amor')
// })

// server.listen(7777)

//method
//url

// GET = Buscar um recurso no back-end
// POST = Criar um recurso no back-end
// PUT = Atualiza recursos no back-end
// PATCH = Atualiza recursos especificos no back-end
// DELETE = Deleta recursos

// GET /users => Buscando usuários do back-end
// POST /users => Criar um usuário no back-end

//Stateful - Stateless

//Stateful - guarda as informaçoes na memoria local

//Stateless - guarda as informaçoes em dispositivos externos

//HTTP Status Code - mosytra o status do aplicativo web(ex: erro 404 not found)

const server = http.createServer((req,res) =>{
    const {method,url} = req

    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users'){
        return res.push({
            id:1,
            name: 'Thymos Victor',
            email: "ThymosVictor@gmail.com"
        })
    }

    return res.end("TU É O AMOR DA MINHA VIDA")
})

server.listen(7777)
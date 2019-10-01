// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// const bodyParser = require('body-parser')

server.use(middlewares)
server.use(jsonServer.bodyParser);




function loginMiddle(req, res) {
  const { email, password } = req.body;

  console.log('autenticando');
  console.log('email:', email);
  console.log('password:', password);

  const db = require('./db.json');

  const { users } = db;

  const user = users.find((u => u.email === email));

  if(user && password && user.password === password) {
    return res.json({
      token: 'ahfalkdhfak',
      email,
      name: user.name
    });
  } 

  if(!user) {
    console.log('usuario não existe');
  } else {
    console.log('A senha correta para esse user é:', user.password)
  }
  return res.status(401).json({erro: 'Verifique seus dados'});
}
server.use('/login', loginMiddle);

function allReqs(req, res, next) {

  if(req.originalUrl == '/users' && req.method == 'POST'){
    console.log('criando usuário', req.body);
    return next();
  }

  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({error: 'Não autorizado. Token não informado'});
  }

  const token = authorization.split(' ')[1];

  if(token !== 'ahfalkdhfak') {
    return res.status(401).json({error: 'Token inválido'});
  }

  console.log(authorization);
  return next();
}

server.use(allReqs);

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
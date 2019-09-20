// server.js
const jsonServer = require('json-server')
const db = require('./db.json')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// const bodyParser = require('body-parser')

server.use(middlewares)
server.use(jsonServer.bodyParser);

function loginMiddle(req, res, next) {
  const { email, password } = req.body;

  console.log('autenticando');
  console.log('email:', email);
  console.log('password:', password);

  const { users } = db;

  const user = users.find((u => u.email === email));

  if(user && password && user.password === password) {
    return res.json({token: 'ahfalkdhfak'});
  } 

  if(!user) {
    console.log('usuario não existe');
  } else {
    console.log('A senha correta para esse user é:', user.password)
  }
  return res.status(401).json({erro: 'Verifique seus dados'});
}

server.use('/login', loginMiddle);

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
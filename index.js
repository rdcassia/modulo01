const express = require('express');

const server =express();

server.use(express.json());

const users = ['Cassia', 'Ana', 'João Matheus'];

server.use((req, res, next) => {
  console.log(`Método: ${req.method}; URL: ${req.url}`);
   return next();
})



server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(`Usuário: ${users[index]}`);
})

server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
})

server.put('/users/:index', (req, res)=>{
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
})

server.delete('/users/:index', (req, res) => {
  const { index } = req.params
  users.splice(index, 1);
  return res.send()
})

server.listen(3000);

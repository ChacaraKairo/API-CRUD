/** @format */
import { openDb } from "./configDB.js";
//entrec chaves quandofor uma variavel
import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import router from "./routes.js"; //importa o arquivo
const app = express(); //instancia do express
app.use(express.json()); //usa o json para o express
app.use(router);
app.use(cors());

// import {
//   createTable,
//     insertPessoa,
//     selectPessoas,
//     updatePessoa,
//     selectPessoa,
//     deletePessoa,
// } from "./controler/pessoa.js";

// //import serve para trazer funcionalidades de outros arquivos/módulos

// //pega  cnteúdo enviado na rota
// //___openDb(); //funçã do arquivo configDB.js para abrir a base de dados
// createTable();
// //http://localhost:3000/
// app.get("/", (req, res) => {
//   //o / vazio significa a raiz
//   //req => requisição
//   //res => resposta
//   res.send("Hello World!");
//   //junto com res a função .send envia uma resposta para o navegador
// });
// //function(){} é a mesma coisa que () => {}
// //então function(req, res){} é a mesma coisa que (req, res) => {}
// //.post() Ele é usado para definir manipuladores de rota para solicitações
// //POST enviadas a um determinado caminho (rota) no servidor Express
// app.post("/pessoas", (req, res) => {
//   //printa o que for passado na rota
//   //___console.log(req.body);
//   insertPessoa(req.body);
//   //responde com um objeto json com o statuscode 200
//   res.json({
//     statuscode: 200,
//     //statuscoode retorna que a resposta foi bem sucedida
//   });
// });
// app.put("/pessoas", async (req, res) => {
//   if (req.body && !req.body.id) {
//     res.json({
//       statusCode: 400,
//       msg: "O id é obrigatório",
//     });
//   } else {
//     updatePessoa(req.body);
//     res.status(200).json({
//       statusCode: 200,
//     });
//   }
// });
// //busca toda a tabela pessoas
// app.get("/pessoas", async (req, res) => {
//   //await => aguarda a resposta ser resolvida
//   let pessoas = await selectPessoas();
//   res.json({
//     pessoas,
//   });
// });
// //retorna apenas uma pessoa baseado no id
// app.get("/pessoa", async (req, res) => {
//   //await => aguarda a resposta ser resolvida
//   let pessoa = await selectPessoa(req.body.id);
//   res.json({
//     pessoa,
//   });
// });
// app.delete("/pessoa", async (req, res) => {
//   let pessoa = deletePessoa(req.body.id);
//   res.json({
//     statuscode: 200,
//   });
// });
//.listen() possibilita que o servidor seja iniciado
app.listen(3000, () =>
  console.log("rodando http na porta 3000"),
);
//http://localhost:3000/
//https//localhost:3001/
https
  .createServer(
    {
      key: fs.readFileSync("src/SSL/code.key"),
      cert: fs.readFileSync("src/SSL/code.crt"),
    },
    app,
  )
  .listen(3001, () =>
    console.log("rodando hhtps na porta 3001"),
  );
// nodemon 'c:\Users\kairo\OneDrive\Área de Trabalho\Curso API Yuri Marcon\src\app.js'

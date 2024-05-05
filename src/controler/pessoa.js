import { openDb } from "../configDB.js";
export async function createTable() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, idade INTEGER)",
    );
  });
}
//retorna uma pessoa baseado no id, metodo get
export async function selectPessoa(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM pessoas WHERE id = ?", [id]).then(
      (pessoa) => res.json(pessoa),
    );
  });
}
//retorna todas as pessoas, metodo get
export async function selectPessoas(req, res) {
  openDb().then((db) => {
    //db.all => seleciona todas as linhas
    //.then(res=>res)faz a resposta ser resolvida
    db.all("SELECT * FROM pessoas").then((pessoas) =>
      res.json(pessoas),
    );
  });
}

export async function insertPessoa(req, res) {
  let pessoa = req.body;
  openDb().then((db) => {
    db.run(
      "INSERT INTO pessoas (nome, idade) VALUES (?, ?)",
      [pessoa.nome, pessoa.idade],
    );
    res.json({
      statuscode: 200,
    });
  });
}
//cria um update na tabela pessoas
export async function updatePessoa(req, res) {
  let pessoa = req.body;
  openDb().then((db) => {
    db.run(
      "UPDATE pessoas SET nome = ?, idade = ? WHERE id = ?",
      [pessoa.nome, pessoa.idade, pessoa.id],
    );
    res.json({
      statuscode: 200,
    });
  });
}

//para deletar uma pessoa baseado no id
export async function deletePessoa(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    //.run faz com que a resposta seja resolvida
    db.run("DELETE FROM pessoas WHERE id = ?", [id]).then(
      (res) => res,
    );
  });
  res.json({
    statuscode: 200,
  });
}

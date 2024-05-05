import { Router } from "express";
import {
  createTable,
  insertPessoa,
  selectPessoas,
  updatePessoa,
  selectPessoa,
  deletePessoa,
} from "./controler/pessoa.js";

const router = Router(); //instancia o router do express
router.get("/", (req, res) => {
  res.json({
    statusCode: 200,
    msg: "API funcionando!",
  });
});
router.get("/pessoas", selectPessoas);
router.get("/pessoa", selectPessoa);
router.post("/pessoas", insertPessoa);
router.put("/pessoas", updatePessoa);
router.delete("/pessoa", deletePessoa);

export default router; /**exporta o router
a chave export defautl é
 usada para exportar um único valor, objeto, função ou classe de um módulo.*/

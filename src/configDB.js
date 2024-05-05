/** @format */
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// you would have to import / invoke this in another file
//export funciona para exportar uma variável
//neste caso a variavel recebe uma função que abre a base de dados
export async function openDb() {
  //a função open do sqlite vai abrir a base de dados
  return open({
    filename:
      "c:/Users/kairo/OneDrive/Área de Trabalho/Curso API Yuri Marcon/src/database.db",
    driver: sqlite3.Database,
  });
}

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
 /**
  * Metodos HTTP
  * 
  * GET: busca uma informação do back-end
  * POST: criar uma informação no back-end
  * PUT: alterar uma informação no back-end
  * DELETE: deleta uma informação no back-end
  */
 /**
  * Tipos de parametros
  * 
  * Query Params: Parametros nomeados enviados na rota apos o "?" (filtros, paginação)
  * Route Params: Parametros utlizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */
  /**
   * SQL: MySQL, SQLite etc.
   * NoSQL: MongoDB, etc.
   */
  /**
   * Estrategias para banco.
   * Dricer: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */
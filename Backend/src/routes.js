const express = require('express');
const OngControler = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
//ROTAS DE LOGIN
routes.post('/sessions', SessionController.create);
//ROTAS DE LISTAGEM DE ONGS
routes.get('/ongs', OngControler.index);
routes.post('/ongs', OngControler.create);
//ROTAS DE CASOS
routes.get('/incidents',IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
//ROTAS DE CASOS INDIVIDUAIS
routes.get('/profile', ProfileController.index);

module.exports = routes;
const express = require('express')

const OngsController = require('./controller/OngsController')
const IncidentsController = require('./controller/IncidentsController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngsController.index);
routes.post('/ongs',  OngsController.create);

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

routes.get('/profile',ProfileController.index)

module.exports = routes

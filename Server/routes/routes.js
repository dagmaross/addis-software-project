const express = require('express')

const Router = express.Router()

const {
    createMusic,
    getAllMusic,
    getSingleMusic,
    updateMusic,
    deleteMusic,
} = require('../controller/controller');

Router
    .route('/').post(createMusic).get(getAllMusic);

Router
    .route('/:id')
    .get(getSingleMusic)
    .patch(updateMusic)
    .delete(deleteMusic)

module.exports = Router
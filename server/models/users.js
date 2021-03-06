'use strict';

const Sequelize = require('sequelize');
const types = require('./types');

const MODEL_NAME = 'users';

const definition = {
  id: types.id,
  firstName: types.shortString,
  lastName: types.shortString,
  email: types.email,
  password: Sequelize.BLOB,
  createdAt: types.date,
  updatedAt: types.date,
  isDeleted: types.boolean
};

const model = function (sequelize) {
  return sequelize.define(MODEL_NAME, definition);
};

module.exports = {
  name: MODEL_NAME,
  model,
  definition
};

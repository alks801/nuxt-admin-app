
const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");

const dbName = 'OPMSE.db';
const modelsFolder = '/db_models';

const sequelize = new Sequelize(null, null, null, {
    dialect: 'sqlite',
    storage: 'C:/Users/denisevich/Documents/GitHub/nuxt-admin-app/server/db/OPMSE.db',
});

var db = {};

//init simple acces to table via db.table_name
fs.readdirSync(__dirname + modelsFolder)
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname + modelsFolder, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
//

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
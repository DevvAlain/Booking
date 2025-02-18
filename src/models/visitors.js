'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Visitors extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Visitors.init({

        ip_address: DataTypes.STRING,
        visit_time: DataTypes.BIGINT,


    }, {
        sequelize,
        modelName: 'Visitors',
    });
    return Visitors;
};
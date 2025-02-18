'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('visitors', {

            // currentNumber: DataTypes.INTEGER,
            // maxNumber: DataTypes.INTEGER,
            // date: DataTypes.DATE,
            // timeType: DataTypes.STRING,
            // doctorId: DataTypes.INTEGER,

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ip_address: {
                type: Sequelize.STRING
            },
            visit_time: {
                type: Sequelize.BIGINT,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('visitors');
    }
};
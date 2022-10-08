import Sequelize from 'sequelize';

const sequelize = new Sequelize('mascotas', 'postgres', '12345678', {
    host: '172.17.0.2',
    dialect: 'postgres'
});

export {
    sequelize
}
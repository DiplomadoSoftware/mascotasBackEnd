import { DataTypes } from "sequelize";
import { sequelize } from "../Database/index.js";

const petRequest = sequelize.define( 'solicitudes', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nombre_cliente: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.STRING
    },
    id_mascota: {
        type: DataTypes.INTEGER,
        references: 'mascotas',
        referencesKey: 'id'
    }
});

export { petRequest }

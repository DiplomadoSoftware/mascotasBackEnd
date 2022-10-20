import { DataTypes } from "sequelize";
import { sequelize } from "../Database/index.js";

const PetRequest = sequelize.define( 'solicitudes', {
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
    mascota_id: {
        type: DataTypes.INTEGER,
        references: 'mascotas',
        referencesKey: 'id'
    }
},{sequelize, timestamps: false});

export { PetRequest }

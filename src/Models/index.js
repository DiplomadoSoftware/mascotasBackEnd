import { DataTypes } from "sequelize";
import { sequelize } from "../Database/index.js";
import { PetRequest } from "./petRequest.js";

const Pet = sequelize.define( 'mascotas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    raza: {
        type: DataTypes.STRING
    },

},{sequelize, timestamps: false});

Pet.hasMany(PetRequest,  { foreignKey: 'mascota_id' });

export { Pet }

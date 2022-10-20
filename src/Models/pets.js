import { DataTypes } from "sequelize";
import { sequelize } from "../Database/index.js";
import { PetRequest } from "./petRequest";

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

});

Pet.hasMany(petRequest);

export { Pet }
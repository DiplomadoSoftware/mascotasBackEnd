import {Pet} from '../Models/index.js';

const getPets = async (req, res) => {
    try {
        const pets = await Pet.findAndCountAll();

        res.status(200).json(pets);
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

const postPet = async (req, res) => {
    try {
        const { id, name, type, state, description, breed } = req.body;
        const newPet = await Pet.create({
            id,
            nombre: name,
            tipo: type,
            estado: state,
            descripcion: description,
            raza: breed,
        });

        res.status(200).json(newPet);
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

const putPet = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, type, state, description, breed } = req.body;
        const oldPet = await Pet.findByPk(id);

        // update incoming data
        oldPet.nombre = name || oldPet.nombre;
        oldPet.tipo = type || oldPet.tipo;
        oldPet.estado = state || oldPet.estado;
        oldPet.descripcion = description || oldPet.descripcion;
        oldPet.raza = breed || oldPet.raza;

        const updatedPet = await oldPet.save();

        res.status(200).json(updatedPet);
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

const deletePet = async (req, res) => {
    try {
        const { id } = req.params;
        await Pet.destroy({ where: { id } });

        res.status(200).json({ body: { id } });
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

export { getPets, postPet, putPet, deletePet }
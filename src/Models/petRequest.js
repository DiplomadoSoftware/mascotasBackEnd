import { PetRequest } from '../Models/index.js';

const getPetRequests = async (req, res) => {
    try {
        const { id: petId } = req.params;
        const petRequests = await PetRequest.findAndCountAll({
            where: { mascota_id: petId }
        });

        res.status(200).json(petRequests);
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

const postPetRequest = async (req, res) => {
    try {
        const { id: petId } = req.params;
        const { id, clientName, mail, phone, date, state } = req.body;
        const newPetRequest = await PetRequest.create({
            id,
            nombre_cliente: clientName,
            correo: mail,
            telefono: phone,
            fecha: date,
            estado: state,
            mascota_id: petId,
        });

        res.status(200).json(newPetRequest);
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

const putPetRequest = async (req, res) => {
    try {
        const { idSol } = req.params;
        const { clientName, mail, phone, date, state } = req.body;
        const oldPetRequest = await PetRequest.findByPk(idSol);

        // update incoming data
        oldPetRequest.nombre_cliente = clientName || oldPetRequest.nombre_cliente;
        oldPetRequest.correo = mail || oldPetRequest.correo;
        oldPetRequest.telefono = phone || oldPetRequest.telefono;
        oldPetRequest.fecha = date || oldPetRequest.fecha;
        oldPetRequest.estado = state || oldPetRequest.estado;

        const updatedPetRequest = await oldPetRequest.save();

        res.status(200).json(updatedPetRequest);
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

const deletePetRequest = async (req, res) => {
    try {
        const { idSol } = req.params;
        await PetRequest.destroy({ where: { id: idSol } });

        res.status(200).json({ body: { id: idSol } });
    } catch (error) {
        res.status(400).json({ Error: `${error}` });
    }
}

export { getPetRequests, postPetRequest, putPetRequest, deletePetRequest }

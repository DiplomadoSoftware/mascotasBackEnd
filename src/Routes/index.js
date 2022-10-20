import { Router } from 'express';
import { getPets, postPet, putPet, deletePet } from "../Controllers/pets.js";
import { getPetRequests, postPetRequest, putPetRequest, deletePetRequest } from "../Controllers/petRequest.js";


const router=Router();

router.get('/',(req,res)=>{
    res.send("Hola estamos en Index");
});
// Pet routes
router.get('/mascotas', getPets);
router.post('/mascotas', postPet);
router.put('/mascotas/:id', putPet);
router.delete('/mascotas/:id', deletePet);

// PetRequest routes
router.get('/mascotas/:id/solicitudes', getPetRequests);
router.post('/mascotas/:id/solicitudes', postPetRequest);
router.put('/mascotas/:id/solicitudes/:idSol', putPetRequest);
router.delete('/mascotas/:id/solicitudes/:idSol', deletePetRequest);

export default router;
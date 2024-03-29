/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { getHistorialDenuncias, crearDenuncia, getDenunciaNotificada, getDenunciaEnProceso, atenderDenuncia, terminarDenuncia, getDenuncias, getDenuncia, getDenunciaEnProcesoCivil } = require('../controllers/denuncias');




const router = Router();



router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    ],
    crearDenuncia
);
router.post('/atender',
    atenderDenuncia
);
router.get('/notificada/:denuncia',
    // [        check('nombre', 'El nombre es obligatorio').not().isEmpty(),],
    getDenunciaNotificada
);
router.post('/proceso',
    // [        check('nombre', 'El nombre es obligatorio').not().isEmpty(),],
    getDenunciaEnProceso
);
router.post('/procesocivil',
    // [        check('nombre', 'El nombre es obligatorio').not().isEmpty(),],
    getDenunciaEnProcesoCivil
);
router.post('/terminar',
    // [        check('nombre', 'El nombre es obligatorio').not().isEmpty(),],
    terminarDenuncia
);
router.get('/',
    getDenuncias
);

router.get('/:denuncia',
    // [        check('nombre', 'El nombre es obligatorio').not().isEmpty(),],
    getDenuncia);


router.get('/historial/:id/',
    // [        check('nombre', 'El nombre es obligatorio').not().isEmpty(),],
    getHistorialDenuncias
);

module.exports = router;
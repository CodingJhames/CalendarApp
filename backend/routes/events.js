

/* 
    Rutas de eventos
    /api/events
*/

const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );


//Obtener eventos
router.get('/',  getEvento );

//Crear un nuevo evento
router.post(
    '/',
    [
        check( 'title', 'El tìtulo es obligatorio').not().isEmpty(),
        check( 'start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check( 'end', 'Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ], 
    crearEvento,

    
);

//Actualizar Evento
router.put('/:id',  actualizarEvento );

//Borrar evento
router.delete('/:id',  eliminarEvento );


module.exports = router;
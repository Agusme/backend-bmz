import { check,  } from "express-validator";
import validationresults from "../helpers/validationResults";

const propertyValidation =[
    check('typeProperty')
    .notEmpty()
    .withMessage('El tipo de propiedad es obligatorio'),
    check('typeTransaction')
    .notEmpty()
    .withMessage('El tipo de transaccion es obligatoria'),
    check('location')
    .notEmpty()
    .withMessage('La ubicacion es obligatoria')
    ,
    check('description')
    .withMessage('La descripcion es obligatoria'),
    (req, res, next) => {
        validationresults(req, res, next);
      },
]

export default propertyValidation;
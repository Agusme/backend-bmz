import { Router } from "express";
import { createdPropierty, deleteProperty, getOne, showPropierties, updateProperty } from "../controllers/property.controller";
import propertyValidation from "../middlewares/propertyValidation";

const router = Router();
router.route('/property')
.get(showPropierties)
.post([propertyValidation],createdPropierty)

router.route('/property/:id')
.get(getOne)
.put(updateProperty)
.delete(deleteProperty)



export default router;
import { Router } from "express";
import {
  createdPropierty,
  deleteProperty,
  getOne,
  showPropierties,
  updateProperty,
} from "../controllers/property.controller";
import propertyValidation from "../middlewares/propertyValidation";
import upload from "../middlewares/multer"; // Importa la configuración de multer

const router = Router();

router
  .route("/property")
  .get(showPropierties)
  .post([upload.array("images", 10), propertyValidation], createdPropierty); // Permite subir hasta 10 imágenes

router
  .route("/property/:id")
  .get(getOne)
  .put([upload.array("images", 10)], updateProperty)
  .delete(deleteProperty);

export default router;

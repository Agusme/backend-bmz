import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../helpers/cloudinary'; // Asegúrate de que este archivo exporta correctamente tu configuración de Cloudinary

// Configura el almacenamiento en Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'properties',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

// Crea el objeto de configuración de multer
const upload = multer({ storage });

export default upload;

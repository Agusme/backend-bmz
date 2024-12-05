# **BMZ Propiedades - Backend**

Este repositorio contiene el **backend** de la aplicación web de **BMZ Propiedades**, una inmobiliaria que gestiona y muestra propiedades disponibles para alquiler y compra. El backend está diseñado para manejar las solicitudes y respuestas entre el frontend y la base de datos, gestionando las propiedades y sus detalles.

## **Descripción**

El backend fue desarrollado utilizando **Node.js** con el framework **Express.js**. La aplicación expone una serie de **API RESTful** para gestionar las propiedades, incluyendo funcionalidades como creación, lectura, actualización y eliminación (CRUD). Además, se integró **MongoDB** como base de datos para almacenar la información de las propiedades y **Cloudinary** para gestionar las imágenes asociadas a cada propiedad.

## **Características**

- **Gestión de propiedades**: CRUD completo para agregar, editar, eliminar y obtener propiedades.
- **Autenticación y seguridad**: Uso de **JWT** para la protección de rutas y la gestión de sesiones.
- **Manejo de imágenes**: Integración con **Cloudinary** para almacenar y recuperar imágenes de las propiedades.
- **Filtros de propiedades**: Búsqueda avanzada de propiedades por diferentes parámetros como ubicación, tipo y precio.
- **API RESTful**: Arquitectura basada en REST para facilitar la comunicación con el frontend.

## **Instalación**

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Agusme/bmz-propiedades-backend.git

2. **Navega a la carpeta del proyecto**:

   ```bash
   cd bmz-propiedades-backend
3. **Instala dependencias**:

   ```bash
   npm install
4. **Configura las variables de entorno**:

   ```bash
    MONGODB_URI=tu_uri_de_mongodb
    CLOUDINARY_CLOUD_NAME=tu_cloud_name
5. **Inicia el Servidor**:

   ```bash
   npm run dev  
## **Tecnologías utilizadas**

- **Node.js**: Entorno de ejecución de JavaScript para el backend.
- **Express.js**: Framework para construir el servidor y manejar las rutas.
- **MongoDB**: Base de datos NoSQL para almacenar las propiedades.
- **Mongoose**: Librería de modelado de datos para MongoDB.
- **Cloudinary**: Servicio para la gestión de imágenes en la nube.
- **JWT (JSON Web Token)**: Para la autenticación y la protección de rutas.
- **Dotenv**: Para gestionar las variables de entorno de manera segura.

## **Rutas de la API**

### `GET /api/properties`
Obtiene una lista de todas las propiedades.

**Respuesta**: Un array de objetos con los detalles de cada propiedad.

---

### `GET /api/properties/:id`
Obtiene los detalles de una propiedad específica por su ID.

**Parámetros**:
- `id`: ID de la propiedad.

**Respuesta**: Un objeto con los detalles de la propiedad solicitada.

---

### `POST /api/properties`
Crea una nueva propiedad.

**Body**: JSON con los datos de la propiedad (título, descripción, precio, imágenes, etc.).

**Respuesta**: Objeto con los detalles de la propiedad creada.

---

### `PUT /api/properties/:id`
Actualiza los detalles de una propiedad.

**Parámetros**:
- `id`: ID de la propiedad.

**Body**: JSON con los datos actualizados de la propiedad.

**Respuesta**: Objeto con los detalles de la propiedad actualizada.

---

### `DELETE /api/properties/:id`
Elimina una propiedad.

**Parámetros**:
- `id`: ID de la propiedad.

**Respuesta**: Mensaje de confirmación.

## **Agustina Mena**
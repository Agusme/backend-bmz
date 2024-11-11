import Property from "../models/property";

const showPropierties = async(req, res)=>{
    try {
        const propiertyList = await Property.find()
        res.status(200).json(propiertyList)
    } catch (error) {
        res.status(404).json({message:'Error searching for requested properties '})
        
    }
}

const createdPropierty = async(req, res)=>{
const {typeProperty, typeTransaction, location, bathroom, bedroom, description, map}= req.body;
const images = req.files.map(file => file.path);
try {
        const newProperty = new Property({
            typeProperty,
            typeTransaction,
            bathroom, 
            bedroom,
            location,
            description,
            map,
            images,
        })
    await newProperty.save()
    res.status(201).json({message:'Property created successfully'})
} catch (error) {
    console.log(error)

   res.status(400).json({message: "Error while creating the property "}) 
}
}

const getOne = async(req, res)=>{
    try {
        const {id}= req.params;
        const foundProperty = await Property.findById(id)
        res.status(200).json(foundProperty)
    } catch (error) {
        res.status(404).json({message:"Error while finding a property"})
    }

}

const updateProperty = async (req, res) => {
    try {
        console.log("Request Body:", req.body);  // Depuración
        console.log("Request Files:", req.files);  // Depuración para archivos

        const { id } = req.params;
        const existingProperty = await Property.findById(id);

        if (!existingProperty) {
            return res.status(404).json({ message: "Property not found" });
        }

        // Actualiza las imágenes solo si se proporcionan nuevas
        const updatedImages = req.files && req.files.length > 0 
            ? req.files.map(file => file.path) 
            : existingProperty.images;

        const updatedProperty = await Property.findByIdAndUpdate(id, { 
            ...req.body, 
            images: updatedImages
        }, { new: true, runValidators: true });

        if (!updatedProperty) {
            return res.status(404).json({ message: "Error updating property" });
        }

        res.status(200).json({
            message: 'Property updated successfully',
            updatedProperty
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error while updating the property" });
    }
};
const deleteProperty=async(req, res)=>{
    try {
        await Property.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Property deleted successfully" });

    } catch (error) {
        res.status(404).json({ message: "error while deleting" });

    }
}
const searchProperties = async (req, res) => {
    try {
        const { typeProperty, typeTransaction } = req.query;
        const query = {};
        if (typeProperty) query.typeProperty = typeProperty;
        if (typeTransaction) query.typeTransaction = typeTransaction;
        const properties = await Property.find(query);
        res.json(properties);
    } catch (error) {
        console.error("Error al buscar propiedades:", error);
        res.status(500).json({ error: "Error while finding a property", details: error.message });
    }
};
export{createdPropierty, showPropierties, updateProperty ,deleteProperty, getOne, searchProperties }
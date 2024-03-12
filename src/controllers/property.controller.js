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
const {typeProperty, typeTransaction, location, description, map, images}= req.body;
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

const updateProperty = async (req, res)=>{
    try {
        await Property.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message:'Property updated successfully'})
    } catch (error) {
        res.status(400).json({message:"Error while updating the property "})
    }
}

const deleteProperty=async(req, res)=>{
    try {
        await Property.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Property deleted successfully" });

    } catch (error) {
        res.status(404).json({ message: "error while deleting" });

    }
}

export{createdPropierty, showPropierties, updateProperty ,deleteProperty, getOne }
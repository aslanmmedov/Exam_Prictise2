const ShoesModel = require("../models/shoesmodel");

const GetAllData  = async (req, res) => {
    try {
        const data = await ShoesModel.find({})    
        res.status(200).json({data:data,message:"Succes"});
    } catch (error) {
        res.status(400).json({message:"Bad Request"});
    }
}
const GetDataById  = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await ShoesModel.findById(id)
        res.status(200).json({data:data,message:"Succes"});
    } catch (error) {
        res.status(404).json({message:"Not Found"});
    }
}
const AddData  = async (req, res) => {
    try {
        const data =  ShoesModel({...req.body});
        await data.save();
        res.status(201).json({data:data,message:"Succes"});
    } catch (error) {
        res.status(400).json({message:"Bad Request"});
    }
}
const DeleteDataById  = async (req, res) => {
    const {id} = req.params;
    try {
        const data =  await ShoesModel.findByIdAndDelete(id);
        res.status(200).json({data:data,message:"Succes"});
    } catch (error) {
        res.status(404).json({message:"Not Found"});
    }
}

module.exports = {
    GetAllData,
    GetDataById,
    AddData,
    DeleteDataById,
}

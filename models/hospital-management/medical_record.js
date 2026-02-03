import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({
  
},{timestamps:true})

export const mediacl = mongoose.model("Mediacl",medicalRecordSchema)
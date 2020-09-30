import mongoose from "mongoose"
import { dbContext } from "../db/DbContext"
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Room = new Schema({
    name: { type: String, required: true },
    startTime: { type: Date },
    runTime: { type: Number },
    options: { type: Object },
    items: { type: Array },
    owner: { type: ObjectId },
}, { timestamps: true, toJSON: { virtuals: true } })

Room.virtual("creator",
    {
        localField: "creatorEmail",
        ref: "Profile",
        foreignField: "email",
        justOne: true
    })

export default Room
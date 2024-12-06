import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema(
    {
        props: {
            type: mongoose.Schema.Types.Mixed
        },
        titulo: {
            type: String,
            required: false
        },
        imagen: {
            type: String,
            required: false
        },
        tipo: {
            type: String,
            required: false
        },
        precio: {
            type: String,
            required: false
        },
        provincia: {
            type: String,
            required: false
        },
        ciudad: {
            type: String,
            required: false
        },
        ciudadjson: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        }
    },    
    {
        timestamps: true,
    }
)

export default mongoose.model("Publication", publicationSchema);
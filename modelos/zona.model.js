import mongoose from "mongoose";

const ZonaSchema = new mongoose.Schema(
    {
        Publicaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Publication" }],
        provincia: {
            type: String
        },
        ciudad: {
            type: String
        },
        ciudadjson: {
            type: String
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("Zona", ZonaSchema);
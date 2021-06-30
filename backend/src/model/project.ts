import { model, Schema } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const projectSchema = new Schema(
    {
        name: { type: String , required: true },
        date: { type: Date , required: true },
        end_date:  { type: Date , required: true },
        project_value:  { type: Number , required: true },
        risk:  { type: Number , required: true },
        participants: { type: String , required: true },
    },
    {
        timestamps: true
    }
)
projectSchema.plugin(mongoosePaginate);

export default model("project", projectSchema);

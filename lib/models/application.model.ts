import mongoose from "mongoose";

var Schema = mongoose.Schema;

var applicationSchema = new Schema(
  {
    
    app_name: { type: String, required: true, unique: true },
    app_description: { type: String, required: true },
    primary_admin: { type: Schema.Types.ObjectId, ref: "User",required: true },
    secondary_admins: [{ type: Schema.Types.ObjectId, ref: "User" }],
    environments: [
      {
         ETE1:[
          {
            url: { type: Schema.Types.ObjectId, ref: "Url" },
          }
         ] 
      },

    ],
  },
  {
    timestamps: true,
  }
);

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);

export default Application;

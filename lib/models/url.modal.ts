import { Schema, model, models } from "mongoose";

const UrlSchema = new Schema({
  url_type: { type: String, required: true,},
  url_link: { type: String, required: true, unique: true },
  client_apps: [{ type: String,}],
  app: { type: Schema.Types.ObjectId, ref: "Application" },
});

const Url = models.Url || model("Url", UrlSchema);

export default Url;
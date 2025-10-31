



import mongoose, { Schema, Document } from "mongoose";


// TypeScript interface (for type safety)
export interface IExperience extends Document {
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
}

// Mongoose Schema
const experienceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
});

// correct export
export const Experience = mongoose.model<IExperience>(
  "Experience",
  experienceSchema
);

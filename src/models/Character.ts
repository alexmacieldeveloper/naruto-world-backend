import mongoose, { Document, Schema } from 'mongoose';

export interface ICharacter extends Document {
  name: string;
  village: string;
  chakra: number;
  rank: string;
  abilities: string[];
}

const characterSchema = new Schema<ICharacter>({
  name: { type: String, required: true },
  village: { type: String, required: true },
  chakra: { type: Number, required: true },
  rank: { type: String, required: true },
  abilities: { type: [String], required: true },
});

export const Character = mongoose.model<ICharacter>('Character', characterSchema);

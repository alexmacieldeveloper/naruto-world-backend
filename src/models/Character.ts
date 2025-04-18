import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clan: { type: String },
  village: { type: String },
  rank: { type: String },
  jutsus: [{ type: String }],
  description: { type: String },
  image: { type: String },
}, {
  timestamps: true,
});

export const Character = mongoose.model('Character', characterSchema);

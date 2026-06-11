const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    category: { 
      type: String, 
      enum: ['Addon Car', 'Addon Bike', 'Properties', 'Design', 'Peds & Gangs'], 
      required: true 
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Donation', donationSchema);

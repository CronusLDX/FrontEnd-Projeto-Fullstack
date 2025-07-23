const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

interface ClientSchemaProps {
  id: string;
  name: string;
  cpf: string;
  dateOfBirth: string;
  email?: string;
  phone: string;
  status: string;
  fgtsBalance: number;
  balanceWithdraw?: number;
  dateOfRegistration: string;
  modality: string;
  observation?: string;
  autorization: string;
  withdrawAtendant?: string;
  withdrawDate?: string;
  description?: string;
}

const ClientSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4(),
    },
    name: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    email: { type: String },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    fgtsBalance: {
      type: Number,
      required: true,
    },
    balanceWithdraw: {
      type: Number,
    },
    dateOfRegistration: {
      type: String,
      required: true,
    },
    modality: {
      type: String,
      required: true,
    },
    observation: {
      type: String,
    },
    autorization: {
      type: String,
      required: true,
    },
    withdrawAtendant: {
      type: String,
    },
    withdrawDate: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model('Client', ClientSchema);

module.exports = ClientModel;

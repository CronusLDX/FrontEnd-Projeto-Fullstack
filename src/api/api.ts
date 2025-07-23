import axios from 'axios';
import type { ClientProps } from '../interfaces/Interface';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_DEV_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

export const getAllClients = async () => api.get('/clients');
export const postClient = async (data: ClientProps) =>
  api.post('/clients', data);
export const putClient = async (id: string, data: ClientProps) =>
  api.put(`/clients/${id}`, data);
export const deleteClientById = async (id: string) =>
  api.delete(`/clients/${id}`);

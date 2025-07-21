export interface ClientProps {
  seqId?: number;
  name: string;
  cpf: string;
  dateOfBirth: string;
  email?: string;
  phone: string;
  status: string;
  fgtsBalance: string;
  balanceWithdraw: string;
  dateOfRegistration: string;
  observation?: string;
  modality: string;
  autorization: string;
  withdrawAtendant: string;
  withdrawDate: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ClientContextProps {
  clients: ClientProps[];
}

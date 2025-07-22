export interface ClientProps {
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
  observation?: string;
  modality: string;
  autorization: string;
  withdrawAtendant?: string;
  withdrawDate?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClientContextProps {
  clients: ClientProps[];
  handleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
  deleteClient: (seqId: string) => void;
  handleChange: (
    seqId: string | undefined,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  updateClient: (item: ClientProps) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}

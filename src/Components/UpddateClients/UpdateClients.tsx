import React, { useEffect } from 'react';
import { Main } from './styled';
import { useParams } from 'react-router';
import { useClient } from '../../contexts/ClientContext';
import type { ClientProps } from '../../interfaces/Interface';

const UpdateClients: React.FC = () => {
  const { seqId } = useParams();
  const { clients, updateClient, handleChange } = useClient();

  const foundItem: ClientProps | undefined = clients.find(
    client => client.seqId === seqId
  );

  const [item, setItem] = React.useState<ClientProps | undefined>(foundItem);

  if (!item) {
    return (
      <div>
        <h1>Item not found</h1>
      </div>
    );
  }

  useEffect(() => {
    setItem(foundItem);
  }, [foundItem]);
  return (
    <Main>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          updateClient(item);
        }}
      >
        <section>
          <div>
            <label htmlFor="name">&nbsp;Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ex: João Pedro"
              value={item.name}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
          <div>
            <label htmlFor="cpf">&nbsp;CPF:</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Ex: 123.456.789-00"
              value={item.cpf}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={item.dateOfBirth}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">&nbsp;Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ex: exemplo@email.com"
              value={item.email}
              onChange={e => handleChange(seqId, e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="phone">&nbsp;Telefone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Ex: (11) 99999-9999"
              value={item.phone}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
          <div>
            <label htmlFor="status">&nbsp;Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              placeholder="Ex: ativo"
              value={item.status}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fgtsBalance">&nbsp;Saldo do FGTS (R$):</label>
            <input
              type="text"
              id="fgtsBalance"
              name="fgtsBalance"
              placeholder="Ex: 1000.00"
              value={item.fgtsBalance}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
          <div>
            <label htmlFor="balanceWithdraw">&nbsp;Saldo Sacado (R$):</label>
            <input
              type="text"
              id="balanceWithdraw"
              name="balanceWithdraw"
              placeholder="Ex: 500.00"
              value={item.balanceWithdraw}
              onChange={e => handleChange(seqId, e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="dateOfRegistration">&nbsp;Data de Registro:</label>
            <input
              type="date"
              id="dateOfRegistration"
              name="dateOfRegistration"
              value={item.dateOfRegistration}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
          <div>
            <label htmlFor="modality">&nbsp;Modalidade:</label>
            <input
              type="text"
              id="modality"
              name="modality"
              placeholder="Ex: Saque Aniversário"
              value={item.modality}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="autorization">&nbsp;Autorização:</label>
            <input
              type="text"
              id="autorization"
              name="autorization"
              placeholder="Ex: Sim"
              value={item.autorization}
              onChange={e => handleChange(seqId, e)}
              required
            />
          </div>
          <div>
            <label htmlFor="withdrawAtendant">&nbsp;Atendente do Saque:</label>
            <input
              type="text"
              id="withdrawAtendant"
              name="withdrawAtendant"
              placeholder="Ex: Maria Joaquina"
              value={item.withdrawAtendant}
              onChange={e => handleChange(seqId, e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="withdrawDate">&nbsp;Data do Saque:</label>
            <input
              type="date"
              id="withdrawDate"
              name="withdrawDate"
              value={item.withdrawDate}
              onChange={e => handleChange(seqId, e)}
            />
          </div>
          <div>
            <label htmlFor="observation">&nbsp;Observação:</label>
            <input
              type="text"
              id="observation"
              name="observation"
              placeholder="Ex: Observação"
              value={item.observation}
              onChange={e => handleChange(seqId, e)}
            />
          </div>
        </section>
        <div>
          <label htmlFor="description">&nbsp;Descrição:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Ex: Descrição"
            value={item.description}
            onChange={e => handleChange(seqId, e)}
          ></textarea>
        </div>
        <button id="save" type="submit">
          Salvar
        </button>
      </form>
      <footer>
        Criado em &nbsp; <span>{item.createdAt}</span>
        &nbsp; &nbsp; ID: &nbsp; <span>{item.seqId}</span>
        &nbsp; &nbsp; Atualizado em: &nbsp;
        <span>{item.updatedAt}</span>
      </footer>
    </Main>
  );
};

export default UpdateClients;

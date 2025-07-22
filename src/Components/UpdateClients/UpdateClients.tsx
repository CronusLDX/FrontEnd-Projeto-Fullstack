import React, { useEffect } from 'react';
import { Main } from './styled';
import { useParams } from 'react-router';
import { useClient } from '../../contexts/ClientContext';
import type { ClientProps } from '../../interfaces/Interface';

const UpdateClients: React.FC = () => {
  const { id } = useParams();
  const { clients, updateClient } = useClient();

  if (!id) {
    return <h1>ID inválido</h1>;
  }

  const foundItem: ClientProps | undefined = clients.find(
    client => client.id === id
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
          if (item) updateClient(item);
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
              onChange={e => setItem({ ...item, name: e.target.value })}
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
              onChange={e => setItem({ ...item, cpf: e.target.value })}
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
              onChange={e => setItem({ ...item, dateOfBirth: e.target.value })}
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
              onChange={e => setItem({ ...item, email: e.target.value })}
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
              onChange={e => setItem({ ...item, phone: e.target.value })}
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
              onChange={e => setItem({ ...item, status: e.target.value })}
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
              onChange={e =>
                setItem({ ...item, fgtsBalance: parseFloat(e.target.value) })
              }
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
              onChange={e =>
                setItem({
                  ...item,
                  balanceWithdraw: parseFloat(e.target.value),
                })
              }
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
              onChange={e =>
                setItem({ ...item, dateOfRegistration: e.target.value })
              }
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
              onChange={e => setItem({ ...item, modality: e.target.value })}
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
              onChange={e => setItem({ ...item, autorization: e.target.value })}
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
              onChange={e =>
                setItem({ ...item, withdrawAtendant: e.target.value })
              }
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
              onChange={e => setItem({ ...item, withdrawDate: e.target.value })}
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
              onChange={e => setItem({ ...item, observation: e.target.value })}
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
            onChange={e => setItem({ ...item, description: e.target.value })}
          ></textarea>
        </div>
        <button id="save" type="submit">
          Salvar
        </button>
      </form>
      <footer>
        Criado em &nbsp; <span>{item.createdAt}</span>
        &nbsp; &nbsp; ID: &nbsp; <span>{item.id}</span>
        &nbsp; &nbsp; Atualizado em: &nbsp;
        <span>{item.updatedAt}</span>
      </footer>
    </Main>
  );
};

export default UpdateClients;

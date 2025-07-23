const dotenv = require('dotenv');
const DB = require('./database/connection');
const ServerOne = require('./server/server');

// configuração de variáveis de ambiente
dotenv.config();

//configurando porta 8080
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;

// configurar servidor
const connectToDB = new DB();

const run = async (): Promise<void> => {
  try {
    await connectToDB.Connect();
  } catch (error: any) {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error', error.message);
    }
  }
};
const server = new ServerOne();

run()
  .then(() => console.log('Conectado ao banco de dados com sucesso'))
  .catch(error => console.log(error))
  .finally(() => server.listen(port));

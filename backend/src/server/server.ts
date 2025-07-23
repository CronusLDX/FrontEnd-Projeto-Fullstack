const express = require('express');
const Controllers = require('../controllers/user.controller');
const cors = require('cors');

class Server {
  private app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    const router = express.Router();

    // GET
    router.get('/clients', Controllers.getAllUsers);

    // POST
    router.post('/clients', Controllers.postClient);

    // PUT
    router.put('/clients/:id', Controllers.updateClient);

    // DELETE
    router.delete('/clients/:id', Controllers.deleteClient);

    this.app.use(router);
  }
  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`O servidor esta rodando na porta ${port}`);
    });
  }
}

module.exports = Server;

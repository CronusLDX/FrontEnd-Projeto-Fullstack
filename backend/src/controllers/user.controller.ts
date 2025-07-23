import type { Request, Response } from 'express';
const ClientModel = require('../models/user.model');

class Controllers {
  // GET
  static async getAllUsers(req: Request, res: Response) {
    try {
      const user = await ClientModel.find();
      user
        ? res.status(200).json(user)
        : res.status(404).send({ error: 'User not found' });
    } catch (error: any) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Unknown error' });
      }
    }
  }

  // POST
  static async postClient(req: Request, res: Response) {
    try {
      const user = await ClientModel.create(req.body);
      user
        ? res.status(201).json(user)
        : res.status(404).send({ error: 'User not found' });
    } catch (error: any) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Unknown error' });
      }
    }
  }

  // PUT
  static async updateClient(req: Request, res: Response) {
    try {
      const user = await ClientModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      user
        ? res.status(200).json(user)
        : res.status(404).send({ error: 'User not found' });
    } catch (error: any) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Unknown error' });
      }
    }
  }

  // delete
  static async deleteClient(req: Request, res: Response) {
    try {
      const user = await ClientModel.findByIdAndDelete(req.params.id);
      user
        ? res.status(200).json(user)
        : res.status(404).send({ error: 'User not found' });
    } catch (error: any) {
      if (error instanceof Error) {
        res.status(500).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Unknown error' });
      }
    }
  }
}

module.exports = Controllers;

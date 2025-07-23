const Mongoose = require('mongoose');

class Database {
  private user: string | undefined;
  private password: string | undefined;
  private connection: string;

  constructor() {
    this.user = process.env.MONGODB_USER;
    this.password = process.env.MONGODB_PASSWORD;
    this.connection = `mongodb+srv://${this.user}:${this.password}@aprendendo-nodejs.x7ao5wv.mongodb.net/?retryWrites=true&w=majority&appName=Aprendendo-NodeJS`;
  }

  getConnection(): string {
    return this.connection;
  }
  getUser(): string | undefined {
    if (this.user === undefined) {
      throw new Error('User not found or not declared');
    }
    return this.user;
  }
  getPassword(): string | undefined {
    if (this.password === undefined) {
      throw new Error('Password not found or not declared');
    }
    return this.password;
  }

  async Connect() {
    try {
      await Mongoose.connect(this.connection);
    } catch (error: any) {
      if (error.response) {
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error', error.message);
      }
    }
  }
}

module.exports = Database;

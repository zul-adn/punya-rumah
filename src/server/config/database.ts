import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env file');
}

export const MONGODB_URI = process.env.MONGODB_URI;
export const DB_NAME = process.env.DB_NAME;

export class MongoDB {
  private static instance: MongoDB;
  private client: MongoClient;
  private constructor() {
    this.client = new MongoClient(MONGODB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
      },
      ignoreUndefined: true
    });
  }

  public static async getInstance(): Promise<MongoDB> {
    if (!MongoDB.instance) {
      MongoDB.instance = new MongoDB();
      await MongoDB.instance.connect();
    }
    return MongoDB.instance;
  }

  private async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }

  public getClient(): MongoClient {
    return this.client;
  }

  public getDb() {
    return this.client.db(DB_NAME);
  }
}

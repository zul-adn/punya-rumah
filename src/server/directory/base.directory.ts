import { Collection, ObjectId } from 'mongodb';
import { MongoDB } from '../config/database';

export abstract class BaseRepository<T> {
  protected collection!: Collection;
  private initializationPromise: Promise<void>;

  constructor(collectionName: string) {
    this.initializationPromise = this.initializeCollection(collectionName);
  }

  private async initializeCollection(collectionName: string) {
    const mongodb = await MongoDB.getInstance();
    this.collection = mongodb.getDb().collection(collectionName);
  }

  protected async ensureCollection(): Promise<void> {
    await this.initializationPromise;
  }

  async findAll(): Promise<T[]> {
    await this.ensureCollection();
    return this.collection.find().toArray() as Promise<T[]>;
  }

  async findById(id: string): Promise<T | null> {
    await this.ensureCollection();
    return this.collection.findOne({
      _id: new ObjectId(id),
    }) as Promise<T | null>;
  }

  async findOne(filter: Partial<T>): Promise<T | null> {
    await this.ensureCollection();
    return this.collection.findOne(filter) as Promise<T | null>;
  }

  async find(filter: Partial<T>): Promise<T[]> {
    await this.ensureCollection();
    return this.collection.find(filter).toArray() as Promise<T[]>;
  }

  async create(data: Omit<T, '_id'>): Promise<T> {
    await this.ensureCollection();
    const result = await this.collection.insertOne(data as any);
    return { ...data, _id: result.insertedId } as T;
  }

  async update(id: string, data: Partial<T>): Promise<boolean> {
    await this.ensureCollection();
    const result = await this.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    );
    return result.modifiedCount > 0;
  }

  async delete(id: string): Promise<boolean> {
    await this.ensureCollection();
    const result = await this.collection.deleteOne({
      _id: new ObjectId(id),
    });
    return result.deletedCount > 0;
  }
}

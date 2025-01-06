import { BaseRepository } from './base.directory';
import { z } from 'zod';
import { ObjectId } from 'mongodb';
import { PropertySchema } from '../schema/property.schema';

export type PropertyDocument = z.infer<typeof PropertySchema> & { _id: string };

export interface BulkWriteResult {
  ids: string[];
  insertedCount: number;
  modifiedCount: number;
  totalCount: number;
}

export class PropertyRepository extends BaseRepository<PropertyDocument> {
  constructor() {
    super('properties');
  }

//   async findAllByInvestorEmail(email: string): Promise<any[]> {
//     await this.ensureCollection();
//     return this.collection.find({ investor_email: email }).toArray();
//   }

  async findWithPagination(
    skip: number,
    limit: number,
  ): Promise<any[]> {
    await this.ensureCollection();
    return this.collection
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();
  }

//   async insertOrUpdateDealList(deals: DealInput[]): Promise<BulkWriteResult> {
//     await this.ensureCollection();

//     if (deals.length === 0) {
//       return {
//         ids: [],
//         insertedCount: 0,
//         modifiedCount: 0,
//         totalCount: 0,
//       };
//     }

//     // First, find existing documents to get their IDs
//     const existingDeals = await this.collection
//       .find(
//         {
//           $or: deals.map((deal) => ({
//             investor_email: deal.investor_email,
//             'profile.external_id': deal.profile.external_id,
//           })),
//         },
//         {
//           projection: { _id: 1, investor_email: 1, 'profile.external_id': 1 },
//         }
//       )
//       .toArray();

//     // Create a map for quick lookup of existing deals
//     const existingDealsMap = new Map(
//       existingDeals.map((deal) => [
//         `${deal.investor_email}-${deal.profile.external_id}`,
//         deal._id.toString(),
//       ])
//     );

//     // Prepare operations and track IDs
//     const operations = deals.map((deal) => {
//       const lookupKey = `${deal.investor_email}-${deal.profile.external_id}`;
//       const existingId = existingDealsMap.get(lookupKey);
//       const newId = existingId || new ObjectId().toString();

//       return {
//         updateOne: {
//           filter: {
//             investor_email: deal.investor_email,
//             'profile.external_id': deal.profile.external_id,
//           },
//           update: {
//             $set: {
//               ...deal,
//               _id: new ObjectId(newId),
//               updated_at: new Date(),
//             },
//           },
//           upsert: true,
//         },
//         id: newId,
//       };
//     });

//     // Execute bulk write
//     const bulkWriteResult = await this.collection.bulkWrite(
//       operations.map((op) => ({
//         updateOne: op.updateOne,
//       }))
//     );

//     // Return comprehensive result
//     return {
//       ids: operations.map((op) => op.id),
//       insertedCount: bulkWriteResult.upsertedCount,
//       modifiedCount: bulkWriteResult.modifiedCount,
//       totalCount: operations.length,
//     };
//   }

//   async allDealsCount(email: string, status: string | undefined): Promise<number> {
//     await this.ensureCollection();
//     return this.collection.countDocuments({ investor_email: email, status });
//   }

//   async deleteDealsByEmail(email: string): Promise<number> {
//     await this.ensureCollection();
//     const result = await this.collection.deleteMany({ investor_email: email });
//     return result.deletedCount;
//   }

//   async deleteEverything(): Promise<number> {
//     await this.ensureCollection();
//     const result = await this.collection.deleteMany({});
//     return result.deletedCount;
//   }

//   async updateById(id: string, payload: any) {
//       await this.ensureCollection();

//       const filter = { _id: new ObjectId(id) };
//       const update = payload
  
//       const result = await this.collection.findOneAndUpdate(filter, {$set: update}, {upsert : true})
//       return result
      
//   }
}

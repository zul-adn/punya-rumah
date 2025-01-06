import { PropertyRepository } from '@/server/directory/property.directory';
import { PropertyDocument } from '@/server/schema/property.schema';

export class PropertyService {
  private repository: PropertyRepository;

  constructor() {
    this.repository = new PropertyRepository();
}

  async getPropertiesWithPagination(
    skip: number,
    limit: number,
  ): Promise<[PropertyDocument[]]> {
  
    const [properties] = await Promise.all([
      this.repository.findWithPagination(skip, limit),
     
    ]);
    console.log(properties)
    return [properties];
  }

}

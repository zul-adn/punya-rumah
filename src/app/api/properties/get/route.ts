import { PropertyService } from "@/server/service/property/property.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
  try {
    const body = await request.json();
    const {  page = 1, limit = 10  } = body;

    const skip = (page - 1) * limit;

    const propertyService = new PropertyService();
    const [ properties ] = await propertyService.getPropertiesWithPagination(
      skip,
      limit,
    );
    const total = properties.length
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      status: 'success',
      data: {
        properties,
        pagination: {
          current_page: page,
          total_pages: totalPages,
          total_items: total,
          items_per_page: limit,
          has_next_page: page < totalPages,
          has_prev_page: page > 1,
        },
      },
    });
  } catch (error) {
    console.error('Error fetching deals:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// FILTER FEATURE
// Berdasarkan Harga
// Berdasarkan Type
// Berdasarkan Subsidi
// Berdasarkan Lokasi Kota
// Beradasrkan Lokasi Zona


import { z } from "zod";
import { ObjectId } from 'mongodb';

export const PropertySchema = z.object({
  id: z.string().uuid().or(z.string().regex(/^\d+$/)), // UUID or numeric string
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  type: z.enum(["Apartment", "House", "Commercial", "Villa", "Townhouse"]), // Allowed property types
  address: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(2, "State is required"),
    country: z.string().min(1, "Country is required"),
    zipCode: z.string().regex(/^\d{5}$/, "Zip Code must be 5 digits"),
  }),
  features: z.object({
    bedrooms: z.number().int().min(0),
    bathrooms: z.number().int().min(0),
    area: z.number().positive(), // in square feet
    parkingSpaces: z.number().int().min(0),
    amenities: z.array(z.string()).nonempty("At least one amenity is required"),
  }),
  images: z.array(z.string().url()).nonempty("At least one image is required"),
  status: z.object({
    forSale: z.boolean(),
    forRent: z.boolean(),
  }),
  pricing: z.object({
    salePrice: z.number().positive().optional(),
    rentalPrice: z.number().positive().optional(),
    currency: z.string().default("IDR"),
  }),
  availability: z.object({
    availableForSale: z.boolean(),
    availableForRent: z.boolean(),
  }),
  contactDetails: z.object({
    agentName: z.string().min(1, "Agent name is required"),
    phone: z.string().regex(/^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/, "Invalid phone number format"),
    email: z.string().email("Invalid email address"),
  }),
  additionalInfo: z.object({
    petFriendly: z.boolean().optional(),
    furnished: z.boolean().optional(),
    yearBuilt: z.number().int().min(1800).max(new Date().getFullYear()),
  }),
});

export type PropertyType = z.infer<typeof PropertySchema>;
export type PropertyDocument = PropertyType & { _id: ObjectId };
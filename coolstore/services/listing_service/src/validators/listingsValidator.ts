import { z } from 'zod';

export const ListQuery = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  q: z.string().trim().min(1).optional(),
  brand: z.string().trim().optional(),
  model: z.string().trim().optional(),
  segment: z.string().trim().optional(),
  year: z.coerce.number().int().optional(),
  color: z.string().trim().optional(),
  status: z.enum(['DRAFT','ACTIVE','HIDDEN','SOLD']).optional(),
  is_hot: z.coerce.boolean().optional(),
  minPrice: z.coerce.number().nonnegative().optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  sort: z.enum([
    'price_asc','price_desc','year_newest','year_oldest','brand_asc','brand_desc'
  ]).optional()
});
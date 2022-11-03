const { z } = require('zod');
const { 
  userRoles: { admin, customer, seller },
  saleStatuses: { pendente, preparando, emTransito, entregue },
} = require('../utils/staticData');

const userSchema = z.object({
  name: z.string().min(12),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum([admin, customer, seller]).optional(),
});

const saleSchema = z.object({
  clientId: z.number().int(),
  sellerId: z.number().int(),
  totalPrice: z.number().min(0),
  deliveryAddress: z.string(),
  deliveryNumber: z.string(),
  saleDate: z.string(),
  status: z.enum([pendente, preparando, emTransito, entregue]),
});

module.exports = {
  userSchema,
  saleSchema,
};

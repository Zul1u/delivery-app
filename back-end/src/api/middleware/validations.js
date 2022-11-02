const { z } = require('zod');
const { 
  userRoles: { admin, customer, seller },
} = require('../utils/staticData');

const userSchema = z.object({
  name: z.string().min(12),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum([admin, customer, seller]).optional(),
});

const saleSchema = z.object({
  userId: z.number().int(),
  userRole: z.enum([admin, customer, seller]),
  totalPrice: z.number().min(0),
  deliveryAddress: z.string(),
  deliveryNumber: z.string(),
});

module.exports = {
  userSchema,
  saleSchema,
};

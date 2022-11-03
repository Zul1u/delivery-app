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

// o backend faz o timestamp da data da compra
// a compra sempre inicia um status "Pendente", então não tem necessidade de passar essa info
// o backend faz o calculo do preço total dos produtos, como uma camada extra de segurança
const saleSchema = z.object({
  customerId: z.number().int(),
  sellerId: z.number().int(),
  deliveryAddress: z.string(),
  deliveryNumber: z.string(),
  products: z.object(),
});

module.exports = {
  userSchema,
  saleSchema,
};

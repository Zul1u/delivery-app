const RequestError = require('../utils/RequestError');
const { saleStatuses } = require('../utils/staticData');
const { saleSchema, userSchema } = require('./validations');

const isValid = async (object, schema) => {
  const parsed = schema.safeParse(object);
  return parsed.success;
};

const newSale = async (req, _res, next) => {
  const { body } = req;
  
  if (!isValid(body, saleSchema)) return next(RequestError.invalidSale());

  return next();
};

const newUser = async (req, _res, next) => {
  const { body } = req;
  
  if (!isValid(body, userSchema)) return next(RequestError.invalidUser());

  return next();
};

const saleStatus = async (req, _res, next) => {
  const { params: { status } } = req;
  
  if (!Object.values(saleStatuses).includes(status)) {
    return next(RequestError.invalidSaleStatus());
  }

  return next();
};

module.exports = {
  newSale,
  newUser,
  saleStatus,
};

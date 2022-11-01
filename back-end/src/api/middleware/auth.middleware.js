const RequestError = require('../utils/RequestError');
const { userRoles } = require('../utils/staticData');
const token = require('../utils/token');

const auth = async (authorizedRole, req, next) => {
  const { headers: { authorization } } = req;
  
  if (!authorization) return next(RequestError.tokenNotFound());

  try {
    const { role, id } = token.verify(authorization);
    if (authorizedRole && role !== authorizedRole) return next(RequestError.unauthorized());
    req.headers.userId = id;
    return next();
  } catch (error) {
    return next(RequestError.invalidToken());
  }
};

const any = async (req, _res, next) => {
  await auth('', req, next);
};

const seller = async (req, _res, next) => {
  await auth(userRoles.seller, req, next);
};

const admin = async (req, _res, next) => {
  await auth(userRoles.admin, req, next);
};

module.exports = {
  any,
  seller,
  admin,
};

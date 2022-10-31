const { StatusCodes } = require('http-status-codes');

const errorMiddleware = (error, _req, res, _next) => {
  const { statusCode, message, stack } = error;

  if (statusCode) {
    return res.status(statusCode).json({ message });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Corram para as colinas!', stack, error });
};

module.exports = errorMiddleware;
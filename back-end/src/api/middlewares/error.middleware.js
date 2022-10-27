import StatusCode from 'http-status-codes';

const errorMiddleware = (error, _req, res, _next) => {
  const { statusCode, message } = error;

  if(statusCode) {
    return res.status(statusCode).json({ message });
  }

  return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Corram para as colinas.', error });
};

export default errorMiddleware;
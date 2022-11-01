const { StatusCodes } = require('http-status-codes');

class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  static invalidEmail() {
    return new RequestError('Invalid email.', StatusCodes.BAD_REQUEST);
  }

  static invalidPassword() {
    return new RequestError('Invalid password.', StatusCodes.BAD_REQUEST);
  }

  static emailAlreadyRegistered() {
    return new RequestError('Email already registered.', StatusCodes.CONFLICT);
  }

  static userNotFound() {
    return new RequestError('User not found.', StatusCodes.NOT_FOUND);
  }
  
  static productNotFound() {
    return new RequestError('Product not found.', StatusCodes.NOT_FOUND);
  }

  static saleNotFound() {
    return new RequestError('Sale not found.', StatusCodes.NOT_FOUND);
  }

  static invalidToken() {
    return new RequestError('Invalid token.', StatusCodes.UNAUTHORIZED);
  }

  static invalidSaleStatus() {
    return new RequestError(
      'Sale status must be one of the following: 1 - Pendente, 2 - Preparando, 3 - Em Trânsito',
      StatusCodes.BAD_REQUEST,
    );
  }
}

module.exports = RequestError;

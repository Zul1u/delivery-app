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
    return new RequestError('One or more products not found.', StatusCodes.NOT_FOUND);
  }

  static saleNotFound() {
    return new RequestError('Sale not found.', StatusCodes.NOT_FOUND);
  }

  static emptySale() {
    return new RequestError('Sale has no products.', StatusCodes.BAD_REQUEST);
  }

  static tokenNotFound() {
    return new RequestError('Token not found.', StatusCodes.UNAUTHORIZED);
  }

  static invalidToken() {
    return new RequestError('Invalid token.', StatusCodes.UNAUTHORIZED);
  }

  static unauthorized() {
    return new RequestError('Unauthorized.', StatusCodes.UNAUTHORIZED);
  }

  static invalidUser() {
    return new RequestError('Invalid user.', StatusCodes.BAD_REQUEST);
  }

  static invalidSale() {
    return new RequestError('Invalid sale.', StatusCodes.BAD_REQUEST);
  }

  static invalidSaleStatus() {
    return new RequestError('Invalid sale status.', StatusCodes.BAD_REQUEST);
  }
}

module.exports = RequestError;

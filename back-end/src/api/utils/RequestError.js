const { StatusCodes } = require('http-status-codes');

class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  // static invalidEmail() {
  //   return new RequestError('Invalid email.', StatusCodes.BAD_REQUEST);
  // }

  // static invalidPassword() {
  //   return new RequestError('Invalid password.', StatusCodes.BAD_REQUEST);
  // }

  static emailAlreadyRegistered() {
    return new RequestError('Email already registered.', StatusCodes.CONFLICT);
  }

  static userNotFound() {
    return new RequestError('User not found.', StatusCodes.NOT_FOUND);
  }
  
  static productNotFound() {
    return new RequestError('Product not found.', StatusCodes.NOT_FOUND);
  }

  static invalidToken() {
    return new RequestError('Invalid token.', StatusCodes.UNAUTHORIZED);
  }
}

module.exports = RequestError;

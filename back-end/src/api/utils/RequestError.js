import StatusCodes from 'http-status-codes';

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

  static userAlreadyRegistered() {
    return new RequestError('User already registered', StatusCodes.BAD_REQUEST);
  }

  static userNotFound() {
    return new RequestError('User not found', StatusCodes.NOT_FOUND);
  }
}

module.exports = RequestError;

import StatusCodes from 'http-status-codes';

class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  static invalidLogin() {
    return new RequestError('Invalid login.', StatusCodes.BAD_REQUEST);
  }
}

module.exports = RequestError;

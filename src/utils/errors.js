// eslint-disable-next-line max-classes-per-file
class GeneralError extends Error {
  constructor (message) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    } if (this instanceof NotFound) {
      return 404;
    }
    return 500;
  }
}

export default GeneralError;

export class BadRequest extends GeneralError { }
export class NotFound extends GeneralError { }

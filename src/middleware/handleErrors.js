import GeneralError from '../utils/errors';

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      code: err.getCode(),
      message: err.message,
    });
  }

  next();
  return res.status(500).json({
    status: 'error',
    code: 500,
    message: err.message,
  });
};

export default handleErrors;

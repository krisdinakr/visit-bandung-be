class Response {
  static success = (data = null, meta = null, message = null) => {
    const response = {
      status: 'success',
      code: 200,
    };

    if (data !== null) {
      response.data = data;
    }

    if (meta !== null) {
      response.meta = meta;
    }

    if (message !== null) {
      response.message = message;
    }

    return response;
  };
}

export default Response;

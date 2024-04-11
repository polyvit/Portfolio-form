class WebError {
  constructor(status, error) {
    this.status = status;
    this.error = error;
  }
}

export class Conflict extends WebError {
  constructor(error) {
    super(409, error);
  }
}

class ErrorUtils {
  static catchError(res, error) {
    console.log(error);
    return res.status(error.status || 500).json(error);
  }
}

export default ErrorUtils;

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(message = "Bad Request") {
    super(messsage, 400);
  }
}

class UnathorizedError extends ExpressError {
  constructor(message = "Unathorized") {
    super(messsage, 401);
  }
}

class ForbiddenError extends ExpressError {
  constructor(message = "Forbidden") {
    super(messsage, 403);
  }
}

class NotFoundError extends ExpressError {
  constructor(message = "Not Found") {
    super(messsage, 404);
  }
}

module.exports = {
  ExpressError,
  UnathorizedError,
  ForbiddenError,
  NotFoundError,
};

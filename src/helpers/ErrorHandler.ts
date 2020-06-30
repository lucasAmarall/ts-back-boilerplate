class ErrorHandler extends Error {
  statusCode!: number;
  message!: string;

  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    delete message._original;
    this.message = message;
  }
}

export default ErrorHandler;
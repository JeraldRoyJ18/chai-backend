class ApiResponse {
  constructor(status, data, message = "Success") {
    this.statusCode = statusCode;
    (this.data = data),
      (this.message = message),
      (this.sucess = statusCode < 400);
  }
}

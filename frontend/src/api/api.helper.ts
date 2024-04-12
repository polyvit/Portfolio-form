class ApiHelper {
  static getErrorMessage(error: any): string {
    const message = error?.response?.data?.message;

    return message
      ? typeof error.response.data.message === "object"
        ? message[0]
        : message
      : error.message;
  }
}

export default ApiHelper
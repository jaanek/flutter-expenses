class AsyncFetch<T> {
  T data;
  Object error;

  AsyncFetch({this.data, this.error});

  hasData() {
    return data != null;
  }

  hasError() {
    return error != null;
  }
}

class FetchError extends Error {
  String message;
  FetchError(this.message);
}

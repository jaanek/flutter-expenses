class AsyncFetch<T> {
  T data;
  Object error;

  AsyncFetch({this.data, this.error});

  bool hasData() {
    return data != null;
  }

  bool hasError() {
    return error != null;
  }
}

class FetchError extends Error {
  String message;
  FetchError(this.message);
}

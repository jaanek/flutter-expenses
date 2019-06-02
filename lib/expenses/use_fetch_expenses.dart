// import 'dart:async';
import 'dart:convert' as convert;
import 'package:http/http.dart' as http;
import 'package:flutter_hooks/flutter_hooks.dart';
import '../async_fetch.dart';
import './models/expense.dart';

const convert.JsonCodec json = convert.JsonCodec();
var baseUrl = "http://127.0.0.1:8080/api";

AsyncFetch<List<Expense>> useFetchExpenses() {
  var result = useState<AsyncFetch<List<Expense>>>(AsyncFetch());

  useEffect(() {
    print('Requesting data from server!');
    http.get('${baseUrl}/expenses-list').then((http.Response res) {
      if (res.statusCode == 200) {
        print('Got response from server: ${res.body}');
        List<Expense> list = [];
        Map<String, dynamic> body = json.decode(res.body);
        if (body['success'] == true) {
          var data = List<Map<String, dynamic>>.from(body['data']);
          if (data.length > 0) {
            data.forEach((Map<String, dynamic> item) {
              list.add(Expense.from(item));
            });
            result.value = AsyncFetch(data: list);
          }
        } else {
          result.value = AsyncFetch(error: FetchError("Failed to fetch data!"));
        }
      } else {
        result.value = AsyncFetch(error: FetchError("Failed to fetch data!"));
      }
    }).catchError((e) {
      result.value = AsyncFetch(error: e);
      print(e);
    });
  }, []);
  return result.value;
}

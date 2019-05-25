import 'dart:async';
import 'dart:convert' as convert;
import 'package:http/http.dart' as http;
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:wallet9/wallet9.dart';

const convert.JsonCodec json = convert.JsonCodec();
var baseUrl = "http://localhost:8080/expenses-list";

AsyncFetch<List<Expense>> useFetchExpenses() {
  var result = useState<AsyncFetch<List<Expense>>>(AsyncFetch());

  useEffect(() {
    http.get(baseUrl).then((http.Response res) {
      if (res.statusCode == 200) {
        var list = [];
        List<Map<String, dynamic>> data = json.decode(res.body);
        if (data.length > 0) {
          data.forEach((Map<String, dynamic> item) {
            list.add(fromJson(item));
          });
          result.value.data = list;
        }
      } else {
        result.value.error = FetchError("Failed to fetch data!");
      }
    }).catchError((e) {
      result.value.error = e;
      print(e);
    });
  }, []);
  return result.value;
}

fromJson(Map<String, dynamic> json) {
  return Expense(
    id: json['id'],
    category: json['category'],
    description: json['description'],
    transactionTime: json['transactionTime'],
    amount: json['amount'],
    currency: json['currency'],
  );
}

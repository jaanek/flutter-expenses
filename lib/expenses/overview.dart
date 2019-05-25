import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:wallet9/wallet9.dart';

class ExpensesOverview extends HookWidget {
  ExpensesOverview({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var result = useFetchExpenses();
    return Scaffold(
      appBar: AppBar(title: Text("Expenses")),
      body: Container(),
    );
  }
}

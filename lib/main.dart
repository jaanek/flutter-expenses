import 'package:flutter/material.dart';
import 'expenses/overview_widget.dart';

void main() => runApp(Wallet9());

class Wallet9 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Expenses',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: ExpensesOverviewWidget(),
    );
  }
}

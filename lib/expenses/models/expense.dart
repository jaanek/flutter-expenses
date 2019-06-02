import 'dart:collection';
import '../utils.dart';

class Expense {
  int id;
  String category;
  String description;
  String transactionTime;
  double amount;
  String currency;
  // NB! derived fields from json
  DateTime date;

  Expense(
      {this.id,
      this.category,
      this.description,
      this.transactionTime,
      this.amount,
      this.currency,
      this.date});

  factory Expense.from(Map<String, dynamic> json) {
    return Expense(
      id: json['id'],
      category: json['category'],
      description: json['description'],
      transactionTime: json['transactionTime'],
      amount: double.parse(json['amount'] as String),
      currency: json['currency'],
      date: parseDate(json['transactionTime']),
    );
  }
}

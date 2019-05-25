import 'dart:collection';

class Expense {
  int id;
  String category;
  String description;
  String transactionTime;
  String amount;
  String currency;

  Expense(
      {this.id,
      this.category,
      this.description,
      this.transactionTime,
      this.amount,
      this.currency});
}

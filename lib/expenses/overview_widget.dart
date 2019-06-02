import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import '../async_fetch.dart';
import './use_fetch_expenses.dart';
import './models/expense_group.dart';
import './models/expense.dart';
import './category_listing_widget.dart';
import './utils.dart';

class ExpensesOverviewWidget extends HookWidget {
  ExpensesOverviewWidget({Key key}) : super(key: key);

  Widget buildBody(
      AsyncFetch<List<Expense>> result, List<ExpenseGroup> grouped) {
    if (result.hasError()) {
      return Text(result.error.toString());
    }
    if (result.hasData() == false) {
      return Center(
        child: CircularProgressIndicator(),
      );
    }
    return ListView.builder(
      itemCount: grouped?.length ?? 0,
      itemBuilder: (BuildContext ctx, int index) {
        ExpenseGroup item = grouped[index];
        return Card(
          child: ListTile(
            leading: FlutterLogo(),
            title: Text(item.category),
            trailing: Text('${formatAmount(item.amount)} ${item.currency}'),
            onTap: () {
              Navigator.push(ctx, MaterialPageRoute(
                builder: (BuildContext rctx) {
                  return CategoryListingWidget(
                      group: item, allExpenses: result.data);
                },
              ));
            },
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    var result = useFetchExpenses();
    var grouped = useMemoized<List<ExpenseGroup>>(
        () => groupExpenses(result.data), [result.data]);
    return Scaffold(
      appBar: AppBar(title: Text("Expenses")),
      body: buildBody(result, grouped),
    );
  }
}

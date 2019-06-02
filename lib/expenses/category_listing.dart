import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:wallet9/wallet9.dart';
import './utils.dart';

class CategoryListing extends HookWidget {
  ExpenseGroup group;
  // NB! It is better to fetch group listing in here and not provide all expenses from parent
  List<Expense> allExpenses;

  CategoryListing({this.group, this.allExpenses});

  Widget buildBody(AsyncFetch<List<CategoryListingSection>> result) {
    if (result.hasError()) {
      return Text(result.error.toString());
    }
    if (result.hasData() == false) {
      return Center(
        child: CircularProgressIndicator(),
      );
    }
    return ListView.builder(
      itemCount: result.data?.length ?? 0,
      itemBuilder: (BuildContext ctx, int index) {
        CategoryListingSection item = result.data[index];
        return CategoryListingSectionWidget(item);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    var result = useFetchCategoryListing(group, allExpenses);
    return Scaffold(
      appBar: AppBar(title: Text("Expenses details for ${group.category}")),
      body: buildBody(result),
    );
  }
}

class CategoryListingSectionWidget extends StatelessWidget {
  CategoryListingSection section;

  CategoryListingSectionWidget(this.section);

  @override
  Widget build(BuildContext context) {
    var body = <Widget>[
      Center(
          child: Text(
              '${section.date.day}/${section.date.month}/${section.date.year}',
              style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.w600,
                fontSize: 16.0,
              ))),
    ];
    section.items.forEach((Expense item) {
      body.add(Container(
        margin: EdgeInsets.only(top: 6),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Text(item.description),
            Text('${formatAmount(item.amount)} ${item.currency}'),
          ],
        ),
      ));
    });
    return Card(
      child: Padding(
        padding: EdgeInsets.all(10),
        child: Column(
          children: body,
        ),
      ),
    );
  }
}

AsyncFetch<List<CategoryListingSection>> useFetchCategoryListing(
    ExpenseGroup group, List<Expense> allExpenses) {
  var result = useState<AsyncFetch<List<CategoryListingSection>>>(AsyncFetch());
  // TODO! implement category listing items fetch over the network here
  // instead of relying on parent providing all the expenses in a list
  useEffect(() {
    result.value = AsyncFetch(data: groupCategoryListing(group, allExpenses));
  }, [group]);
  return result.value;
}

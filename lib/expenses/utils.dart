import "package:intl/intl.dart";
import 'package:wallet9/wallet9.dart';

final formatter = NumberFormat('##,###.00');
String formatAmount(num n) {
  final s = formatter.format(n);
  return s.endsWith('00') ? s.substring(0, s.length - 3) : s;
}

DateTime parseDate(String jsonDate) {
  return DateFormat("yyyy-MM-dd'T'hh:mm:ss").parse(jsonDate);
}

List<ExpenseGroup> groupExpenses(List<Expense> list) {
  if (list == null) {
    return null;
  }
  Map<String, ExpenseGroup> grouped = {};
  list.forEach((Expense item) {
    var group = grouped[item.category];
    if (group == null) {
      group = grouped[item.category] = ExpenseGroup(
        category: item.category,
        currency: item.currency,
      );
    }
    group.amount += item.amount;
  });
  var result = grouped.values.toList();
  result.sort((a, b) => b.amount.compareTo(a.amount));
  return result;
}

List<CategoryListingSection> groupCategoryListing(
    final ExpenseGroup group, List<Expense> list) {
  Map<String, CategoryListingSection> grouped = {};
  list.forEach((Expense item) {
    // filter out the groups that do not belogin into the listing
    if (item.category != group.category) {
      return;
    }
    var key = '${item.date.day}-${item.date.month}-${item.date.year}';
    var section = grouped[key];
    if (section == null) {
      section = grouped[key] = CategoryListingSection(
          date: DateTime(item.date.year, item.date.month, item.date.day));
    }
    section.items.add(item);
  });

  // sort the sections
  var result = grouped.values.toList();
  result.sort((a, b) => b.date.compareTo(a.date));

  // sort the expenses inside the sections
  result.forEach((CategoryListingSection section) {
    section.items.sort((a, b) => b.date.compareTo(a.date));
  });

  return result;
}

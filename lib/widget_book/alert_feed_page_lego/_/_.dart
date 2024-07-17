import 'package:flutter/material.dart';

import '../../../../../../../../../../../main.dart';
import 'item.dart';

class NewView extends StatefulWidget {
  const NewView({super.key});

  @override
  State<NewView> createState() => _NewViewState();
}

class _NewViewState extends State<NewView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: Text("Notifications")
            .textStyle(Theme.of(context).textTheme.titleLarge!)
            .fontWeight(FontWeight.bold),
      ),
      body: ListView(
        padding: EdgeInsets.symmetric(horizontal: 20),
        children: [
          ItemView(
            imagePath: 'assets/lego/alert_feed_page_lego/winter.jpg',
            name: "Display Name",
            description: " likes your post.",
            timeAge: " 3 hours ago",
          ),
          ItemView(
            imagePath: 'assets/lego/alert_feed_page_lego/winter.jpg',
            name: "Display Name",
            description: " appreciates your like.",
            timeAge: " 3 hours ago",
          ),
          // Add more Row widgets as needed for each notification
        ],
      ),
      floatingActionButton: FloatingActionButtonKit(),
    );
  }
}

main() async {
  return buildApp(home: NewView());
}

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
        title: Text("Feed")
            .textStyle(Theme.of(context).textTheme.titleLarge!)
            .fontWeight(FontWeight.bold),
        centerTitle: false,
      ),
      body: ListView(
        // padding: EdgeInsets.symmetric(horizontal: 15),
        children: [
          ItemView(),
          ItemView(),
          ItemView(),
          ItemView(),
          ItemView(),
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

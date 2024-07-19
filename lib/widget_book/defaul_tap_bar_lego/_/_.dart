import 'package:flutter/material.dart';

import '../../../../../../../../../../../main.dart';

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
      body: DefaultTabController(
        length: 3, // 탭의 개수
        child: Scaffold(
          appBar: AppBar(
            title: Text('TabBar'),
            bottom: TabBar(
              tabs: [
                Tab(icon: Icon(Icons.directions_car), text: "1"),
                Tab(icon: Icon(Icons.directions_bike), text: "2"),
                Tab(icon: Icon(Icons.directions_transit), text: "3"),
              ],
            ),
          ),
          body: TabBarView(
            children: [
              // 각 탭의 내용
              Icon(Icons.directions_car),
              Icon(Icons.directions_bike),
              Icon(Icons.directions_transit),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButtonKit(),
    );
  }
}

main() async {
  return buildApp(home: NewView());
}

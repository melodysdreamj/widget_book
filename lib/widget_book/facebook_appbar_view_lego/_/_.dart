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
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Text(
          'facebook',
          style: const TextStyle(
            color: Color(0xFF1777F2),
            fontSize: 28.0,
            fontWeight: FontWeight.bold,
            letterSpacing: -1.2,
          ),
        ),
        centerTitle: false,
        actions: [
          Container(
            height: 40,
            width: 40,
            margin: const EdgeInsets.all(6.0),
            decoration: BoxDecoration(
              color: Color(0xFFe6eef5),
              shape: BoxShape.circle,
            ),
            child: IconButton(
              icon: Icon(Icons.search),
              iconSize: 25,
              color: Colors.black,
              onPressed: () => print('Search'),
            ),
          ),
          Container(
            height: 40,
            width: 40,
            margin: const EdgeInsets.all(6.0),
            decoration: BoxDecoration(
              color: Color(0xFFe6eef5),
              shape: BoxShape.circle,
            ),
            child: IconButton(
              icon: Icon(Icons.message),
              iconSize: 25,
              color: Colors.black,
              onPressed: () => print('Messenger'),
            ),
          )
        ], systemOverlayStyle: SystemUiOverlayStyle.dark,
      ),
      floatingActionButton: FloatingActionButtonKit(),
    );
  }
}

main() async {
  return buildApp(home: NewView());
}

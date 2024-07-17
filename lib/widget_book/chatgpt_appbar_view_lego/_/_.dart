import 'package:flutter/material.dart';

import '../../../../../../../../../../../main.dart';

class NewView extends StatefulWidget implements PreferredSizeWidget {
  const NewView({super.key});

  @override
  State<NewView> createState() => _NewViewState();

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}

class _NewViewState extends State<NewView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        backgroundColor: const Color(0xFF343541),
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(0),
          child: Container(
            color: const Color(0xFF40414f),
            height: 2,
          ),
        ),
        elevation: 0,
        title: Text(
            overflow: TextOverflow.ellipsis,
            maxLines: 1,
            'New Chat',

            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w300,
              color: Colors.white,
            )),
        // style: GoogleFonts.roboto(
        //   fontSize: 18,
        //   fontWeight: FontWeight.w300,
        // ).copyWith(color: Colors.white)),
        centerTitle: true,
        titleSpacing: 0,
        leading: Builder(
          builder: (context) => IconButton(
            icon: const Icon(
              Icons.menu,
              size: 25,
              color: Colors.white,
            ),
            onPressed: () {
              Scaffold.of(context).openDrawer();
            },
          ),
        ),
        actions: [
          const Icon(
            Icons.add,
            size: 25,
            color: Colors.white,
          ),
          const SizedBox(width: 16),
        ],
      ),
      floatingActionButton: FloatingActionButtonKit(),
    );
  }
}

main() async {
  return buildApp(home: NewView());
}

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
        title: Image.asset(
          'assets/lego/youtube_appbar_view_lego/yt_logo_rgb_light.webp',
          width: 100,
        ),
        actions: [
          SvgPicture.asset(
            'assets/view/youtube_main_view/video.svg',
            width: 20,
            colorFilter: ColorFilter.mode(
              Colors.black.withOpacity(0.6),
              BlendMode.srcIn,
            ),
          ),
          IconButton(
            icon: Icon(Icons.search),
            disabledColor: Colors.grey[700],
            onPressed: () {},
          ),
          IconButton(
            icon: Icon(Icons.account_circle),
            disabledColor: Colors.grey[700],
            onPressed: () {},
          ),
        ],
        systemOverlayStyle: SystemUiOverlayStyle.dark,
      ),
      body: Placeholder(),
      floatingActionButton: FloatingActionButtonKit(),
    );
  }
}

main() async {
  return buildApp(home: NewView());
}

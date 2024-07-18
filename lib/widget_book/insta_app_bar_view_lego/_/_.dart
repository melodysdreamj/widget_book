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
        elevation: 1,
        backgroundColor: Color(0xFFFFFFFF),
        centerTitle: true,
        title: Column(
          children: [
            Image.asset(
              'assets/lego/insta_app_bar_view_lego/logo.webp',
              width: 100,
            )
          ],
        ),
        leading: IconButton(
          onPressed: () {},
          icon: SvgPicture.asset('assets/lego/insta_app_bar_view_lego/camera.svg',
              colorFilter: ColorFilter.mode(
                Colors.grey.withOpacity(0.8),
                BlendMode.srcIn,
              )),
        ),
        actions: <Widget>[
          IconButton(
            onPressed: () {},
            icon: SvgPicture.asset('assets/lego/insta_app_bar_view_lego/send.svg',
                colorFilter: ColorFilter.mode(
                  Colors.grey.withOpacity(0.8),
                  BlendMode.srcIn,
                )),
          ),
        ],
        systemOverlayStyle: SystemUiOverlayStyle.dark,
      ),
      body: Container(),
      floatingActionButton: FloatingActionButtonKit(),
    );
  }
}

main() async {
  return buildApp(home: NewView());
}

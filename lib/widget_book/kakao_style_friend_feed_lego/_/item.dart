import 'package:flutter/material.dart';

import '../../../main.dart';

class ItemView extends StatefulWidget {
  ItemView({
    super.key,
    required this.name,
    required this.imageUrl,
    this.stateMessage,
  });

  final String name;
  final String imageUrl;
  final String? stateMessage;


  @override
  State<ItemView> createState() => _ItemViewState();
}

class _ItemViewState extends State<ItemView> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        ClipRRect(
          borderRadius: BorderRadius.circular(20),
          // 이 값을 조절하여 모서리의 둥근 정도를 변경할 수 있습니다.
          child: Image.network(
            widget.imageUrl,
            height: 50,
            width: 50,
          ),
        ),
        Gap(12),
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(widget.name)
                .textStyle(Theme.of(context).textTheme.bodyLarge!)
                .fontWeight(FontWeight.bold),
            if (widget.stateMessage != null)
              Text(widget.stateMessage!)
                  .textStyle(Theme.of(context).textTheme.bodyMedium!)
          ],
        ).expanded(),
      ],
    ).padding(horizontal: 15, vertical: 10);
  }
}

main() async {
  return buildApp(home: ItemView(
    name: "Kim Toss",
    imageUrl: "https://june-arch-asset.pages.dev/winter.webp",
    stateMessage: "Toss Bank",
  ).center());
}

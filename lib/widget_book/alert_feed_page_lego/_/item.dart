import 'package:flutter/material.dart';

import '../../../../../../../../../../../main.dart';

class ItemView extends StatefulWidget {
  ItemView(
      {super.key,
        required this.imagePath,
        required this.name,
        required this.description,
        required this.timeAge});

  final String imagePath;
  final String name;
  final String description;
  final String timeAge;

  @override
  State<ItemView> createState() => _ItemViewState();
}

class _ItemViewState extends State<ItemView> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        CircleAvatar(
          radius: 30,
          backgroundImage: AssetImage(widget.imagePath),
        ),
        Gap(20),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              RichText(
                text: TextSpan(
                  text: widget.name,
                  style: Theme.of(context)
                      .textTheme
                      .bodyLarge!
                      .copyWith(fontWeight: FontWeight.bold),
                  children: [
                    TextSpan(
                      text: widget.description,
                      style: Theme.of(context).textTheme.bodyLarge!.copyWith(
                          fontWeight: FontWeight.normal,
                          color: Theme.of(context).textTheme.bodyLarge!.color),
                    ),
                    TextSpan(
                      text: widget.timeAge,
                      style: Theme.of(context).textTheme.bodyLarge!,
                    ).textColor(Colors.grey),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    ).padding(bottom: 20);
  }
}

main() async {
  return buildApp(home: ItemView(
    imagePath: "assets/lego/alert_feed_page_lego/winter.jpg",
    name: "Display Name",
    description: " appreciates your like.",
    timeAge: " 3 hours ago",
  ));
}

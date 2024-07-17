import 'package:flutter/material.dart';

import '../../../../../../../../../main.dart';

class ItemView extends StatefulWidget {
  const ItemView({super.key});

  @override
  State<ItemView> createState() => _ItemViewState();
}

class _ItemViewState extends State<ItemView> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Gap(10),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Row(
              children: [
                // avatar
                Gap(2),
                CircleAvatar(
                  radius: 20,
                  backgroundImage:
                  AssetImage('assets/lego/insta_style_main_feed_lego/winter.jpg'),
                ),
                Gap(10),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Text("Name")
                            .textStyle(Theme.of(context).textTheme.bodyMedium!)
                            .fontWeight(FontWeight.bold),
                        Gap(2),
                      ],
                    ),
                    Gap(2),
                    Text("Recipient's  Name")
                        .textStyle(Theme.of(context).textTheme.labelMedium!)
                        .opacity(0.6),
                  ],
                )
              ],
            ),
            Row(
              children: [Icon(Icons.more_horiz)],
            )
          ],
        ).padding(horizontal: 12),
        Gap(10),
        Image.asset(
          'assets/lego/insta_style_main_feed_lego/winter.jpg',
          fit: BoxFit.fitWidth,
          width: 1.sw,
        ),
        Gap(10),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                Icon(
                  Icons.favorite_border,
                  size: 35,
                ),
                Gap(20),
                SvgPicture.asset("assets/lego/insta_style_main_feed_lego/chat.svg",
                    width: 31, height: 31),
              ],
            ),
            Icon(Icons.bookmark_border, size: 35),

          ],
        ).padding(horizontal: 12),
        Gap(8),
        RichText(
          text: TextSpan(
            text: "Name",
            style: Theme.of(context)
                .textTheme
                .bodyMedium!
                .copyWith(fontWeight: FontWeight.bold),
            children: [
              TextSpan(
                text:
                " Write down in detail the contents about gratitude, write down in detail, apply the contents in detail, apply the contents in detail, write down in detail, apply the contents in detail",
                style: Theme.of(context).textTheme.bodyMedium!.copyWith(
                    fontWeight: FontWeight.normal,
                    color: Theme.of(context).textTheme.bodyMedium!.color),
              ),
              TextSpan(
                text: " 3 Hours", // 시간을 나타내는 부분
                style: Theme.of(context).textTheme.bodyMedium!,
              ).textColor(Colors.grey),
            ],
          ),
        ).padding(horizontal: 12),
        Gap(5),
        // Divider(
        //   color: Colors.grey,
        // ),
      ],
    ).padding(bottom: 20);
  }
}

main() async {
  return buildApp(home: ItemView());
}


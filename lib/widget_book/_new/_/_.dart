import 'package:device_preview_minus/device_preview_minus.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../main.dart';
import '../../netflix_main_view_lego/_/_.dart';

class HomeView extends StatefulWidget {
  const HomeView({super.key});

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  int _selectedIndex = 0;
  final FocusNode _focusNode = FocusNode();
  bool _switchValue = true;

  @override
  void initState() {
    super.initState();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    FocusScope.of(context).requestFocus(_focusNode);
  }

  @override
  void dispose() {
    _focusNode.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: KeyboardListener(
        focusNode: _focusNode,
        onKeyEvent: (KeyEvent event) {
          if (event is KeyDownEvent) {
            if (event.logicalKey == LogicalKeyboardKey.arrowUp) {
              setState(() {
                _selectedIndex = (_selectedIndex - 1).clamp(0, 2);
              });
            } else if (event.logicalKey == LogicalKeyboardKey.arrowDown) {
              setState(() {
                _selectedIndex = (_selectedIndex + 1).clamp(0, 2);
              });
            }
          }
        },
        child: Row(
          children: <Widget>[
            Flexible(
              flex: 4,
              child: Container(
                color: Colors.black,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Gap(20),
                    Row(
                      children: [
                        Icon(
                          Icons.phone_iphone,
                          color: Colors.white,
                          size: 30,
                        ),
                        Gap(10),
                        CupertinoSwitch(
                          value: _switchValue,
                          onChanged: (bool value) {
                            setState(() {
                              _switchValue = value;
                            });
                          },
                        ),
                      ],
                    ).padding(left: 20),
                    Gap(20),
                    Text("June's\nWidget Book",
                        style: TextStyle(color: Colors.white, fontSize: 35, fontWeight: FontWeight.bold))
                        .padding(left: 20, right: 10),
                    Gap(20),
                    _buildTextButton('First', 0),
                    _buildTextButton('SecondSecondSecond', 1),
                    _buildTextButton('Third', 2),
                  ],
                ),
              ),
            ),
            const VerticalDivider(thickness: 1, width: 1),
            Flexible(
              flex: 7,
              child: _buildContent(),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTextButton(String text, int index) {
    return TextButton(
      onPressed: () {
        setState(() {
          _selectedIndex = index;
        });
      },
      child: Text(
        text,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(
          color: _selectedIndex == index ? Colors.white : Colors.grey,
          fontSize: 30,
          fontWeight: FontWeight.bold,
        ),
      ),
    ).padding(vertical: 2, horizontal: 10);
  }

  Widget _buildContent() {
    switch (_selectedIndex) {
      case 0:
        return DevicePreview(
          builder: (context) => Container(color: Colors.red),
          backgroundColor: Colors.grey.withOpacity(0.1),
          isToolbarVisible: false,
        );
      case 1:
        return Container(color: Colors.blue);
      case 2:
        return DevicePreview(
          builder: (context) => NewView(),
          backgroundColor: Colors.grey.withOpacity(0.1),
          isToolbarVisible: false,
        );
      default:
        return NewView();
    }
  }
}

void main() async {
  runApp(MaterialApp(
    home: HomeView(),
  ));
}

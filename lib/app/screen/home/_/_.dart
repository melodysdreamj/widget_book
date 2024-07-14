import 'package:device_preview_minus/device_preview_minus.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:june/june.dart';

import '../../../../../../main.dart';
import '../../../../../../widget_book/netflix_main_view_lego/_/_.dart';
import '../../../../config.dart';
import '../../../data/widgets.dart';
import '../vm/_.dart';

class HomeView extends StatefulWidget {
  const HomeView({super.key});

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  int _selectedIndex = 0;
  final FocusNode _focusNode = FocusNode();
  bool _switchValue = true;
  bool _loading = false;

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
      body: JuneBuilder(
        () => HomeVM(),
        builder: (vmHome) => KeyboardListener(
          focusNode: _focusNode,
          onKeyEvent: (KeyEvent event) {
            if (event is KeyDownEvent) {
              if (event.logicalKey == LogicalKeyboardKey.arrowUp) {
                _setSelectedIndex(
                    (_selectedIndex - 1).clamp(0, widgets.length - 1));
              } else if (event.logicalKey == LogicalKeyboardKey.arrowDown) {
                _setSelectedIndex(
                    (_selectedIndex + 1).clamp(0, widgets.length - 1));
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
                            value: vmHome.switchMobileMode,
                            onChanged: (bool value) {
                              switchModeEvent(value);
                            },
                          ),
                        ],
                      ).padding(left: 20),
                      Gap(20),
                      Text("${userName}'s\nWidget Book",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 35,
                                  fontWeight: FontWeight.bold))
                          .padding(left: 20, right: 10),
                      Gap(20),
                      ...List.generate(widgets.length, (index) {
                        return _buildTextButton(widgets[index].item1, index);
                      }),
                    ],
                  ),
                ),
              ),
              Flexible(
                flex: 7,
                child: IndexedStack(
                  index: _loading ? 0 : 1,
                  children: <Widget>[
                    DevicePreview(
                      builder: (context) =>
                          CupertinoActivityIndicator().center(),
                      backgroundColor: Colors.grey.withOpacity(0.1),
                      isToolbarVisible: false,
                    ),
                    _buildContent(vmHome.switchMobileMode),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTextButton(String text, int index) {
    text = text.replaceAll('_', ' ');
    text = text
        .split(' ')
        .map((e) => e[0].toUpperCase() + e.substring(1))
        .join(' ');
    return TextButton(
      onPressed: () {
        _setSelectedIndex(index);
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

  Widget _buildContent(bool switchMobileMode) {
    return DevicePreview(
      enabled: switchMobileMode,
      builder: (context) => Scaffold(
        body: widgets[_selectedIndex].item2.center(),
      ),
      backgroundColor: Colors.grey.withOpacity(0.1),
      isToolbarVisible: false,
    );
  }

  _setSelectedIndex(int index) {
    startLoading();
    setState(() {
      _selectedIndex = index;
    });
  }

  startLoading() {
    if (!June.getState(() => HomeVM()).switchMobileMode) return;
    setState(() {
      _loading = true;
    });
    Future.delayed(Duration(milliseconds: 100), () {
      setState(() {
        _loading = false;
      });
    });
  }
}

/// event ///
switchModeEvent(bool value) {
  June.getState(() => HomeVM()).switchModel(value);
}

void main() async {
  runApp(MaterialApp(
    home: HomeView(),
  ));
}

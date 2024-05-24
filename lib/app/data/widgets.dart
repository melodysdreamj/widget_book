import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import '../../widget_book/chrome_style_browser_lego/_/_.dart' as chrome_style_browser_lego;
import '../../widget_book/basic_bottom_navigation_view_lego/_/_.dart' as basic_bottom_navigation_view_lego;
import '../../widget_book/widget_book_view_lego/_/_.dart' as widget_book_view_lego;
import '../../widget_book/toast_view_lego.toast/usage.dart' as toast_view_lego_toast;
import '../../widget_book/netflix_main_view_lego/_/_.dart' as netflix_main_view_lego;

final List<Tuple2<String, Widget>> widgets = [
  Tuple2('chrome_style_browser_lego', chrome_style_browser_lego.NewView()),
  Tuple2('basic_bottom_navigation_view_lego', basic_bottom_navigation_view_lego.NewView()),
  Tuple2('widget_book_view_lego', widget_book_view_lego.NewView()),
  Tuple2('netflix_main_view_lego', netflix_main_view_lego.NewView()),
  Tuple2('toast_view_lego.toast', toast_view_lego_toast.Usage())
];

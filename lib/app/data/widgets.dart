import 'package:flutter/material.dart';
import 'package:tuple/tuple.dart';

import '../../widget_book/toast_view_lego.toast/usage.dart' as toast_view_lego_toast;
import '../../widget_book/insta_profile_page_lego/_/_.dart' as insta_profile_page_lego;
import '../../widget_book/insta_style_main_feed_lego/_/_.dart' as insta_style_main_feed_lego;
import '../../widget_book/netflix_main_view_lego/_/_.dart' as netflix_main_view_lego;
import '../../widget_book/alert_feed_page_lego/_/_.dart' as alert_feed_page_lego;
import '../../widget_book/favorite_button_lego.component/_/_.dart' as favorite_button_lego_component;
import '../../widget_book/login_view2_lego/_/_.dart' as login_view2_lego;
import '../../widget_book/login_view3_lego/_/_.dart' as login_view3_lego;
import '../../widget_book/chrome_style_browser_lego/_/_.dart' as chrome_style_browser_lego;
import '../../widget_book/navigation_rail_view_lego/_/_.dart' as navigation_rail_view_lego;
import '../../widget_book/basic_bottom_navigation_view_lego/_/_.dart' as basic_bottom_navigation_view_lego;
import '../../widget_book/kakao_chatroom_list_lego/_/_.dart' as kakao_chatroom_list_lego;
import '../../widget_book/simple_memo_lego/_/_.dart' as simple_memo_lego;

final List<Tuple2<String, Widget>> widgets = [
  Tuple2('toast_view_lego.toast', toast_view_lego_toast.Usage()),
  Tuple2('insta_profile_page_lego', insta_profile_page_lego.NewView()),
  Tuple2('insta_style_main_feed_lego', insta_style_main_feed_lego.NewView()),
  Tuple2('netflix_main_view_lego', netflix_main_view_lego.NewView()),
  Tuple2('alert_feed_page_lego', alert_feed_page_lego.NewView()),
  Tuple2('favorite_button_lego.component', favorite_button_lego_component.NewView()),
  Tuple2('login_view2_lego', login_view2_lego.NewView()),
  Tuple2('login_view3_lego', login_view3_lego.NewView()),
  Tuple2('chrome_style_browser_lego', chrome_style_browser_lego.NewView()),
  Tuple2('navigation_rail_view_lego', navigation_rail_view_lego.NewView()),
  Tuple2('basic_bottom_navigation_view_lego', basic_bottom_navigation_view_lego.NewView()),
  Tuple2('kakao_chatroom_list_lego', kakao_chatroom_list_lego.NewView()),
  Tuple2('simple_memo_lego', simple_memo_lego.NewView())
];

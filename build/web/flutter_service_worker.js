'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0976637ad00565ddbb55013f2249ea95",
"version.json": "1de00635995dcf10f1aac70139917a0c",
"index.html": "c9e53a0881fd1c6dfb21822cbc4d001d",
"/": "c9e53a0881fd1c6dfb21822cbc4d001d",
"main.dart.js": "69cf5ef963b5e08c8e3893ba1215e191",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d63e100d7ca8c40d0600d45fac2866eb",
"assets/AssetManifest.json": "efac1796c4e586b6974e07ab7f4e182c",
"assets/NOTICES": "130b40d28255f26f0edda998b92d274a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "3532f93ff75a0c52445206fcab05a443",
"assets/packages/widget_binding_lego/assets/lego/widget_binding_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/insta_profile_page_lego/assets/lego/insta_profile_page_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/insta_profile_page_lego/assets/lego/insta_profile_page_lego/winter.jpg": "446f4c4a69e0272e11708f7bf1a00fe0",
"assets/packages/insta_style_main_feed_lego/assets/lego/insta_style_main_feed_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/insta_style_main_feed_lego/assets/lego/insta_style_main_feed_lego/winter.jpg": "446f4c4a69e0272e11708f7bf1a00fe0",
"assets/packages/insta_style_main_feed_lego/assets/lego/insta_style_main_feed_lego/chat.svg": "5f0a42298d31fab661e561190de406a1",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/logo.ico": "41b45fdce09bd6acd07c7a8949da675e",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/img_2.webp": "c65ec6d7cf4c00026a1217e42cf66e88",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/img_3.webp": "c33bb84ac9b794432b2dbaf2cbb2bf61",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/logo.webp": "4bf3ff05c6bf07ab2cd6dabe3f323ae6",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/chrome-cast-svgrepo-com.svg": "4cc36b8b146b79900c6fab2690127b2d",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/wv22frLmCpXDRjKj4MWFwa4eTOK.webp": "0599c9543edb31a51e08c41f062c1419",
"assets/packages/netflix_main_view_lego/assets/lego/netflix_main_view_lego/img_1.webp": "7fa5e576c713062197e4fb77ead35b25",
"assets/packages/spotify_bottom_navi_lego/assets/lego/spotify_bottom_navi_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/spotify_bottom_navi_lego/assets/lego/spotify_bottom_navi_lego/spotify.svg": "129620aeff07b4caa27f1b3ab10cbbca",
"assets/packages/chatgpt_appbar_view_lego/assets/lego/chatgpt_appbar_view_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/google_drive_bottom_navi_lego/assets/lego/google_drive_bottom_navi_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/youtube_bottom_navi_view_lego/assets/lego/youtube_bottom_navi_view_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/facebook_tapbar_view_lego/assets/lego/facebook_tapbar_view_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/theme_config_lego/assets/lego/theme_config_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/animated_notch_bottom_bar_view_lego/assets/lego/animated_notch_bottom_bar_view_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/insta_style_feed_lego/assets/lego/insta_style_feed_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/insta_style_feed_lego/assets/lego/insta_style_feed_lego/chat.svg": "5f0a42298d31fab661e561190de406a1",
"assets/packages/insta_style_feed_lego/assets/lego/insta_style_feed_lego/iu.jpg": "c1d36ed41088228370232f9c813abcd0",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/search.svg": "5437e5214c32dc0a8b1e3e3749edd831",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/user.svg": "ed52f187b2c4aad7fd02765c9cdc2f92",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/home.svg": "55644be0d4a9382b8f1b58830cd536c6",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/plus-square.svg": "46ec6c72e9c46717d11a68fa94fd0b9d",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/placeholder.webp": "5f36989c48588d5ef2361e507e67091a",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/logo.webp": "ff4fc708044629cebfa31ffb5c9bb6b2",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/placeholderforavatar.webp": "acafedc6faeda667a9f28fd7d41334f9",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/send.svg": "d9f34237336fcf5138cd42bdc0bbd10a",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/camera.svg": "19a54509f12a3b28cbdbcbfe8fc6846f",
"assets/packages/insta_style_bottom_navi2_lego/assets/lego/insta_style_bottom_navi2_lego/heart.svg": "502189aef3b96acbcddedbb54a043638",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/facebook_appbar_view_lego/assets/lego/facebook_appbar_view_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/toast_view_lego/assets/lego/toast_view_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/alert_feed_page_lego/assets/lego/alert_feed_page_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/alert_feed_page_lego/assets/lego/alert_feed_page_lego/winter.jpg": "1520998802549d0ffb0e31106222f59e",
"assets/packages/insta_style_bottom_navigation_bar_lego/assets/lego/insta_style_bottom_navigation_bar_lego/check-circle-svgrepo-com.svg": "02b5b03773f2b5087a2548918991ce4f",
"assets/packages/insta_style_bottom_navigation_bar_lego/assets/lego/insta_style_bottom_navigation_bar_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/insta_style_bottom_navigation_bar_lego/assets/lego/insta_style_bottom_navigation_bar_lego/iu.webp": "a65a956ee55036439e84ec58a3432e6b",
"assets/packages/insta_style_bottom_navigation_bar_lego/assets/lego/insta_style_bottom_navigation_bar_lego/check-circle-svgrepo-com-fill.svg": "183097a96c3c0bc04b6329b377992e5f",
"assets/packages/login_view2_lego/assets/lego/login_view2_lego/google.webp": "d1b48d53b47d60d3f00d60e6c561bb55",
"assets/packages/login_view2_lego/assets/lego/login_view2_lego/twitter.webp": "c6e562784f15048688181f183510b8d1",
"assets/packages/login_view2_lego/assets/lego/login_view2_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/login_view2_lego/assets/lego/login_view2_lego/facebook.webp": "83deaa15c9e82f37e588bdf392d14876",
"assets/packages/login_view2_lego/assets/lego/login_view2_lego/youtube.webp": "0e2769b8263285f46ca9065b200e7bd0",
"assets/packages/login_view3_lego/assets/lego/login_view3_lego/google.webp": "d1b48d53b47d60d3f00d60e6c561bb55",
"assets/packages/login_view3_lego/assets/lego/login_view3_lego/twitter.webp": "c6e562784f15048688181f183510b8d1",
"assets/packages/login_view3_lego/assets/lego/login_view3_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/login_view3_lego/assets/lego/login_view3_lego/facebook.webp": "83deaa15c9e82f37e588bdf392d14876",
"assets/packages/login_view3_lego/assets/lego/login_view3_lego/youtube.webp": "0e2769b8263285f46ca9065b200e7bd0",
"assets/packages/chrome_style_browser_lego/assets/lego/chrome_style_browser_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/june_lego/assets/lego/june_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/navigation_rail_view_lego/assets/lego/navigation_rail_view_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/search.svg": "5437e5214c32dc0a8b1e3e3749edd831",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/user.svg": "ed52f187b2c4aad7fd02765c9cdc2f92",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/home.svg": "55644be0d4a9382b8f1b58830cd536c6",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/plus-square.svg": "46ec6c72e9c46717d11a68fa94fd0b9d",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/placeholder.webp": "5f36989c48588d5ef2361e507e67091a",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/logo.webp": "ff4fc708044629cebfa31ffb5c9bb6b2",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/placeholderforavatar.webp": "acafedc6faeda667a9f28fd7d41334f9",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/send.svg": "d9f34237336fcf5138cd42bdc0bbd10a",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/camera.svg": "19a54509f12a3b28cbdbcbfe8fc6846f",
"assets/packages/basic_bottom_navigation_view_lego/assets/lego/basic_bottom_navigation_view_lego/heart.svg": "502189aef3b96acbcddedbb54a043638",
"assets/packages/defaul_tap_bar_lego/assets/lego/defaul_tap_bar_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/dot_navigation_bar_basic_lego/assets/lego/dot_navigation_bar_basic_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/youtube_appbar_view_lego/assets/lego/youtube_appbar_view_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/youtube_appbar_view_lego/assets/lego/youtube_appbar_view_lego/yt_logo_rgb_light.webp": "f31dfae768abcf58ac7ba3c9bd8079df",
"assets/packages/youtube_appbar_view_lego/assets/lego/youtube_appbar_view_lego/video.svg": "1b93d5414307118101a5d6c8c3bf20f3",
"assets/packages/toss_intro_page_lego/assets/lego/toss_intro_page_lego/vaccine.png": "650029ce77279045a178073f3f9550a6",
"assets/packages/toss_intro_page_lego/assets/lego/toss_intro_page_lego/hospital.png": "23096c864fb3f401ed451856b54f19a9",
"assets/packages/toss_intro_page_lego/assets/lego/toss_intro_page_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/toss_intro_page_lego/assets/lego/toss_intro_page_lego/money.png": "5326b763ec15d8fee65d07aa6fb9a18f",
"assets/packages/insta_app_bar_view_lego/assets/lego/insta_app_bar_view_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/insta_app_bar_view_lego/assets/lego/insta_app_bar_view_lego/logo.webp": "ff4fc708044629cebfa31ffb5c9bb6b2",
"assets/packages/insta_app_bar_view_lego/assets/lego/insta_app_bar_view_lego/send.svg": "d9f34237336fcf5138cd42bdc0bbd10a",
"assets/packages/insta_app_bar_view_lego/assets/lego/insta_app_bar_view_lego/camera.svg": "19a54509f12a3b28cbdbcbfe8fc6846f",
"assets/packages/kakao_style_friend_feed_lego/assets/lego/kakao_style_friend_feed_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/kakao_style_friend_feed_lego/assets/lego/kakao_style_friend_feed_lego/iu.jpg": "c1d36ed41088228370232f9c813abcd0",
"assets/packages/favorite_button_lego/assets/lego/favorite_button_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/kakao_chatroom_list_lego/assets/lego/kakao_chatroom_list_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/simple_memo_lego/assets/lego/simple_memo_lego/add.june": "1df2dc1cc4b421202d5bb41bdb09f2bd",
"assets/packages/login_and_register_page_lego/assets/lego/login_and_register_page_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/login_and_register_page_lego/assets/lego/login_and_register_page_lego/main.webp": "41e29a42db2f4fb870f14eeb73c3bda7",
"assets/packages/insta_personal_page_lego/assets/lego/insta_personal_page_lego/add.june": "39e32c1864a95983f78d2685094f77f2",
"assets/packages/insta_personal_page_lego/assets/lego/insta_personal_page_lego/winter.jpg": "446f4c4a69e0272e11708f7bf1a00fe0",
"assets/packages/insta_personal_page_lego/assets/lego/insta_personal_page_lego/chat.svg": "5f0a42298d31fab661e561190de406a1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f7173e4d58086b4cc9bf78cea4b95b9b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6d639c48c90f1b8c55ff7e8fec749a",
"assets/assets/lego/insta_profile_page_lego/winter.jpg": "446f4c4a69e0272e11708f7bf1a00fe0",
"assets/assets/lego/insta_style_main_feed_lego/winter.jpg": "446f4c4a69e0272e11708f7bf1a00fe0",
"assets/assets/lego/insta_style_main_feed_lego/chat.svg": "5f0a42298d31fab661e561190de406a1",
"assets/assets/lego/netflix_main_view_lego/logo.ico": "41b45fdce09bd6acd07c7a8949da675e",
"assets/assets/lego/netflix_main_view_lego/img_2.webp": "c65ec6d7cf4c00026a1217e42cf66e88",
"assets/assets/lego/netflix_main_view_lego/img_3.webp": "c33bb84ac9b794432b2dbaf2cbb2bf61",
"assets/assets/lego/netflix_main_view_lego/logo.webp": "4bf3ff05c6bf07ab2cd6dabe3f323ae6",
"assets/assets/lego/netflix_main_view_lego/chrome-cast-svgrepo-com.svg": "4cc36b8b146b79900c6fab2690127b2d",
"assets/assets/lego/netflix_main_view_lego/wv22frLmCpXDRjKj4MWFwa4eTOK.webp": "0599c9543edb31a51e08c41f062c1419",
"assets/assets/lego/netflix_main_view_lego/img_1.webp": "7fa5e576c713062197e4fb77ead35b25",
"assets/assets/lego/spotify_bottom_navi_lego/spotify.svg": "129620aeff07b4caa27f1b3ab10cbbca",
"assets/assets/lego/insta_style_feed_lego/chat.svg": "5f0a42298d31fab661e561190de406a1",
"assets/assets/lego/insta_style_feed_lego/iu.jpg": "c1d36ed41088228370232f9c813abcd0",
"assets/assets/lego/insta_style_bottom_navi2_lego/search.svg": "5437e5214c32dc0a8b1e3e3749edd831",
"assets/assets/lego/insta_style_bottom_navi2_lego/user.svg": "ed52f187b2c4aad7fd02765c9cdc2f92",
"assets/assets/lego/insta_style_bottom_navi2_lego/home.svg": "55644be0d4a9382b8f1b58830cd536c6",
"assets/assets/lego/insta_style_bottom_navi2_lego/plus-square.svg": "46ec6c72e9c46717d11a68fa94fd0b9d",
"assets/assets/lego/insta_style_bottom_navi2_lego/placeholder.webp": "5f36989c48588d5ef2361e507e67091a",
"assets/assets/lego/insta_style_bottom_navi2_lego/logo.webp": "ff4fc708044629cebfa31ffb5c9bb6b2",
"assets/assets/lego/insta_style_bottom_navi2_lego/placeholderforavatar.webp": "acafedc6faeda667a9f28fd7d41334f9",
"assets/assets/lego/insta_style_bottom_navi2_lego/send.svg": "d9f34237336fcf5138cd42bdc0bbd10a",
"assets/assets/lego/insta_style_bottom_navi2_lego/camera.svg": "19a54509f12a3b28cbdbcbfe8fc6846f",
"assets/assets/lego/insta_style_bottom_navi2_lego/heart.svg": "502189aef3b96acbcddedbb54a043638",
"assets/assets/lego/alert_feed_page_lego/winter.jpg": "1520998802549d0ffb0e31106222f59e",
"assets/assets/lego/insta_style_bottom_navigation_bar_lego/check-circle-svgrepo-com.svg": "02b5b03773f2b5087a2548918991ce4f",
"assets/assets/lego/insta_style_bottom_navigation_bar_lego/iu.webp": "a65a956ee55036439e84ec58a3432e6b",
"assets/assets/lego/insta_style_bottom_navigation_bar_lego/check-circle-svgrepo-com-fill.svg": "183097a96c3c0bc04b6329b377992e5f",
"assets/assets/lego/login_view2_lego/google.webp": "d1b48d53b47d60d3f00d60e6c561bb55",
"assets/assets/lego/login_view2_lego/twitter.webp": "c6e562784f15048688181f183510b8d1",
"assets/assets/lego/login_view2_lego/facebook.webp": "83deaa15c9e82f37e588bdf392d14876",
"assets/assets/lego/login_view2_lego/youtube.webp": "0e2769b8263285f46ca9065b200e7bd0",
"assets/assets/lego/login_view3_lego/google.webp": "d1b48d53b47d60d3f00d60e6c561bb55",
"assets/assets/lego/login_view3_lego/twitter.webp": "c6e562784f15048688181f183510b8d1",
"assets/assets/lego/login_view3_lego/facebook.webp": "83deaa15c9e82f37e588bdf392d14876",
"assets/assets/lego/login_view3_lego/youtube.webp": "0e2769b8263285f46ca9065b200e7bd0",
"assets/assets/lego/basic_bottom_navigation_view_lego/search.svg": "5437e5214c32dc0a8b1e3e3749edd831",
"assets/assets/lego/basic_bottom_navigation_view_lego/user.svg": "ed52f187b2c4aad7fd02765c9cdc2f92",
"assets/assets/lego/basic_bottom_navigation_view_lego/home.svg": "55644be0d4a9382b8f1b58830cd536c6",
"assets/assets/lego/basic_bottom_navigation_view_lego/plus-square.svg": "46ec6c72e9c46717d11a68fa94fd0b9d",
"assets/assets/lego/basic_bottom_navigation_view_lego/placeholder.webp": "5f36989c48588d5ef2361e507e67091a",
"assets/assets/lego/basic_bottom_navigation_view_lego/logo.webp": "ff4fc708044629cebfa31ffb5c9bb6b2",
"assets/assets/lego/basic_bottom_navigation_view_lego/placeholderforavatar.webp": "acafedc6faeda667a9f28fd7d41334f9",
"assets/assets/lego/basic_bottom_navigation_view_lego/send.svg": "d9f34237336fcf5138cd42bdc0bbd10a",
"assets/assets/lego/basic_bottom_navigation_view_lego/camera.svg": "19a54509f12a3b28cbdbcbfe8fc6846f",
"assets/assets/lego/basic_bottom_navigation_view_lego/heart.svg": "502189aef3b96acbcddedbb54a043638",
"assets/assets/lego/youtube_appbar_view_lego/yt_logo_rgb_light.webp": "f31dfae768abcf58ac7ba3c9bd8079df",
"assets/assets/lego/youtube_appbar_view_lego/video.svg": "1b93d5414307118101a5d6c8c3bf20f3",
"assets/assets/lego/toss_intro_page_lego/vaccine.png": "650029ce77279045a178073f3f9550a6",
"assets/assets/lego/toss_intro_page_lego/hospital.png": "23096c864fb3f401ed451856b54f19a9",
"assets/assets/lego/toss_intro_page_lego/money.png": "5326b763ec15d8fee65d07aa6fb9a18f",
"assets/assets/lego/insta_app_bar_view_lego/logo.webp": "ff4fc708044629cebfa31ffb5c9bb6b2",
"assets/assets/lego/insta_app_bar_view_lego/send.svg": "d9f34237336fcf5138cd42bdc0bbd10a",
"assets/assets/lego/insta_app_bar_view_lego/camera.svg": "19a54509f12a3b28cbdbcbfe8fc6846f",
"assets/assets/lego/kakao_style_friend_feed_lego/iu.jpg": "c1d36ed41088228370232f9c813abcd0",
"assets/assets/lego/login_and_register_page_lego/main.webp": "41e29a42db2f4fb870f14eeb73c3bda7",
"assets/assets/lego/insta_personal_page_lego/winter.jpg": "446f4c4a69e0272e11708f7bf1a00fe0",
"assets/assets/lego/insta_personal_page_lego/chat.svg": "5f0a42298d31fab661e561190de406a1",
"assets/assets/pubdev.svg": "77736b70355db3b992d712891749acd5",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

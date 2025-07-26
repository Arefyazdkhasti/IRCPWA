'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_187.part.js": "1489d50472eff9f90aec6bddf2034d49",
"main.dart.js_197.part.js": "f44b9308327bfea5ec2a25cbbb51c1f3",
"flutter_bootstrap.js": "720cfbd13396012433274584826ed819",
"main.dart.js_79.part.js": "a759a6fe51702d6e72f3d03d3ebc73e9",
"main.dart.js_69.part.js": "b789e52d02fcfe2b545fb6912cc77628",
"main.dart.js_101.part.js": "5ad5fe6c740f996d5e7cbd2456974703",
"main.dart.js_24.part.js": "636869c3d15bebd257dc562a73fb9f8a",
"main.dart.js_34.part.js": "2ad564719f39233b2284d68a0f335cf3",
"main.dart.js_205.part.js": "20a02cbbd59eed6b49bbc6f253d94935",
"main.dart.js_46.part.js": "9237369edfae9b2dd5cdd79e9d1afe47",
"main.dart.js_163.part.js": "ace5a035ffe68e6eae9432a6ce385a4d",
"main.dart.js_173.part.js": "106508f0bb87d90025448e76378331b7",
"main.dart.js_155.part.js": "1f91a104ffe5e5365fb031ef1b3eb904",
"version.json": "096b06149a34b197182acbf6fe0aa9fa",
"main.dart.js_60.part.js": "f0ea40cbf80e255fd393fa28db47dad0",
"main.dart.js_70.part.js": "905e28e5539f5a187194b4d22ee399c9",
"main.dart.js_127.part.js": "3d7f90c8879d6b3f35caacb2f2239965",
"main.dart.js_137.part.js": "fbe8abb3fa8236032c630dbab23a2371",
"main.dart.js_84.part.js": "2f55b286bb4ba975d6fb1d25f083c3c5",
"main.dart.js_118.part.js": "3cd5cb28130add175dcc02a7d6242252",
"main.dart.js_154.part.js": "569ac31e3ae30cc5349cee86ebe4ff8f",
"main.dart.js_144.part.js": "58e313009d82210b97b6e7b634737792",
"main.dart.js_71.part.js": "75d07fe408414e3b37ba3f24fc0a09fa",
"main.dart.js_6.part.js": "a97a839c9d5fdf8630daebf326f432f2",
"index.html": "1c022d18cb26dafcee77b2ab2a017f84",
"/": "1c022d18cb26dafcee77b2ab2a017f84",
"main.dart.js_13.part.js": "fc78f783279e2beb7430e437343a7945",
"main.dart.js_136.part.js": "15667f59fd708721d2997e26b6b05b1f",
"main.dart.js_109.part.js": "e42e15044a1a78bb93166bd6ff933f5b",
"main.dart.js_119.part.js": "0fe50664f64f08311c4d9088312da97a",
"main.dart.js_95.part.js": "6d07a158c533a638d55a3fc6cb444eb5",
"main.dart.js_85.part.js": "89804dbecffb3b2bd17a94e911326245",
"main.dart.js_196.part.js": "56573ba522adcddc5b2c0cf55b74e55c",
"main.dart.js_186.part.js": "ba7843281581531867d4f7884376a4ef",
"main.dart.js_68.part.js": "79c8fc4de83c5a3eb2c2b31e857a02eb",
"main.dart.js_78.part.js": "e5cc2ca7ad772a80d5eacf5c68c82192",
"main.dart.js_110.part.js": "dbc2de23ac54b9e6ab6b44e00529f52a",
"main.dart.js_35.part.js": "070a6d74bcc58304e419159099d61a3d",
"main.dart.js_57.part.js": "e0339a97dab73d377182c549224d9d47",
"main.dart.js_204.part.js": "dd6fc6e388476e51d1135d996913d660",
"main.dart.js_172.part.js": "d4e563596c080a7b434ce3feb104eb13",
"main.dart.js_162.part.js": "3c18047f16401e8851872fefcdaf8371",
"firebase-messaging-sw.js": "d031e67ed4f1dd1debb7fc5cec463194",
"main.dart.js_124.part.js": "c0d4729320250b9cfcc4ce1a64995623",
"main.dart.js_134.part.js": "6eff22aaed080710d80a6d1dc43d4de3",
"main.dart.js_11.part.js": "f99433dc7919a2b8685a42923c36b6bc",
"main.dart.js_4.part.js": "c0416ec9861eb15fd3e09dda5e080004",
"main.dart.js_73.part.js": "c84f835101903fafa5eb5f4b47f6499d",
"main.dart.js_156.part.js": "510ce6e5499e9190c6ff57eba0f0aaf2",
"main.dart.js": "587120f91c1c44b4c36337867c0c30c0",
"main.dart.js_87.part.js": "9491b0ff9675dbe624d9e4b9ca457058",
"main.dart.js_97.part.js": "8ab40d9963825d796424f7210f8196bf",
"main.dart.js_179.part.js": "0b231ca8ec601cd857a275a73345c667",
"main.dart.js_169.part.js": "f6fac408f8c79ff5dade6294c142d052",
"main.dart.js_194.part.js": "684b1e7e252d514b595721f83db12f41",
"main.dart.js_18.part.js": "51d97796f3de7090cb9d1bcddf1eff18",
"main.dart.js_160.part.js": "6e153314d726dcaf21ef798060b207a5",
"main.dart.js_170.part.js": "f09bac355073b9d7da1474223673e212",
"main.dart.js_45.part.js": "06aa9f6b1391532a1d6b6ace40587962",
"main.dart.js_206.part.js": "d2faca9abf7622a862d77f7fe8582249",
"main.dart.js_55.part.js": "c55aa8e81e75f522c00d65b81b8a21e9",
"main.dart.js_27.part.js": "b39d7f36b47de4be1204b85b3a36f11c",
"main.dart.js_102.part.js": "11ef3f1341d2e71ee1df3467a53a1ef5",
"main.dart.js_112.part.js": "b101092ec38220aa03461945b1de06c3",
"main.dart.js_19.part.js": "69eeeeed5402812986f87ef182ce3097",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"main.dart.js_185.part.js": "c5c460a40ee74df7e79fa268bdf9da58",
"main.dart.js_171.part.js": "6e3818cf47a162af806dc9dff1f3807e",
"main.dart.js_161.part.js": "1ab04dca7d407d9a0a32102473722db7",
"main.dart.js_54.part.js": "ce72da0a6f22803cfe3c166d0f8bee65",
"main.dart.js_207.part.js": "8b3fdbcac179bb6bfb9c3e35e13c0854",
"main.dart.js_44.part.js": "b095c956346c68f8103980bb8c75355f",
"main.dart.js_36.part.js": "387dd9701f0267f46eb1b8cc8c797246",
"main.dart.js_26.part.js": "7e8f6ee35ae7be4ba6a163f1bceae4e4",
"main.dart.js_113.part.js": "ae70f3e333d0e3d70cbc421bee5b14b5",
"main.dart.js_103.part.js": "972657b67f2669eb4cad813429e9f78e",
"main.dart.js_135.part.js": "1b498cc1a24cc0769631ac697124fb64",
"main.dart.js_125.part.js": "dfb477fda8d11a33344327daf6160571",
"main.dart.js_10.part.js": "dae51467bffb3d9db1e81279d72bc0b6",
"main.dart.js_72.part.js": "7eb78261f4459a1cb06cdf330716feda",
"main.dart.js_5.part.js": "7e5bada5bec2d4b0af6cafea1d8aaec7",
"main.dart.js_62.part.js": "c8e80bba9d9a5aa6256f9259a7540fb7",
"main.dart.js_157.part.js": "9c195c921491d536687351821f6fe0f8",
"main.dart.js_147.part.js": "55a9bdea0a6668ca3ebc50bde512d491",
"main.dart.js_96.part.js": "0624b658402f7697f30304dd90428c84",
"main.dart.js_168.part.js": "88d334987d903a412e6c4aa731a158d0",
"script/main-screen.js": "0f6748c4ad64a3c5652a1fd22d7b424b",
"script/utils.mjs": "d0988ff75ce5713d25eb1d6784a2e1af",
"script/load_splash_lotties.js": "2df67e11de11cb39dc8fb820cd22c1bf",
"script/firebase/firebase-app-compat.js": "467d3d0962cc899d6a5fae5aa5772e12",
"script/firebase/firebase-messaging-compat.js": "4d70c7d8c0d7124238774ab7fb422f6f",
"script/load_app_translation.js": "b9dbaa12ab6774b7dd9bcc275071615a",
"script/app-translation.js": "1a8d72d6334f754a1d31d0d35263ac75",
"script/web-engage.js": "2d9f3c7a1e1501a246889bb38f72995c",
"script/status-bar-color.js": "b32b9779cd6f0b22f1d1515075d0116a",
"main.dart.js_93.part.js": "1a1d832ee0a970191ca2d54d596e3ffd",
"main.dart.js_58.part.js": "24628948520e1c66be8f1911fa39865c",
"main.dart.js_48.part.js": "c42c6ce136104d4fa7c18f252d4823e6",
"main.dart.js_15.part.js": "bf02aaa4d569d17146f25d0084f34b5d",
"main.dart.js_130.part.js": "468b6e8c6c704d747a584003e150cbcd",
"main.dart.js_199.part.js": "eeafd972eded19549314fbde47097b45",
"main.dart.js_189.part.js": "0f1f3b466c13300eade81e90ef8738be",
"main.dart.js_142.part.js": "8440c2fb1409905a4954adff7f7b2d24",
"main.dart.js_152.part.js": "efdfdf07b7114af0d4211b4e6b65480f",
"main.dart.js_67.part.js": "83d1b9a8847df25b011af7133c8abe17",
"favicon.png": "1a25d97f54f92d7b09943ad18b425163",
"main.dart.js_202.part.js": "f5d04d0282eb27c8ad10be87b5889f64",
"main.dart.js_41.part.js": "75c2ed5572f79f0a18206387944b5e2f",
"main.dart.js_164.part.js": "37deb955a4fe828522a14dbae6e1b8d9",
"main.dart.js_174.part.js": "74dd031bd7b731c35e207e2127da5442",
"main.dart.mjs": "7432f6309b765bd10f9086860fb68290",
"main.dart.js_106.part.js": "b6ede11dc1f3b8defe15d98212c0dd0e",
"main.dart.js_23.part.js": "c9ae6876edcbb63a5c82d37215c17df2",
"main.dart.js_9.part.js": "8ad244fb31f42f9fdefc5303fd53f584",
"main.dart.js_139.part.js": "24903a7dd85e69a4e35e6ace33180808",
"main.dart.js_129.part.js": "3a3f3707bca9189c8182d17ce5fbf8c4",
"main.dart.js_180.part.js": "5940087a6c45a648dac2276053f57db5",
"main.dart.js_190.part.js": "acbf8fd676417499a1f4e1c3797a2547",
"main.dart.js_40.part.js": "bca71d972077c2aa38d9bef7380d6a11",
"main.dart.js_203.part.js": "58aaab976fc6e0be1cb39d5477b3fa38",
"main.dart.js_175.part.js": "2d70c529580bce27ba24e520b926af98",
"main.dart.js_165.part.js": "293a3120d9bd4352556ec37c09e8b661",
"main.dart.js_117.part.js": "057414858ca34ff3f4c128c4a88485a9",
"main.dart.js_107.part.js": "7c6cda554b78e2638de0e446ce2bd1aa",
"main.dart.js_32.part.js": "3ca09fca52ec53c0627df9e38b3706e9",
"main.dart.js_22.part.js": "d45136471cc5fc58b912653174838c00",
"icons/icsearchlogo.svg": "36f35a5085eca998645c46a15374a609",
"icons/irc_logo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"icons/qrcode.png": "bd029fd3617d36c0ac34aaa83d3e9e44",
"icons/Icon-192.png": "a6be17a814215d094788718b440ed822",
"icons/Icon-maskable-192.png": "a6be17a814215d094788718b440ed822",
"icons/bazaar.svg": "43fbfde52a4be5337d03b76a48bd186e",
"icons/myket.svg": "e8a262ee05935988bcbbb568d385c50f",
"icons/google_play.svg": "7c0da843b1fc5c18d7dfff458181789c",
"icons/irx_notification_icon.png": "9ac13cab0f11ef8c4f00a07f9349c3bd",
"icons/Icon-maskable-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"icons/irc_notification_icon.png": "af47c737ec82f1066fbfaa8e4ecec61f",
"icons/Icon-512.png": "dd7a1cf2845bb801c96b21ac9076d14f",
"main.dart.js_191.part.js": "d2c4460784a7edde7a82c9f70cb7d487",
"main.dart.js_181.part.js": "49d8ed93d233463f9835874080c1011f",
"style.css": "e12c4893deb5896b6868ebfc62d0a38e",
"main.dart.js_128.part.js": "60272cc3ebcc21294146a2d1e42bece3",
"main.dart.js_138.part.js": "100af77040f23b428fd528d555469c23",
"manifest.json": "3111d79515bb8fe8a491c8107602ddd6",
"main.dart.js_92.part.js": "77e9f75698895930a7832c89e506e5d0",
"main.dart.js_82.part.js": "ed1529fd07f5c8cc89aa4f49b176eaff",
"main.dart.js_49.part.js": "f8912c0c7715a91d7b1fcf62a95e3425",
"main.dart.js_59.part.js": "c2748e8f5ff6855045385c2543a9106b",
"main.dart.js_188.part.js": "11a93c87ebcad708cfddbc4e8cd5c82b",
"main.dart.js_198.part.js": "a6cf950c02dbeab9092c165b358c4be0",
"main.dart.js_14.part.js": "5d211e329c7a5f61f0c808fcc877d11c",
"main.dart.js_131.part.js": "4cbbc86a06b486e94f6bcf24d67d6fb8",
"main.dart.js_121.part.js": "1a8b9f3c062cfb8255fb9886f85c204c",
"main.dart.js_153.part.js": "ee19ad3e4cc3fd2d5bbbf05e4f8c9fa9",
"main.dart.js_76.part.js": "fbf0e9e3933a4d77786caa0d6f196f3e",
"main.dart.js_1.part.js": "c95c466695eb941fda388fe1b52bf7e5",
"main.dart.js_30.part.js": "a2259e2b17e93a41164460209ca6b393",
"main.dart.js_105.part.js": "8f00fe46cca68cccd08a0df16585916d",
"main.dart.js_99.part.js": "a044b204fe544318b7ca843999863d16",
"main.dart.js_89.part.js": "ca6257f5678bfe41046146ced71c883b",
"main.dart.js_167.part.js": "77d43902c0cdca31e5e96a654d6f3fdd",
"main.dart.js_177.part.js": "a27e7522a565bff3e3f529aad2d2a90b",
"main.dart.js_42.part.js": "d850ee597ee17d902c3679a4aa659327",
"main.dart.js_201.part.js": "882efc2f4aa705847d37061ab54114e1",
"main.dart.js_183.part.js": "e027593454233f53ae44c77534b95130",
"main.dart.wasm": "810894d50d9af04cad30bb5922897085",
"main.dart.js_158.part.js": "5b10275f4e2bf5ab47a14f0b9b062b0d",
"main.dart.js_148.part.js": "86c461836cc15fd36472e99e83b87acc",
"main.dart.js_208.part.js": "e4004475f583deb4a9e5e9e4aa4aefc5",
"main.dart.js_39.part.js": "c74d981e85f214dac72c09bad2e09f88",
"main.dart.js_29.part.js": "031a808f934fded9605758ff61082a1a",
"main.dart.js_80.part.js": "71524b75325369fd503fb37e0ef95a84",
"main.dart.js_90.part.js": "058500e429d7990ca152475a2e548926",
"main.dart.js_64.part.js": "e779791d94f888b18e80a29378087247",
"main.dart.js_3.part.js": "dc17597da8265ba7843271c56a84a3cc",
"main.dart.js_74.part.js": "76546b57ae754d6c2784f46c0b1bb783",
"main.dart.js_141.part.js": "c990d44656e5c179b56fa664645eabdd",
"main.dart.js_151.part.js": "9ae398db1f969414980388fc7afecfbf",
"fonts/Estedad-Medium.svg": "9bf8092db7ad56745c36877fe5057c26",
"fonts/Estedad-Medium.woff": "770254b595a0041c27bcc7ccd258ab49",
"fonts/Estedad-Medium.eot": "512be8ffa330e50352c27289fee7c772",
"fonts/Estedad-Medium.woff2": "93ce551680f95aaabe97a034bad7f14b",
"fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"main.dart.js_123.part.js": "2859166f599ec05e7e002f750461a734",
"main.dart.js_133.part.js": "4e812bab5e3f28b5da9870b2a2c97e1a",
"main.dart.js_16.part.js": "ac2456c7aff9808824d7ce2d9b16ca46",
"assets/AssetManifest.json": "d2ac386e8f173b1d07d3e35f8dbf4278",
"assets/NOTICES": "39ae80689499e23226b914d39a58fb6b",
"assets/pubspec.yaml": "1ca1b925dd17c2c38e49d02f0c3dd9f3",
"assets/FontManifest.json": "fef6aedac0987baef79f66239f765c5c",
"assets/AssetManifest.bin.json": "53173e3f9911e88ff1ed917417cd40f1",
"assets/android/app/build.gradle": "12dd5a796179a18b92bfa0defb0a99f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/dual_custom_date_picker/screenshots/single_date_picker.jpg": "666e6cf9371a70948b5ede76a7e88635",
"assets/packages/dual_custom_date_picker/screenshots/range_date_picker.jpg": "87326a21281ded78393d4b43d1683eb3",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "a0aa06d53dd93e64bc783d921264ea0e",
"assets/packages/iranexchange/pubspec.yaml": "33b56c5a4bb249f275602e1f24925e9b",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/should_have_vpn.svg": "17bf80adf3cc6920b18408c8c7932c1d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_transactions_no_item.svg": "b01bdaff142699fa9383e2c45f70e437",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/play_circle.svg": "a72bf513ba48c877fcde790768270454",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/autho_clock.svg": "2060ba413a828e3c3c3e72908b19d50a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/emptytickets.svg": "e2f56c2ced12d7315f5a354bb3cacd66",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/autho_video.svg": "cdb43884f162d183c6027fe8aa91d4d6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/no_custodial_wallet_found.svg": "cb26adc686f176b60065e11b53102dc4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_header_up.svg": "29d3bfd9eba7dabcd72c4b4d360d2543",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/failed_video_authorization_status.svg": "cdf0d3db74d18b2dc42f3aa2d91f961f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/customerclublogo.svg": "7f81bebd7761a99e3d01e402c870f210",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_2.svg": "5125da0dca3cfbfdf1a6fc203251fe95",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_3.svg": "ca8c454213ea9b30c24a06c9e34c13c5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro/intro_1.svg": "b8dbbd3d36d7640e1611f08f0de832b1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/shield-tick.svg": "f9239da9f3b47e2607679fdafeb9f3a1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/release_note.svg": "115e96e9e7808d243fd2f0c97ead0577",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/deposit_bitcoin_convert.svg": "d79f45939c1bf0af8841c5b23fb64171",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/undraw_mobile_pay.svg": "e151927c9df86b95ee524bc0b5cf3e9f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/empty_crypto_wallet.svg": "5b22980380b28cd326af78dc19b15ab9",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/intro_bitcoin_convert.svg": "33bec6b299af320f74a8a735a939bcae",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_login.svg": "a7f75c2aa5942405bb6b86ac514298fe",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/close-circle.svg": "bd1235d5cfc0b26425d833d295bd28a0",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/video_authorization_status.svg": "08b843df244f3da7484b0ebf9265701a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_success.svg": "f6daeb3f37a3ba9cfd2918cab770f435",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/update.svg": "09d48ee48e7c4cd0efe808a7b8018e4c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/launch_day_not_found.svg": "3e6681040e56ededbe823bc2d0da110f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_waiting.svg": "2daef954704d0b7bde440af6663e1663",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/up_by_gateway_limit.svg": "853c6a6ba53d1c6dc9c294f26d68ca83",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/not_found.svg": "94fb008f692e1b0509b99ab71403bd6f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_charge_fail.svg": "032db3533b37e0a1e955532cd2ba6145",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/create_referral_code.svg": "920a3571a2f526964aa7a000d2331c90",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/striped_background.svg": "9eb845b94c9ffe39a113b40cf9344b2f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/tick-circle.svg": "b9ad5983905e1526c6075fde385ae607",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/emptyorders.svg": "7dedbb8d6fcfef68ecf6ee308dc24023",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/autho_personal_card.svg": "9699fdb7648d0a4bc7906fb38a9d0f13",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/danger.svg": "5ac5ea61302be958ff767b323347549e",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/deposit_money.svg": "34a053cd994444f4291810a67fa639ac",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/gift_box.svg": "982052b1aab2f6a1e5cb3d39ebf73231",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/national_card_sample.svg": "5305ccd5bd4b76c48503e32797a6f9a6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/hour_support.svg": "32fbec8b778070881496add95a9a8fff",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/gift.svg": "e687103fd463d2646db6a2783a7390fc",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/profile.svg": "27416b2facaa25600730cfed1bd5808c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/security-safe.svg": "40d088a1ed5720e8f47f5708532294ca",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/irx_main_logo.svg": "dfd6c04e827724ca2cad0af893ef61c1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/lovely.svg": "53af5b63f06c786736bf5b109e78fbc1",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/security_account.svg": "c75011199603fe196a8e35d7d629afa9",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/authorization_starter.svg": "510c5620d701377eeda7144584bc0b42",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee%2520Saderat.svg": "26a3901f863e25bab04b00f595897045",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Khavar%2520Mianeh.svg": "f465d2a1f613a5f0152768a03c2eba85",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Melli.svg": "5394613066e593aad6c1061f46e0dec6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Pasargad.svg": "e5783d441bc104704ef12463493be22d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sanat%2520Madan.svg": "1e1f8bc4f05adf75ce61c16f6e890620",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Shahr.svg": "919b153f3f4b007228bea0acdfeea178",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Keshavarzi.svg": "afb559dc0e4eeff88eaf6cd352df2be2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sepah.svg": "a045657670fb0b21ae4ed8514e501706",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Europe.svg": "7e85f63c67264f2794b206b0cf3085c6",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Futurebank.svg": "35e37b42866ddcd4b77e652a770764a0",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Zamin.svg": "de9a881806444829e1aaf1cc96f1ff0a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Saman.svg": "d425d65150e2123a5b5a082c71ac8705",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Post.svg": "3ea0f7fbafc01ee9f0080ac53bf7251c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Maskan.svg": "c2df9814941c5bdb8a840cc776ac56a4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sina.svg": "49e37ff59ca8b740e3311a049d34a7a5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Bankino.svg": "d797cc31be7dbb532fe7643d0bab43c8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sepah%2520Merged.svg": "ba661639a4575c091f3908cc162951f8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Mehr%2520Iran.svg": "49d2409977c6f70c299b999550a47eee",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Resalat.svg": "a495ecf5f44e1f20ebc4f8ffa2904a42",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee%2520Taavon.svg": "deb2eb565389ba8823b830bc2ca76a93",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Ayandeh.svg": "92c8b0bc1192e2932de98ad6a5d7670d",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Bank%2520Markazi.svg": "f181fa3895a629907bd3475845c1a804",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Caspian.svg": "c68f473c777f5fc13377a7b6d7f58135",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Noor.svg": "8083e7e1a3f22c9230948fb75a0c439f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Blu%2520Bank.svg": "9a7ed630219ee6a24bc307a366561629",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Eghtesad%2520Novin.svg": "1e33ccb3e743a89558d1c33ae15e94a8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Standard%2520Chartered.svg": "37206a527ba4998cf895e16e09e4fc58",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Saderat.svg": "83bcf79cf7f66067526c65cb4b854402",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Refah.svg": "46f7db2d6e855106c2268f3e3ac6a3f4",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Iran%2520Venezuela.svg": "aebbec34e96d4475d41b186fe7494af8",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Melall.svg": "ae847ccd46fcc1a64e9eb2cd03eb6f4c",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Taavon%2520Eslami.svg": "5e6b8289919117a23d3a2bb19f950c6e",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Parsian.svg": "728b4f98771ab4df9697ba94575534b2",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tosee.svg": "c18dd0a1fc1613dd25eed26ad776cd5f",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Tejarat.svg": "0e8a6ef1ccceed0f67905d9a8a2ce92b",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Sarmayeh.svg": "60fb3e923ba1043bbab65ac67d6f447a",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Mellat.svg": "2927c51db5179868def85da420b8d587",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Karafarin.svg": "280c0051134c51ebe51dd1954b011fd3",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Dey.svg": "3de9b6a7d5e23bf6e5458e9a407e53c5",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/banks/Gardeshgari.svg": "179250ca80cac8ee2d7c2d35c652ce9b",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/danger_grey.svg": "7e1ed1a1c95a928cd0ca879283efe3dd",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/video_authorization.svg": "c6112bcd6a1abd3bc3f51a637c8ed085",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/landing.svg": "b5de2a89b1c5858bc49bf42bc3679a68",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/receive_gift.svg": "95d6507007ad5d68d0a6f8ed88689313",
"assets/packages/iranexchange/iran_exchange_assets/images/svgs/wallet_header_down.svg": "35f8a941a76963f280a390c30180ba17",
"assets/packages/iranexchange/iran_exchange_assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/packages/iranexchange/iran_exchange_assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Flutter-Iconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/packages/iranexchange/iran_exchange_assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/packages/iranexchange/iran_exchange_assets/animations/landing_black.gif": "03307fcda403f4df94759b9f91287039",
"assets/packages/iranexchange/iran_exchange_assets/animations/irx_splash.json": "e5de14fe8858f08429dc2e60eda0d57c",
"assets/packages/iranexchange/iran_exchange_assets/animations/landing_white.gif": "00a9939f562fdbbf6293a721b73c4166",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "706033a3f64b34eae39b7195c4a7a3c4",
"assets/fonts/MaterialIcons-Regular.otf": "d392dfa206ac4384327dc966ceaee2df",
"assets/assets/images/svgs/should_have_vpn.svg": "17bf80adf3cc6920b18408c8c7932c1d",
"assets/assets/images/svgs/wallet_transactions_no_item.svg": "4bd74a41632ddff58ea30d9e44ff5dd9",
"assets/assets/images/svgs/emptyaddress.svg": "cf697910934a6e34091ddddefe2206f2",
"assets/assets/images/svgs/emptytickets.svg": "e2f56c2ced12d7315f5a354bb3cacd66",
"assets/assets/images/svgs/icsearchlogo.svg": "6114e559e4063e98a76b8653a6da5dc4",
"assets/assets/images/svgs/emptycryptowallet.svg": "5b22980380b28cd326af78dc19b15ab9",
"assets/assets/images/svgs/iran_exchange_solid_logo.svg": "b9c8319dbf7ef21857bfecbe557154bf",
"assets/assets/images/svgs/briefcase.svg": "01c9aee855e6c89e30518bf2274c99f7",
"assets/assets/images/svgs/customerclublogo.svg": "7f81bebd7761a99e3d01e402c870f210",
"assets/assets/images/svgs/messages_square.svg": "4e8a1f27cfa284e691a325bc7f476e7e",
"assets/assets/images/svgs/stock.svg": "be420e1f790970e35b5a0bd08e930a07",
"assets/assets/images/svgs/prefetchimage.svg": "e04d851a3ee3a4843f4ca5323a730223",
"assets/assets/images/svgs/release_note.svg": "115e96e9e7808d243fd2f0c97ead0577",
"assets/assets/images/svgs/undraw_mobile_pay.svg": "e151927c9df86b95ee524bc0b5cf3e9f",
"assets/assets/images/svgs/shopping-bag.svg": "c819124c275b099e27c4bd37d7ed44e4",
"assets/assets/images/svgs/ircmainlogo.svg": "3f00b1fa830aae39921952dce76bb5f9",
"assets/assets/images/svgs/operator_avatar.svg": "0698d95c8b044e9d4cd246bda658ec38",
"assets/assets/images/svgs/app_icon.svg": "ec327c57ef23791871e4c9bcd65f0ac7",
"assets/assets/images/svgs/foreground_banner.svg": "e4eff339921644a1b9d763e19928316d",
"assets/assets/images/svgs/empty_wallet_tick.svg": "f0b2f49366090282a08a49ddd0d04abc",
"assets/assets/images/svgs/game.svg": "94816832644db1a3858aceae8f4381c9",
"assets/assets/images/svgs/card-pos.svg": "67cb477e79fe36933ab01677b5392b38",
"assets/assets/images/svgs/fb_desc_background.svg": "9eb845b94c9ffe39a113b40cf9344b2f",
"assets/assets/images/svgs/wallet.svg": "657b343409a7e76399dfa3fe3fc468fb",
"assets/assets/images/svgs/wallet_charge_success.svg": "f6daeb3f37a3ba9cfd2918cab770f435",
"assets/assets/images/svgs/update.svg": "09d48ee48e7c4cd0efe808a7b8018e4c",
"assets/assets/images/svgs/wallet_charge_waiting.svg": "2daef954704d0b7bde440af6663e1663",
"assets/assets/images/svgs/buy-crypto.svg": "f416c308cc0f968ebebf933376698653",
"assets/assets/images/svgs/searchprofile.svg": "60b5285ba1d8d911cfecc47c4996f2b6",
"assets/assets/images/svgs/irctitlelogo.svg": "fd1959faaa58081ca2655323669ee04d",
"assets/assets/images/svgs/calling.svg": "1949a652ed373539888890955b85e95d",
"assets/assets/images/svgs/scrollable_background_banner.svg": "e9b6185eeb4dc281ed5cf0af093dcfc7",
"assets/assets/images/svgs/wallet-profile-icon.svg": "3c03e6f6eeb35a720507f2409533bf5d",
"assets/assets/images/svgs/up_by_gateway_limit.svg": "853c6a6ba53d1c6dc9c294f26d68ca83",
"assets/assets/images/svgs/not_found.svg": "94fb008f692e1b0509b99ab71403bd6f",
"assets/assets/images/svgs/bookmarks.svg": "f762dd9bb585aec8111074a35b928fe6",
"assets/assets/images/svgs/wallet_charge_fail.svg": "032db3533b37e0a1e955532cd2ba6145",
"assets/assets/images/svgs/create_referral_code.svg": "920a3571a2f526964aa7a000d2331c90",
"assets/assets/images/svgs/messages_bubble.svg": "263391cca13542a02ab837b20df387de",
"assets/assets/images/svgs/paypal.svg": "9d837bb4b78e8cbd9a15d427a4e8bd82",
"assets/assets/images/svgs/crypto_stock_default.svg": "62ccb3212579badb8662e396e632ebf2",
"assets/assets/images/svgs/virtual_card.svg": "f9c34306dd21490db1f62845e889e97a",
"assets/assets/images/svgs/emptyorders.svg": "7dedbb8d6fcfef68ecf6ee308dc24023",
"assets/assets/images/svgs/stock_unavailable.svg": "09697e346ac754c5786153e799fe2462",
"assets/assets/images/svgs/iran_exchange_logo.svg": "3261455fd65a797e5f6bdffcac2bb1cd",
"assets/assets/images/svgs/gift_box.svg": "982052b1aab2f6a1e5cb3d39ebf73231",
"assets/assets/images/svgs/gift.svg": "e687103fd463d2646db6a2783a7390fc",
"assets/assets/images/svgs/irx_logo.svg": "de4386f7079f0be0d9ff9159b0644227",
"assets/assets/images/svgs/profile.svg": "7ad3c3f6766f9320d47b4b9584979d2a",
"assets/assets/images/svgs/user_tick.svg": "680d75f4aefca617cfc07dc3b6a56f1d",
"assets/assets/images/svgs/one_time_virtual_number.svg": "05248a9f039c1eee41a34cfd22c9d43a",
"assets/assets/images/svgs/buliding.svg": "7af70d856469d47c1500ae137ab0b701",
"assets/assets/images/svgs/banks/Tosee%2520Saderat.svg": "26a3901f863e25bab04b00f595897045",
"assets/assets/images/svgs/banks/Khavar%2520Mianeh.svg": "f465d2a1f613a5f0152768a03c2eba85",
"assets/assets/images/svgs/banks/Melli.svg": "5394613066e593aad6c1061f46e0dec6",
"assets/assets/images/svgs/banks/Pasargad.svg": "e5783d441bc104704ef12463493be22d",
"assets/assets/images/svgs/banks/Sanat%2520Madan.svg": "1e1f8bc4f05adf75ce61c16f6e890620",
"assets/assets/images/svgs/banks/Shahr.svg": "919b153f3f4b007228bea0acdfeea178",
"assets/assets/images/svgs/banks/Keshavarzi.svg": "afb559dc0e4eeff88eaf6cd352df2be2",
"assets/assets/images/svgs/banks/Sepah.svg": "a045657670fb0b21ae4ed8514e501706",
"assets/assets/images/svgs/banks/Iran%2520Europe.svg": "7e85f63c67264f2794b206b0cf3085c6",
"assets/assets/images/svgs/banks/Futurebank.svg": "35e37b42866ddcd4b77e652a770764a0",
"assets/assets/images/svgs/banks/Iran%2520Zamin.svg": "de9a881806444829e1aaf1cc96f1ff0a",
"assets/assets/images/svgs/banks/Saman.svg": "d425d65150e2123a5b5a082c71ac8705",
"assets/assets/images/svgs/banks/Post.svg": "3ea0f7fbafc01ee9f0080ac53bf7251c",
"assets/assets/images/svgs/banks/Maskan.svg": "c2df9814941c5bdb8a840cc776ac56a4",
"assets/assets/images/svgs/banks/Sina.svg": "49e37ff59ca8b740e3311a049d34a7a5",
"assets/assets/images/svgs/banks/Bankino.svg": "d797cc31be7dbb532fe7643d0bab43c8",
"assets/assets/images/svgs/banks/Sepah%2520Merged.svg": "ba661639a4575c091f3908cc162951f8",
"assets/assets/images/svgs/banks/Mehr%2520Iran.svg": "49d2409977c6f70c299b999550a47eee",
"assets/assets/images/svgs/banks/Resalat.svg": "a495ecf5f44e1f20ebc4f8ffa2904a42",
"assets/assets/images/svgs/banks/Tosee%2520Taavon.svg": "deb2eb565389ba8823b830bc2ca76a93",
"assets/assets/images/svgs/banks/Ayandeh.svg": "92c8b0bc1192e2932de98ad6a5d7670d",
"assets/assets/images/svgs/banks/Bank%2520Markazi.svg": "f181fa3895a629907bd3475845c1a804",
"assets/assets/images/svgs/banks/Caspian.svg": "c68f473c777f5fc13377a7b6d7f58135",
"assets/assets/images/svgs/banks/Noor.svg": "8083e7e1a3f22c9230948fb75a0c439f",
"assets/assets/images/svgs/banks/Blu%2520Bank.svg": "9a7ed630219ee6a24bc307a366561629",
"assets/assets/images/svgs/banks/Eghtesad%2520Novin.svg": "1e33ccb3e743a89558d1c33ae15e94a8",
"assets/assets/images/svgs/banks/Standard%2520Chartered.svg": "37206a527ba4998cf895e16e09e4fc58",
"assets/assets/images/svgs/banks/Saderat.svg": "83bcf79cf7f66067526c65cb4b854402",
"assets/assets/images/svgs/banks/Refah.svg": "46f7db2d6e855106c2268f3e3ac6a3f4",
"assets/assets/images/svgs/banks/Iran%2520Venezuela.svg": "aebbec34e96d4475d41b186fe7494af8",
"assets/assets/images/svgs/banks/Melall.svg": "ae847ccd46fcc1a64e9eb2cd03eb6f4c",
"assets/assets/images/svgs/banks/Taavon%2520Eslami.svg": "5e6b8289919117a23d3a2bb19f950c6e",
"assets/assets/images/svgs/banks/Parsian.svg": "728b4f98771ab4df9697ba94575534b2",
"assets/assets/images/svgs/banks/Tosee.svg": "c18dd0a1fc1613dd25eed26ad776cd5f",
"assets/assets/images/svgs/banks/Tejarat.svg": "0e8a6ef1ccceed0f67905d9a8a2ce92b",
"assets/assets/images/svgs/banks/Sarmayeh.svg": "60fb3e923ba1043bbab65ac67d6f447a",
"assets/assets/images/svgs/banks/Mellat.svg": "2927c51db5179868def85da420b8d587",
"assets/assets/images/svgs/banks/Karafarin.svg": "280c0051134c51ebe51dd1954b011fd3",
"assets/assets/images/svgs/banks/Dey.svg": "3de9b6a7d5e23bf6e5458e9a407e53c5",
"assets/assets/images/svgs/banks/Gardeshgari.svg": "179250ca80cac8ee2d7c2d35c652ce9b",
"assets/assets/images/svgs/bank_card_overlay.svg": "9e51fb565d0ad15980a80ac1348643ce",
"assets/assets/images/svgs/no_crypto_found.svg": "cb26adc686f176b60065e11b53102dc4",
"assets/assets/images/svgs/star_search.svg": "62c6582527f3e7d5a198be9993e5d63a",
"assets/assets/images/svgs/receive_gift.svg": "95d6507007ad5d68d0a6f8ed88689313",
"assets/assets/images/chat_bot_avatar.jpg": "7ff169986b1aa448148bc11c75076501",
"assets/assets/images/default.png": "83677c318ac2fb0b2d51b7f345b39f20",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/Estedad-SemiBold.ttf": "ff48875b22759e7c115386ab3e0c1e3a",
"assets/assets/fonts/Flutter-Iconsax.ttf": "3ed28d0ed7c7a738675e446f00ebd786",
"assets/assets/fonts/Estedad-Medium.ttf": "a7b1473e887fb4a9adf676ab5b185093",
"assets/assets/fonts/Estedad-Regular.ttf": "8dcf404349d3f5dd9c309aa21b712f71",
"assets/assets/fonts/Estedad-Bold.ttf": "65475ae4ef29769e0b699fffe210c497",
"assets/assets/animations/loading.json": "8204daf7b3cccadccfd00eedddefb56e",
"assets/assets/animations/text.json": "bf0d2b3bc8afe9c5eff21e5f28c60803",
"assets/assets/super_app/svgs/afrak_main_logo.svg": "1c362838199a8987be12a23deb97f4a2",
"assets/assets/super_app/svgs/paliz_company_main_logo.svg": "0df4195c9c2e3147c2813c64daf3296e",
"assets/assets/super_app/svgs/pateh_main_logo.svg": "a0a5a150aeb7918165cc810a0511d7e0",
"assets/assets/super_app/svgs/wallet_container_image.svg": "620b2f1daffeba9d3f2e507ef037f10d",
"assets/assets/super_app/svgs/shepa_main_logo.svg": "02ff9a078f00afdf368fd16c5899fc29",
"assets/assets/super_app/svgs/iranicard_main_logo.svg": "3f00b1fa830aae39921952dce76bb5f9",
"assets/assets/super_app/svgs/axha_main_logo.svg": "a6435a19cca866d86d0ee7c4000fed73",
"assets/assets/super_app/svgs/iranexchange_main_logo.svg": "c89f9c60174ce67ada7efc82e1611539",
"assets/assets/super_app/svgs/wallet_container.svg": "dd229c16dff415950de6ce141563c858",
"assets/assets/super_app/wallet_container.png": "7962122f3e596a81222bf626212f439d",
"assets/assets/super_app/main_slider_test.png": "4af1ec2e1be21188e90b15885fac3e0e",
"assets/assets/super_app/customer_club_banner.png": "e8e1753079d747d5c2bef021b1df3fe8",
"main.dart.js_209.part.js": "2be37d5e6fe5bb3ed8f5526d03aa6e48",
"main.dart.js_91.part.js": "ef243793a160e330643821c5d98d2fa7",
"main.dart.js_81.part.js": "a9c104b63c7137da4b74e369c8dd53e3",
"main.dart.js_28.part.js": "4f6a8a6141a65abfe39f5cda21e51844",
"main.dart.js_38.part.js": "f5cd6b31162e273fbfac29c63a2d60c5",
"main.dart.js_75.part.js": "a40a3129c1b48387441b7bad9f05bf99",
"main.dart.js_2.part.js": "ce5569cacf74c3c71b18e65e805aac6f",
"main.dart.js_150.part.js": "5c059227ce43edeec96e50aa0d42f616",
"main.dart.js_140.part.js": "cffbf7f298596536c3622ce9572d52e0",
"main.dart.js_132.part.js": "3f9edc8e6dadcab2f879fc09569568de",
"main.dart.js_122.part.js": "9c841236b74201af68f562a00575caa1",
"main.dart.js_17.part.js": "9e949fc3c01a87195d88447ccd54f777",
"main.dart.js_88.part.js": "6144063932d67a2898dc386a6b2b6e37",
"main.dart.js_98.part.js": "6710649774d2a717e2ec9fb87028f23b",
"main.dart.js_31.part.js": "1f868752a4c6480d6d9df527ef122707",
"animations/loading.json": "8204daf7b3cccadccfd00eedddefb56e",
"animations/splash.json": "bf0d2b3bc8afe9c5eff21e5f28c60803",
"main.dart.js_114.part.js": "79947a3149138326d49da1d80a2f29b8",
"main.dart.js_104.part.js": "3d1e8770ca6d7429df8433acd7cd06f5",
"main.dart.js_166.part.js": "cf33d9dc0965c655a1271a6cfbd2fc5b",
"main.dart.js_210.part.js": "ba5eb6a3aad9a781e4930b0d77bf968c",
"main.dart.js_200.part.js": "fdf15e9ed9853ec624de1285bcdb1e0a",
"main.dart.js_43.part.js": "1ec0a19c3e6f3f468d548ba5ed1645d6",
"main.dart.js_192.part.js": "2720cc1f90d6eb357f81cf7451b5349b",
"main.dart.js_182.part.js": "6c43715a5f9740c2dd7c961774e388a5",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"main.dart.js_149.part.js": "20a76fc0ab7a0e40a19fdc05b11d222f",
"main.dart.js_159.part.js": "ef5f4219ef7620ed95fbb6a13b00e3d3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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

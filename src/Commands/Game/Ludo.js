const a0_0x3110c3=a0_0xc1bd;(function(_0x656825,_0x3447d7){const _0x5d5673=a0_0xc1bd,_0x18fba7=_0x656825();while(!![]){try{const _0x2c3eba=-parseInt(_0x5d5673(0x14f))/0x1+parseInt(_0x5d5673(0x140))/0x2+-parseInt(_0x5d5673(0x157))/0x3*(parseInt(_0x5d5673(0x168))/0x4)+parseInt(_0x5d5673(0x147))/0x5*(parseInt(_0x5d5673(0x15d))/0x6)+parseInt(_0x5d5673(0x164))/0x7+-parseInt(_0x5d5673(0x146))/0x8*(parseInt(_0x5d5673(0x152))/0x9)+parseInt(_0x5d5673(0x144))/0xa;if(_0x2c3eba===_0x3447d7)break;else _0x18fba7['push'](_0x18fba7['shift']());}catch(_0x26ace2){_0x18fba7['push'](_0x18fba7['shift']());}}}(a0_0x247e,0x78dc7));function a0_0x5d86(_0x43c765,_0x3bbaa9){const _0x41595a=a0_0x594f();return a0_0x5d86=function(_0x3164dd,_0x4f41dd){_0x3164dd=_0x3164dd-0x1d0;let _0x5f522d=_0x41595a[_0x3164dd];return _0x5f522d;},a0_0x5d86(_0x43c765,_0x3bbaa9);}const a0_0x59636e=a0_0x5d86;(function(_0xc8d946,_0x44d5f2){const _0x3cc70b=a0_0xc1bd,_0x44e72f=a0_0x5d86,_0x1502a1=_0xc8d946();while(!![]){try{const _0x5643d9=parseInt(_0x44e72f(0x1dc))/0x1+-parseInt(_0x44e72f(0x1df))/0x2*(-parseInt(_0x44e72f(0x1da))/0x3)+parseInt(_0x44e72f(0x1f5))/0x4+-parseInt(_0x44e72f(0x1e6))/0x5+parseInt(_0x44e72f(0x1f0))/0x6+-parseInt(_0x44e72f(0x1f7))/0x7*(-parseInt(_0x44e72f(0x1e1))/0x8)+-parseInt(_0x44e72f(0x1d8))/0x9;if(_0x5643d9===_0x44d5f2)break;else _0x1502a1[_0x3cc70b(0x163)](_0x1502a1[_0x3cc70b(0x15c)]());}catch(_0x4c44fd){_0x1502a1[_0x3cc70b(0x163)](_0x1502a1[_0x3cc70b(0x15c)]());}}}(a0_0x594f,0xdb0ed));function a0_0x594f(){const _0x2130fe=a0_0xc1bd,_0x5df7c0=[_0x2130fe(0x155),_0x2130fe(0x14c),_0x2130fe(0x141),_0x2130fe(0x15e),_0x2130fe(0x15a),_0x2130fe(0x14a),_0x2130fe(0x166),_0x2130fe(0x150),_0x2130fe(0x15b),'\x20Game\x20already\x20in\x20progress.\x20Wait\x20for\x20the\x20next\x20game.',_0x2130fe(0x156),'start',_0x2130fe(0x151),_0x2130fe(0x162),'currentPlayer',_0x2130fe(0x153),'\x20You\x27ve\x20already\x20joined\x20the\x20game.',_0x2130fe(0x135),_0x2130fe(0x15f),_0x2130fe(0x167),'5347116ShWfzJ',_0x2130fe(0x13b),'707hyKbvB',_0x2130fe(0x154),_0x2130fe(0x143),'join','exports',_0x2130fe(0x134),_0x2130fe(0x159),_0x2130fe(0x161),_0x2130fe(0x139),_0x2130fe(0x13e),_0x2130fe(0x160),'\x20It\x27s\x20not\x20your\x20turn.',_0x2130fe(0x163),_0x2130fe(0x13d),_0x2130fe(0x169),'26131140lfjYpi',_0x2130fe(0x145),'54HZELGZ',_0x2130fe(0x148),_0x2130fe(0x13c),_0x2130fe(0x137),_0x2130fe(0x13a),_0x2130fe(0x149),'endsWith'];return a0_0x594f=function(){return _0x5df7c0;},a0_0x594f();}const emojis={'dice':'🎲','player':['🔴','🟢','🔵','🟡'],'home':'🏠','finish':'🏁','error':'❌','success':'✅'};let games={};module[a0_0x59636e(0x1fb)]={'usage':[a0_0x3110c3(0x138)],'desc':a0_0x3110c3(0x14b),'commandType':a0_0x59636e(0x1f6),'isGroupOnly':!![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':emojis[a0_0x59636e(0x1e8)],async 'execute'(_0x4c403e,_0x469c15,_0x35169c){const _0x14fad8=a0_0x3110c3,_0x530ddf=a0_0x59636e,_0x2c0c34=_0x35169c[0x0]?.[_0x14fad8(0x14e)](),_0x2f2e1a=_0x469c15[_0x530ddf(0x1dd)]['remoteJid'],_0x59d0d1=_0x469c15[_0x530ddf(0x1dd)][_0x530ddf(0x1f8)][_0x530ddf(0x1e0)](_0x530ddf(0x1f4))?_0x469c15[_0x530ddf(0x1dd)][_0x14fad8(0x158)]:_0x469c15[_0x530ddf(0x1dd)][_0x530ddf(0x1f8)];switch(_0x2c0c34){case _0x530ddf(0x1ec):return startGame(_0x4c403e,_0x469c15,_0x2f2e1a,_0x59d0d1);case _0x530ddf(0x1fa):return joinGame(_0x4c403e,_0x469c15,_0x2f2e1a,_0x59d0d1);case _0x14fad8(0x165):return rollDice(_0x4c403e,_0x469c15,_0x2f2e1a,_0x59d0d1);case _0x14fad8(0x142):return gameStatus(_0x4c403e,_0x469c15,_0x2f2e1a);default:return kord[_0x530ddf(0x1ee)](_0x469c15,emojis[_0x530ddf(0x1f9)]+_0x530ddf(0x1d1));}}};function startGame(_0x166aed,_0x5db26d,_0x3a3153,_0x4d70b0){const _0x55e230=a0_0x3110c3,_0x260dfd=a0_0x59636e;if(games[_0x3a3153])return kord[_0x260dfd(0x1ee)](_0x5db26d,emojis[_0x55e230(0x143)]+_0x260dfd(0x1de));return games[_0x3a3153]={'players':[{'id':_0x4d70b0,'position':0x0,'color':emojis[_0x260dfd(0x1d7)][0x0]}],'currentPlayer':0x0,'started':![]},kord[_0x260dfd(0x1ee)](_0x5db26d,emojis[_0x260dfd(0x1f2)]+_0x260dfd(0x1e4));}function a0_0xc1bd(_0x466f1b,_0x464502){const _0x247e5d=a0_0x247e();return a0_0xc1bd=function(_0xc1bd71,_0x2351a1){_0xc1bd71=_0xc1bd71-0x133;let _0x2b0cdb=_0x247e5d[_0xc1bd71];return _0x2b0cdb;},a0_0xc1bd(_0x466f1b,_0x464502);}function joinGame(_0x12d386,_0x61b85,_0x1cdaa7,_0x10a0f7){const _0x5c69b2=a0_0x3110c3,_0x2f5a97=a0_0x59636e;if(!games[_0x1cdaa7])return kord[_0x2f5a97(0x1ee)](_0x61b85,emojis[_0x5c69b2(0x143)]+_0x5c69b2(0x156));if(games[_0x1cdaa7][_0x5c69b2(0x15a)])return kord[_0x2f5a97(0x1ee)](_0x61b85,emojis[_0x2f5a97(0x1f9)]+_0x2f5a97(0x1ea));if(games[_0x1cdaa7][_0x2f5a97(0x1d6)][_0x2f5a97(0x1e9)](_0x182894=>_0x182894['id']===_0x10a0f7))return kord[_0x2f5a97(0x1ee)](_0x61b85,emojis[_0x5c69b2(0x143)]+_0x2f5a97(0x1f1));if(games[_0x1cdaa7][_0x2f5a97(0x1d6)][_0x2f5a97(0x1d0)]>=0x4)return kord[_0x2f5a97(0x1ee)](_0x61b85,emojis[_0x2f5a97(0x1f9)]+_0x2f5a97(0x1db));const _0x2d98de=games[_0x1cdaa7][_0x5c69b2(0x13d)][_0x2f5a97(0x1d0)];games[_0x1cdaa7][_0x5c69b2(0x13d)][_0x2f5a97(0x1d5)]({'id':_0x10a0f7,'position':0x0,'color':emojis[_0x2f5a97(0x1d7)][_0x2d98de]});if(games[_0x1cdaa7][_0x2f5a97(0x1d6)][_0x2f5a97(0x1d0)]===0x4)return games[_0x1cdaa7][_0x2f5a97(0x1e5)]=!![],kord[_0x2f5a97(0x1ee)](_0x61b85,emojis[_0x2f5a97(0x1f2)]+_0x5c69b2(0x14d));return kord[_0x2f5a97(0x1ee)](_0x61b85,emojis[_0x5c69b2(0x135)]+_0x2f5a97(0x1f3));}function rollDice(_0x3b8185,_0x13074a,_0x40cb2d,_0x541e36){const _0x27dd39=a0_0x3110c3,_0x20f72c=a0_0x59636e;if(!games[_0x40cb2d]||!games[_0x40cb2d][_0x20f72c(0x1e5)])return kord[_0x20f72c(0x1ee)](_0x13074a,emojis[_0x27dd39(0x143)]+_0x27dd39(0x156));const _0x9bc7b8=games[_0x40cb2d][_0x27dd39(0x13d)][games[_0x40cb2d][_0x27dd39(0x133)]];if(_0x9bc7b8['id']!==_0x541e36)return kord[_0x27dd39(0x162)](_0x13074a,emojis[_0x20f72c(0x1f9)]+_0x20f72c(0x1d4));const _0x123004=Math['floor'](Math[_0x27dd39(0x13f)]()*0x6)+0x1;_0x9bc7b8[_0x27dd39(0x145)]+=_0x123004;let _0xc0f9e4=_0x9bc7b8[_0x20f72c(0x1fd)]+_0x27dd39(0x136)+emojis[_0x20f72c(0x1e8)]+_0x123004+'.\x20';return _0x9bc7b8[_0x20f72c(0x1d9)]>=0x32?(_0xc0f9e4+=emojis[_0x20f72c(0x1e2)]+'\x20Player\x20'+_0x9bc7b8[_0x20f72c(0x1fd)]+_0x20f72c(0x1d2),delete games[_0x40cb2d]):(_0xc0f9e4+=_0x20f72c(0x1d3)+_0x9bc7b8['position'],games[_0x40cb2d][_0x20f72c(0x1ef)]=(games[_0x40cb2d]['currentPlayer']+0x1)%games[_0x40cb2d][_0x20f72c(0x1d6)][_0x20f72c(0x1d0)]),kord[_0x20f72c(0x1ee)](_0x13074a,_0xc0f9e4);}function a0_0x247e(){const _0x3d0a80=['random','1679242SsgSSH','map','status','error','5600240vHajbf','position','344mcfLxS','4965pNBqGE','\x20Game\x20is\x20full.\x20Maximum\x204\x20players\x20allowed.','185758kNAItO','3315270lbpTTl','Play\x20a\x20game\x20of\x20Ludo\x20with\x20friends!\x20<start|join|roll|status>','finish','\x20You\x20joined\x20the\x20game.\x20The\x20game\x20is\x20now\x20full\x20and\x20will\x20begin!\x20Use\x20.ludo\x20roll\x20to\x20take\x20your\x20turn.','toLowerCase','841054SAlVHX','dice','\x0a\x0aCurrent\x20turn:\x20','95427wgDcka','7679298eTHHvC','remoteJid','2344ewNSvA','\x20No\x20game\x20in\x20progress.\x20Use\x20.ludo\x20start\x20to\x20begin\x20a\x20new\x20game.','3RJwKjs','participant','color','started','some','shift','3318ByhKrr','\x20Ludo\x20game\x20started!\x20Use\x20.ludo\x20join\x20to\x20join\x20the\x20game.','\x20You\x20joined\x20the\x20game.\x20Waiting\x20for\x20more\x20players...','New\x20position:\x20','length','reply','push','1685390tLnyAd','roll',':\x20Position\x20','@g.us','1590056bmYSJp','player','currentPlayer','Current\x20game\x20status:\x0a','success','\x20rolled\x20a\x20','key','ludo','\x20Invalid\x20action.\x20Use:\x20.ludo\x20<start|join|roll|status>','\x20A\x20game\x20is\x20already\x20in\x20progress\x20in\x20this\x20group.','Game','145698yMRwUy','players','\x20has\x20won\x20the\x20game!'];a0_0x247e=function(){return _0x3d0a80;};return a0_0x247e();}function gameStatus(_0x122730,_0x13404d,_0x3f703a){const _0x355b93=a0_0x3110c3,_0x39f15e=a0_0x59636e;if(!games[_0x3f703a])return kord[_0x39f15e(0x1ee)](_0x13404d,emojis['error']+_0x39f15e(0x1eb));const _0x2e9a73=games[_0x3f703a][_0x355b93(0x13d)][_0x39f15e(0x1e3)](_0x271218=>_0x271218[_0x39f15e(0x1fd)]+_0x39f15e(0x1e7)+_0x271218[_0x39f15e(0x1d9)])[_0x39f15e(0x1fa)]('\x0a'),_0xe89da2=games[_0x3f703a][_0x39f15e(0x1d6)][games[_0x3f703a][_0x39f15e(0x1ef)]][_0x39f15e(0x1fd)];return kord[_0x39f15e(0x1ee)](_0x13404d,_0x39f15e(0x1fc)+_0x2e9a73+_0x39f15e(0x1ed)+_0xe89da2);}
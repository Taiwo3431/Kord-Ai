const a0_0x421a80=a0_0x119f;(function(_0x395d0f,_0x35a7ea){const _0x426c67=a0_0x119f,_0x63771c=_0x395d0f();while(!![]){try{const _0x4f3099=parseInt(_0x426c67(0x139))/0x1*(-parseInt(_0x426c67(0x15b))/0x2)+parseInt(_0x426c67(0x11c))/0x3*(parseInt(_0x426c67(0x145))/0x4)+-parseInt(_0x426c67(0x14a))/0x5*(-parseInt(_0x426c67(0x159))/0x6)+parseInt(_0x426c67(0x133))/0x7*(-parseInt(_0x426c67(0x132))/0x8)+parseInt(_0x426c67(0x14e))/0x9+-parseInt(_0x426c67(0x13b))/0xa*(parseInt(_0x426c67(0x13f))/0xb)+-parseInt(_0x426c67(0x146))/0xc;if(_0x4f3099===_0x35a7ea)break;else _0x63771c['push'](_0x63771c['shift']());}catch(_0x4a7af9){_0x63771c['push'](_0x63771c['shift']());}}}(a0_0x57b4,0x22fd4));function a0_0x57b4(){const _0x52445d=['processing','views','\x0a👀\x20Views:\x20','🔗\x20Please\x20provide\x20a\x20YouTube\x20search\x20query.','pow','\x0a📅\x20Upload\x20Date:\x20','Search\x20for\x20YouTube\x20videos\x20and\x20download\x20them.','❌\x20Unable\x20to\x20fetch\x20the\x20video\x20download\x20link.\x20Please\x20try\x20again\x20later.','log','readFile','warning','length','join','mp4','title','ENOENT','result','😕\x20Oops!\x20No\x20videos\x20found\x20for\x20that\x20query.','duration','\x0a🔗\x20URL:\x20','67352HLqUha','28BsXjOd','Download','timestamp','writeFile','\x0a⏱️\x20Duration:\x20','./temp','15RajKTl','Error\x20during\x20execution:','3530lypOfu','MAX_DOWNLOAD_SIZE','url','message','1969jbJJVM','promises','node-fetch','\x20MB)\x20exceeds\x20the\x20maximum\x20allowed\x20size\x20(','\x20MB).','error','4OTYUaq','2199480YqWEuS','success','https://api.giftedtech.my.id/api/download/ytvideo?apikey=gifted-md&url=','buffer','5AwFmJW','mkdir','exports','search','1617210sEdUtb','videos','unlink','reply','download_url','includes','🎥\x20*KORD-AI\x20YOUTUBE-DOWNLOADER*\x20🎥\x0a\x0a📽️\x20','kord','ago','network','react','745806gcZkGA','path','19146vxPmOn','video','sendImage','toFixed','json','789219GZRRpi','thumbnail'];a0_0x57b4=function(){return _0x52445d;};return a0_0x57b4();}function a0_0x119f(_0x1ae3b9,_0x3d35cb){const _0x57b46b=a0_0x57b4();return a0_0x119f=function(_0x119f68,_0x14e83c){_0x119f68=_0x119f68-0x11a;let _0x3a8747=_0x57b46b[_0x119f68];return _0x3a8747;},a0_0x119f(_0x1ae3b9,_0x3d35cb);}const fetch=require(a0_0x421a80(0x141)),yts=require('yt-search'),fs=require('fs')[a0_0x421a80(0x140)],path=require(a0_0x421a80(0x15a)),emojis={'search':'🔍','processing':'🔄','done':'✅','error':'❌','warning':'⚠️','noResults':'😕'},delay=_0x344c94=>new Promise(_0x1cc3e7=>setTimeout(_0x1cc3e7,_0x344c94));module[a0_0x421a80(0x14c)]={'usage':[a0_0x421a80(0x15c)],'desc':a0_0x421a80(0x124),'commandType':a0_0x421a80(0x134),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'📺',async 'execute'(_0x2334a3,_0x42672f,_0x42311c){const _0x571619=a0_0x421a80;try{const _0x445fc3=_0x42311c['join']('\x20');await global['kord'][_0x571619(0x158)](_0x42672f,emojis[_0x571619(0x14d)]);if(!_0x445fc3)return await global[_0x571619(0x155)][_0x571619(0x151)](_0x42672f,_0x571619(0x121));const _0x2e87fc=await yts(_0x445fc3);if(_0x2e87fc[_0x571619(0x14f)][_0x571619(0x129)]===0x0)return await global['kord'][_0x571619(0x158)](_0x42672f,emojis['noResults']),await global['kord'][_0x571619(0x151)](_0x42672f,_0x571619(0x12f));const _0x54742b=_0x2e87fc[_0x571619(0x14f)][0x0],_0x4eeeef=_0x54742b['url'],_0xab50fd=_0x54742b[_0x571619(0x12c)]['replace'](/[<>:"/\\|?*\x00-\x1F]/g,''),_0x3fc283='\x0a🎥\x20*VIDEO\x20DETAILS*\x20🎥\x0a\x0a📌\x20Title:\x20'+_0x54742b['title']+_0x571619(0x137)+_0x54742b[_0x571619(0x130)][_0x571619(0x135)]+_0x571619(0x120)+_0x54742b[_0x571619(0x11f)]['toLocaleString']()+_0x571619(0x123)+_0x54742b[_0x571619(0x156)]+_0x571619(0x131)+_0x54742b[_0x571619(0x13d)]+'\x0a';await global[_0x571619(0x155)][_0x571619(0x15d)](_0x42672f,_0x54742b[_0x571619(0x11d)],_0x3fc283),await global['kord'][_0x571619(0x158)](_0x42672f,emojis[_0x571619(0x11e)]);const _0x151d40=0x5;let _0xee3705=null,_0x3e2054=0x0;while(_0x3e2054<_0x151d40){try{const _0x5272f0=_0x571619(0x148)+encodeURIComponent(_0x4eeeef),_0x5f440d=await fetch(_0x5272f0);_0xee3705=await _0x5f440d[_0x571619(0x11b)]();if(_0xee3705[_0x571619(0x147)])break;_0x3e2054++,await delay(0x64*Math[_0x571619(0x122)](0x2,_0x3e2054));}catch(_0x405ad8){_0x3e2054++,await delay(0x64*Math[_0x571619(0x122)](0x2,_0x3e2054));}}if(!_0xee3705||!_0xee3705[_0x571619(0x147)])return await global[_0x571619(0x155)][_0x571619(0x158)](_0x42672f,emojis[_0x571619(0x144)]),await global[_0x571619(0x155)][_0x571619(0x151)](_0x42672f,_0x571619(0x125));const _0x45893b=_0xee3705[_0x571619(0x12e)][_0x571619(0x152)],_0x252194=_0x571619(0x12b),_0xfc9f7d=await fetch(_0x45893b),_0x2cb5de=await _0xfc9f7d[_0x571619(0x149)](),_0x53d1b1=settings[_0x571619(0x13c)]*0x400*0x400,_0x593a9c=_0x2cb5de[_0x571619(0x129)];if(_0x593a9c>_0x53d1b1)return await global[_0x571619(0x155)]['react'](_0x42672f,emojis[_0x571619(0x128)]),await global[_0x571619(0x155)][_0x571619(0x151)](_0x42672f,emojis[_0x571619(0x128)]+'\x20The\x20file\x20size\x20('+(_0x593a9c/0x400/0x400)[_0x571619(0x11a)](0x2)+_0x571619(0x142)+settings[_0x571619(0x13c)]+_0x571619(0x143));const _0x4e30dc=path[_0x571619(0x12a)](_0x571619(0x138));try{await fs['access'](_0x4e30dc);}catch(_0x2021f7){if(_0x2021f7['code']===_0x571619(0x12d))await fs[_0x571619(0x14b)](_0x4e30dc);else throw _0x2021f7;}const _0x47b3f8=path['join'](_0x4e30dc,_0xab50fd+'.'+_0x252194);await fs[_0x571619(0x136)](_0x47b3f8,_0x2cb5de);const _0x1f5e7a=_0x571619(0x154)+_0xab50fd;await global[_0x571619(0x155)]['sendVideo'](_0x42672f,await fs[_0x571619(0x127)](_0x47b3f8),_0x1f5e7a),await fs[_0x571619(0x150)](_0x47b3f8),await global[_0x571619(0x155)][_0x571619(0x158)](_0x42672f,emojis['done']);}catch(_0x30f1a4){await global[_0x571619(0x155)][_0x571619(0x158)](_0x42672f,emojis[_0x571619(0x144)]),console[_0x571619(0x126)](_0x571619(0x13a),_0x30f1a4);if(_0x30f1a4['message'][_0x571619(0x153)](_0x571619(0x157)))await global['kord'][_0x571619(0x151)](_0x42672f,'🌐\x20Hmm,\x20having\x20trouble\x20connecting\x20to\x20the\x20internet.\x20Please\x20try\x20again\x20later.');else _0x30f1a4[_0x571619(0x13e)][_0x571619(0x153)]('404')?await global[_0x571619(0x155)]['reply'](_0x42672f,'🚫🔗\x20The\x20video\x20is\x20no\x20longer\x20available.\x20Please\x20check\x20the\x20URL\x20and\x20try\x20again.'):await global[_0x571619(0x155)][_0x571619(0x151)](_0x42672f,'🤖\x20Oops!\x20Something\x20unexpected\x20happened.\x20We\x27ll\x20look\x20into\x20it.');}}};
'use strict'
























/*
███████████████████████████████████████████████████████████████████████████████
██******************** PRESENTED BY t33n Software ***************************██
██                                                                           ██
██                  ████████╗██████╗ ██████╗ ███╗   ██╗                      ██
██                  ╚══██╔══╝╚════██╗╚════██╗████╗  ██║                      ██
██                     ██║    █████╔╝ █████╔╝██╔██╗ ██║                      ██
██                     ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║                      ██
██                     ██║   ██████╔╝██████╔╝██║ ╚████║                      ██
██                     ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝                      ██
██                                                                           ██
███████████████████████████████████████████████████████████████████████████████

#SIGN-IN
This Bot currently dont need any sign-i to ebay cause there is no bot protections for public users. All data is easy accesable.

#IMPORTANT
- currently dont resize the window via config.json - ebay used different classes for different windows sizes so we use hardcoded device size

*/

























     /*
    ▄██████▄  ▀█████████▄       ▄█    ▄████████  ▄████████     ███        ▄████████
   ███    ███   ███    ███     ███   ███    ███ ███    ███ ▀█████████▄   ███    ███
   ███    ███   ███    ███     ███   ███    █▀  ███    █▀     ▀███▀▀██   ███    █▀
   ███    ███  ▄███▄▄▄██▀      ███  ▄███▄▄▄     ███            ███   ▀   ███
   ███    ███ ▀▀███▀▀▀██▄      ███ ▀▀███▀▀▀     ███            ███     ▀███████████
   ███    ███   ███    ██▄     ███   ███    █▄  ███    █▄      ███              ███
   ███    ███   ███    ███     ███   ███    ███ ███    ███     ███        ▄█    ███
    ▀██████▀  ▄█████████▀  █▄ ▄███   ██████████ ████████▀     ▄████▀    ▄████████▀
                           ▀▀▀▀▀▀
   Here you can add all Objects/Arrays
   */
var t33n = {};
var looperVAL = 1;
var scrappedSingleItemURLs_AR = [];

//puppeter
var client;
var page;

var configOBJECT = {};
var MongoDB;
var changeIP_NEWACC = false;
var changeIP = false;
var browserStarted = false;
var firstRUN = true;














/*
████████████████████████████████████████████████████████████████████████████████
.__                              __           .__               .__
|__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
|  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
|  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
|__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
         \/|__|                        |__|             /_____/         \/     \/
Here you can add all your plugins. *Note* The enabled plugins are necessary.
*/
const fs = require('fs'),
          useProxy = require('puppeteer-page-proxy'),
          { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator'),
          generatePassword = require("password-generator"),
          unq = require('unq'),
          request = require('request'),
          simpleTimestamp = require('simple-timestamp'),
          //uuidv1 = require('uuid/v1'),
          log = require('fancy-log'),
          chalk = require('chalk'),
          randomize = require('randomatic'),
          puppeteer = require('puppeteer'),
        //  moment = require('moment'),
          chalkAnimation = require('chalk-animation'),
          gradient = require('gradient-string'),
          dateFormat = require('dateformat'),
          cheerio = require('cheerio'),
          os = require('os'),
          osHOME = os.homedir(),
          osPLATFORM = os.platform(),
          //image2base64 = require('imageurl-base64'),
          Entities = require('html-entities').XmlEntities,
          entities = new Entities(),
          {exec} = require('child_process'),
          //const path = require('path');
          //const shuffle = require('shuffle-array');

/*
          json_vpnFile = fs.readFileSync('/home/t33n/Desktop/nordvpn/acc.json', 'utf8'),
          json_vpn = JSON.parse(json_vpnFile),
          vpn_username = json_vpn.username,
          vpn_password = json_vpn.password,
*/



          json_configFile = fs.readFileSync('./admin/config.json', 'utf8'),
          json_config = JSON.parse(json_configFile),




          config_browser_profile = json_config.browser_profile,



         //############### CHROME WINDOW SIZE - START #####################################
          windowWidth = json_config.windowWidth,
          windowHeight = json_config.windowHeight,
          windowSizeComplete = '--window-size=' + windowWidth + ',' + windowHeight,
         //############### CHROME WINDOW SIZE - END #####################################



        //############## disable screen record ##################################
        enable_screenImage = json_config.enable_screenImage,



        //############## MongoDB ##################################
       MongoClient = require('mongodb').MongoClient,
       assert = require('assert'),
       MongoDB_DB_URL = json_config.MongoDB_DB_URL,
       MongoDB_DB_NAME = json_config.MongoDB_DB_NAME,





         //############## spoofer area for request ##################################
         enable_proxy_request = json_config.enable_proxy_request,
         enable_socks_request = json_config.enable_socks_request,
         enable_useragent_request = json_config.enable_useragent_request,
         proxySERVER = json_config.proxy;





         //############### TIMEOUTS - START #####################################
          configOBJECT.waiter = Number(json_config.pause2);
          log('#11 - configOBJECT.waiter: ' + configOBJECT.waiter);



/*
          configOBJECT.waiterSCROLL = Number(json_config.pause3_scroll);
          log('#11 - configOBJECT.waiterSCROLL: ' + configOBJECT.waiterSCROLL);

          configOBJECT.tempnumberSCROLL = Number(json_config.scroll_distance);
          log('#11 - configOBJECT.tempnumberSCROLL: ' + configOBJECT.tempnumberSCROLL);


          configOBJECT.scroll_loopAmount = Number(json_config.scroll_loopAmount);
          log('#11 - configOBJECT.scroll_loopAmount: ' + configOBJECT.scroll_loopAmount);
*/




          configOBJECT.pause5_end = Number(json_config.pause5_end);
          log('#11 - configOBJECT.pause5_end: ' + configOBJECT.pause5_end);






































                                                           /*
                                                           ████████████████████████████████████████████████████████████████████████████████
                                                          */

                                                           //############## GET HEADLESS VALUE ##################################

                                                           const headlessVALUE = json_config.headless;


                                                           var disableGPU;


                                                           log( '\n\nWe will check now your headless value..headlessVALUE: ' + headlessVALUE );
                                                           if( headlessVALUE ) {
                                                           log('\n\nYou enabled headless..\n\n');

                                                                disableGPU = '--disable-gpu';

                                                           } //  if(headlessVALUE == 'yes') {
                                                           else {
                                                           log('\n\nYou disabled headless..\n\n');

                                                                disableGPU = '--disable-popup-blocking';

                                                          } // else from if( headless ) {

                                                            /*
                                                            ████████████████████████████████████████████████████████████████████████████████
                                                            */




























         log( '\n\n\nWE USE THIS HOMEPATH: ' + osHOME + '\n\n' );









         // ## get random user agent
         const useragentARRAY = require('./lib/useragent').useragent;
         //log('useragentARRAY: ' + useragentARRAY)


         function randomUSERAGENT(){
         log('ENTER randomUSERAGENT()')

         if( enable_useragent_request == 'yes' ){
         log('#234324 You choosed that user-agents are enabled when we use the request module when we download as example a image. We will choose now a random user agent..The user agent list can be found at ./lib/useragent.js\nIf you don´t want to use custom user-agents please open ./admin/config.json and change it to: "enable_useragent_request":"no"')

           var randomUSERAGENT = useragentARRAY[Math.floor(Math.random()*useragentARRAY.length)]
           log( '#234243 random USERAGENT: ' + randomUSERAGENT )
         } else var randomUSERAGENT = ''

           return randomUSERAGENT;

         }
















         // ## get random proxy
         const proxylistARRAY = require('./lib/proxylist').proxylist;
         //log('proxylistARRAY: ' + proxylistARRAY)

         function randomproxylist(){
         log('ENTER randomproxylist()')

         if( enable_proxy_request == 'yes' ){
         log('#234324 You choosed that proxies are enabled when we use the request module when we download as example a image. We will choose now a random proxy..The proxy list can be found at ./lib/proxylist.js\nIf you don´t want to use proxies please open ./admin/config.json and change it to: "enable_proxy_request":"no"')
           var randomPROXY = 'http://' + proxylistARRAY[Math.floor(Math.random()*proxylistARRAY.length)]
           log( '#23rgegergerge43 random PROXY: ' + randomPROXY )
         } else var randomPROXY = ''


         return randomPROXY;
         } // randomproxylist()





















//const proxylistARRAY_nordvpn = JSON.parse( fs.readFileSync('./lib/nordvpn_all_server.json', 'utf8') );
//log('proxylistARRAY: ' + proxylistARRAY)




  function randomSOCKSlist_nordvpn(){
  log('ENTER randomSOCKSlist_nordvpn()')



           let obj = proxylistARRAY_nordvpn[Math.floor(Math.random()*proxylistARRAY_nordvpn.length)];
           log( 'NordVPN SOCKS - Current SOCKS Informations: ' + JSON.stringify(obj, null, 4) );

           if( !obj.features.socks ){
           log( 'NordVPN SOCKS - Current server does not support SOCKS.. we choose a new SOCKS now!' );
             process.nextTick( randomSOCKSlist_nordvpn );
             return;
           } // if( !obj.features.SOCKS ){


           let proxy = 'socks5://' + vpn_username + ':' + vpn_password + '@' + obj.domain + ':1080'
           log( 'NordVPN SOCKS - Final SOCKS: ' + obj.domain );

           proxyorsocksChoosed(proxy);


  } // randomSOCKSlist_nordvpn()









  function randomproxylist_nordvpn(){
  log('ENTER randomproxylist_nordvpn()')



           let obj = proxylistARRAY_nordvpn[Math.floor(Math.random()*proxylistARRAY_nordvpn.length)];
           log( 'NordVPN PROXY - Current Proxy Informations: ' + JSON.stringify(obj, null, 4) );

           if( !obj.features.proxy_ssl && !obj.features.proxy ){
           log( 'NordVPN SOCKS - Current server does not support PROXY.. we choose a new PROXY now!' );
             process.nextTick( randomproxylist_nordvpn );
             return;
           } //    if( !obj.features.proxy_ssl && !obj.features.proxy ){


           let proxy = 'https://' + vpn_username + ':' + vpn_password + '@' + obj.domain + ':89'
           log( 'NordVPN PROXY - Final PROXY: ' + obj.domain );

           proxyorsocksChoosed(proxy);


  } // randomSOCKSlist_nordvpn()
































async function proxyorsocksChoosed(proxy){
log( 'ENTER proxyorsocksChoosed()' );



         if( changeIP_NEWACC ){
         log( 'changeIP_NEWACC - this means we will change now the ip and after create new acc..' );

                    await useProxy(page, null);
                    await useProxy(page, proxy);
                    process.nextTick(checkSocksSpeed);

          } // if( changeIP_NEWACC ){
          else {

                if ( changeIP ){
                log( '#123123 - changeIP' );

                  await useProxy(page, null);
                  await useProxy(page, proxy);
                  process.nextTick(checkSocksSpeed);

                } // if ( changeIP ){
                else {
                  log( '#123123 - !changeIP' );


                            await useProxy(page, null);
                            await useProxy(page, proxy);
                            process.nextTick(checkSocksSpeed);

                } // else from if ( changeIP ){


        } // else from if( changeIP_NEWACC ){


} // function proxyorsocksChoosed(){



















































function checkSocksSpeed(){
(async () => {
log( 'ENTER checkSocksSpeed()' );



  try {
      await page.goto('https://browserleaks.com/ip', {waitUntil: 'networkidle0', timeout: 35000});
  } catch(e) {
  log('#2 - Error while try to check proxy speed - error :' + e);

    if( e.toString().match("timeout") ) {
      log( 'Proxy Speed Test - Timeout error found.. We change proxy now again..' );
      if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
      if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);

    } // if( e.match("timeout") ) {

      if( e.toString().match("net::ERR_FAILED") ) {
        log( 'Proxy Speed Test - net::ERR_FAILED error found.. We change proxy now again..' );
        if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
        if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);

      } // if( e.match("timeout") ) {



      return;
  } // catch(e) {
  log( 'Proxy Speed Test - website was loaded as it seems..' );




              let css = await page.evaluate(() => document.querySelector('table').outerHTML);
              //log( 'upload status html:' + css );
              let $ = cheerio.load(css);






              $( 'table > tbody > tr' ).each(function(){

                          /////////  ####### IP address ###### /////////
                          let cssSELECTOR = $(this).find('td');
                          //log('#897a current cssSELECTOR: ' + cssSELECTOR);

                          if(cssSELECTOR){
                          //log( 'cssSELECTOR was found..' );

                            $(cssSELECTOR).each(function(){
                            //log( '#123123 - $(this): ' + $(this) );

                              if( $(this).text() == 'IP address' ){

                                     let currentIP = $(this).next().text().trim();
                                     log( '#current IP: ' + currentIP );

                              } // if( $(this).text() == 'IP address' ){

                                if( $(this).text() == 'Country' ){

                                       let country = $(this).next().text().trim();
                                       log( '#current Country of IP: ' + country );

                                } // if( $(this).text() == 'Country' ){


                          }) // $( 'table > tbody > tr' ).each(function(){
                          } // if(cssSELECTOR){


               }) // $( 'table > tbody > tr' ).each(function(){
               log( '#34lö2lk - for each loop done for table..' );




          if( changeIP_NEWACC ){
           changeIP_NEWACC = false;
           process.nextTick(createnewACC);
           } // if( changeIP_NEWACC ){
           else {

             if( changeIP ){
              log( '#234234 changeIP' );
               changeIP = false;
               process.nextTick(scrapSingleItemURL);
             } //  if( changeIP ){
             else process.nextTick(connectMongoDB);


           } // else from if( changeIP_NEWACC ){




 })().catch((e) => {

   console.error('#2333 - Error while try to check proxy speed - error :' + e);


 }); //  })().catch((e) => {
} // function checkSocksSpeed(){













































































                        /*
                         ████████████████████████████████████████████████████████████████████████████████
                         */


                         // ADVERTISE
                         var ads = gradient('red', 'white').multiline([
                                '',
                                'Presented by',
                                '████████╗██████╗ ██████╗ ███╗   ██╗',
                                '╚══██╔══╝╚════██╗╚════██╗████╗  ██║',
                                '   ██║    █████╔╝ █████╔╝██╔██╗ ██║',
                                '   ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║',
                                '   ██║   ██████╔╝██████╔╝██║ ╚████║',
                                '   ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ Software'
                         ].join('\n'));
                         console.log(ads);
                         console.log( '\nCheck my Github Profile: ' + chalk.white.bgGreen.bold(' github.com/CyberT33N ')  + '\n\n');
                         console.log( gradient('white', 'black')('\n\n=======================================\n\n') );







                                                startBROWSER();
                                       function startBROWSER(){
                                       (async () => {
                                       log( 'We will start now your Browser please wait..' );
                                       browserStarted = true;


                                       if( enable_screenImage == 'yes' ) process.nextTick( screenlooper );



                                                            client = await puppeteer.launch({
                                                             //executablePath: puppeteerBinaryPATH,
                                                             //executablePath: '/snap/bin/chromium',
                                                             //executablePath: '/usr/bin/google-chrome',
                                                             //executablePath: '/home/t33n/Downloads/Linux_x64_749751_chrome-linux/chrome-linux/chrome',
                                                            // executablePath: '/home/t33n/Downloads/firefox-78.0a1.en-US.linux-x86_64/firefox/firefox',
                                                             headless: headlessVALUE, // true or false
                                                             userDataDir: '../../../../../lib/browserProfiles/' + config_browser_profile,
                                                             args: [
                                                             windowSizeComplete,

                                                             //'--proxy-server=' + proxySERVER,

                                                             //serbia
                                                           //'--proxy-server=socks5://us3229.nordvpn.com:1080',
                                                           //'--host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE us3229.nordvpn.com"',

                                                               //random proxy
                                                            //  '--proxy-server=' + proxy,


                                                              //random proxy
                                                            // '--proxy-server=http://localhost:8000',

                                                              //random proxy
                                                            // '--proxy-server=https://' + vpn_username + ':' + vpn_password + '@us3229.nordvpn.com:89',


                                                           //'--proxy-server=https://rs7.nordvpn.com:89',


                                                           // vietnam
                                                           //'--proxy-server=https://vn9.nordvpn.com:89',






                                                           '--disable-extensions-except=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0,../../../../../lib/chromeextension/ipfuck/bjgmbpodpcgmnpfjmigcckcjfldcicnd/1.3_0,../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0,../../../../../lib/chromeextension/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0,../../../../../lib/chromeextension/policycontrol/eekommagmgepaafaaegimeldlnnnolgn/0.3.5_0,../../../../../lib/chromeextension/alertblocker/ofjjanaennfbgpccfpbghnmblpdblbef/1.3_0,../../../../../lib/chromeextension/letmeout/hnfdibcbmlppjlkefinedeffoiomlecc/1.3_0,../../../../../lib/chromeextension/showmyip/pdnildedfbigagjbaigbalnfdfpijhaf/1.2.1_0,../../../../../lib/chromeextension/violentmonkey/jinjaccalgkegednnccohejagnlnfdag/2.12.7_0,../../../../../lib/chromeextension/touchvpn/bihmplhobchoageeokmgbdihknkjbknd/3.1.5_0',
                                                       '--load-extension=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0',
                                                       '--load-extension=../../../../../lib/chromeextension/ipfuck/bjgmbpodpcgmnpfjmigcckcjfldcicnd/1.3_0',
                                                       '--load-extension=../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0',
                                                       '--load-extension=../../../../../lib/chromeextension/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0',
                                                       '--load-extension=../../../../../lib/chromeextension/policycontrol/eekommagmgepaafaaegimeldlnnnolgn/0.3.5_0',
                                                       '--load-extension=../../../../../lib/chromeextension/alertblocker/ofjjanaennfbgpccfpbghnmblpdblbef/1.3_0',
                                                       '--load-extension=../../../../../lib/chromeextension/letmeout/hnfdibcbmlppjlkefinedeffoiomlecc/1.3_0',
                                                       '--load-extension=../../../../../lib/chromeextension/showmyip/pdnildedfbigagjbaigbalnfdfpijhaf/1.2.1_0',
                                                       '--load-extension=../../../../../lib/chromeextension/violentmonkey/jinjaccalgkegednnccohejagnlnfdag/2.12.7_0',
                                                        '--load-extension=../../../../../lib/chromeextension/touchvpn/bihmplhobchoageeokmgbdihknkjbknd/3.1.5_0',





                                                             '--disable-flash-3d',



                                                             // HEADLESS SCRAP ARGS
                                                             disableGPU,
                                                             //'--user-agent=' + randomUSERAGENT(),

                                                             '--no-sandbox',
                                                            // '--disable-setuid-sandbox',
                                                             '--disable-popup-blocking',
                                                             '--disable-notifications',
                                                             '--disable-dev-shm-usage',
                                                             '--force-webrtc-ip-handling-policy=disable-non-proxied-udp',

                                                             '--disable-flash-stage3d',
                                                             '--disable-java',
                                                             '--disable-internal-flash',
                                                             '--disable-cache',
                                                             '--disable-webgl', // webgl
                                                             '--disable-3d-apis', // webgl
                                                             //'--disable-extensions',
                                                             '--disable-webgl-image-chromium',
                                                             '--disable-reading-from-canvas',
                                                             '--lang=en']

                                                           });



                                                           page = await client.newPage();
                                                           await page.waitFor(5000);
                                                           await page.bringToFront();
                                                           await page.setViewport({width:windowWidth, height:windowHeight});
                                                           log( 'Browser should be started now..' );



                                                           // auth with proxy
                                                           //await page.authenticate({'username': vpn_username, 'password': vpn_password});

  /*
                                                           page.goto('https://browserleaks.com/ip', {waitUntil: 'networkidle0', timeout: 0});

  */




                                                           if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
                                                           log('You choosed that proxies are enabled! We will choose now a random proxy..The proxy list can be found at ./lib/nordvpn_all_server.json\nIf you don´t want to use proxies please open ./admin/config.json and change it to: "enable_proxy_request":"no"');

                                                                  if( enable_proxy_request == 'yes' && enable_socks_request == 'yes' ) {
                                                                    log('WARNING -  you cant enable proxy and socks at the same time.. please choose one..');
                                                                    return;
                                                                  } // if( enable_proxy_request == 'yes' && enable_socks_request == 'yes' ) {
                                                                    if( enable_proxy_request == 'yes') process.nextTick(randomproxylist_nordvpn);
                                                                    if( enable_socks_request == 'yes') process.nextTick(randomSOCKSlist_nordvpn);


                                                           } // if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){
                                                           else {



log(`Your browser should be starting now! You can now adjust anything you want like installing extensions etc.

This browser window which will open will use the SAME profile as the real scrap script!
So all changes at the browser will be aswell at the main script browser!

Please read the Documentation to understand how this Bot works!`);


                                                           } // else from if( enable_proxy_request == 'yes' || enable_socks_request == 'yes' ){










                                                })().catch((e) => {



                                                      if(typeof e == 'string'){
                                                          if( e == 'Error: connect ECONNREFUSED 0.0.0.0:4444' ) log( 'error #12332' );
                                                      }//   if(typeof e == 'string'){
                                                      else{
                                                          log('Error while try to start browser - error :' + JSON.stringify( e, null, 4) )

                                                          if ( e.length == undefined ) {
                                                            log( 'e.length == 0 --- You maybe started your Bot while chromium windows with this current Browser Profile is still open..' );
                                                            //process.nextTick(checkSocksSpeed);
                                                          }

                                                      } // else from if(typeof e == 'string'){


                                                }); //   })().catch((e) => {
                                              } //        async function startBROWSER(){
























              /*
              █████████████████████████████████████████████████████████████████████████████
              */

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







*/







/*



process.stdin.resume();



process.stdin.pause();



*/














                         const  log = require('fancy-log'),
                                 chalk = require('chalk'),
              chalkAnimation = require( 'chalk-animation' ),
                           gradient = require( 'gradient-string' ),
                                       fs = require('fs-extra'),
                               {exec} = require('child_process'),
                                      os = require('os'),
                           osHOME = os.homedir(),
                  osPLATFORM = os.platform(),



                json_configFile = fs.readFileSync('./admin/config.json', 'utf8'),
                      json_config = JSON.parse(json_configFile),







                      //############## MongoDB ##################################
                       MongoDB_BIN = json_config.MongoDB_BIN,

                       MongoDB_DB_HOST = json_config.MongoDB_DB_HOST,
                       MongoDB_DB_PORT = json_config.MongoDB_DB_PORT,

                     MongoDB_DB_URL = json_config.MongoDB_DB_URL,
                 MongoDB_DB_NAME = json_config.MongoDB_DB_NAME,

                 MongoDB_DB_PASSWORD = json_config.MongoDB_DB_PASSWORD,
                 MongoDB_DB_USERNAME = json_config.MongoDB_DB_USERNAME;






























                      /*



                      █████████████████████████████████████████████████████████████████████████████



                      */






































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
console.log( '\nCheck my Upwork Profile: ' + chalk.white.bgGreen.bold(' github.com/CyberT33N ')  + '\n\n')
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );















log( chalk.green.bold('Welcome! :)\n\nThis script will export ALL collections from your database to the export folder! Please read the Install Area of the DOCS for full details ..\n\n\n\n') );













































































































                exportDB();
function exportDB(){
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
 log('We will export now all collections.. Please wait..');

 let mongoExport;
 if( osPLATFORM == 'darwin' ) mongoExport = 'mongoexport';
 if( osPLATFORM == 'linux' ) mongoExport = 'mongoexport';
 if( osPLATFORM == 'win32' ) mongoExport = 'mongoexport.exe';

 let execlineExport = `"${MongoDB_BIN}${mongoExport}" --jsonArray --pretty -h "${MongoDB_DB_HOST}:${MongoDB_DB_PORT}" -u "${MongoDB_DB_USERNAME}" -p "${MongoDB_DB_PASSWORD}" -d "${MongoDB_DB_NAME}" -c "export" -o "./export/json/export.json"`
 let execlineImport = `"${MongoDB_BIN}${mongoExport}" --jsonArray --pretty -h "${MongoDB_DB_HOST}:${MongoDB_DB_PORT}" -u "${MongoDB_DB_USERNAME}" -p "${MongoDB_DB_PASSWORD}" -d "${MongoDB_DB_NAME}" -c "import" -o "./export/json/import.json"`
 let execlineSingleItemURL = `"${MongoDB_BIN}${mongoExport}" --jsonArray --pretty -h "${MongoDB_DB_HOST}:${MongoDB_DB_PORT}" -u "${MongoDB_DB_USERNAME}" -p "${MongoDB_DB_PASSWORD}" -d "${MongoDB_DB_NAME}" -c "single_item_url" -o "./export/json/single_item_url.json"`

let execline = `${execlineExport} & ${execlineImport} & ${execlineSingleItemURL}`
log('execline: ' + execline)

   exec(execline, function(e, stdo, stde) {

               if ( e ) {
                 log( chalk.red.bold('❌ ERROR ') + "There was an error while try to exec: " + chalk.white.bold(execline) + "\nError:\n" + chalk.white.bold( e ) + "\nstderr:\n" + chalk.white.bold( stde ) );
                 return;
               } //  if ( stderr || err ) {

                 log('Successfully exported all collections.. stdo: ' + stdo);
                 end();


       }); // exec(execline, function(e, stdo, stde) {



} // function importDB(){




















































             function end(){
               console.log( gradient('white', 'black')('\n\n=======================================\n\n') );

                  log('We reached the end of this script! I hope that everything runs correctly!\n\nIf something was not correctly done please contact me and send me your logs!\n\nYou can close this Terminal Window now..\n\n')
                  process.exit();

             } // function end(){

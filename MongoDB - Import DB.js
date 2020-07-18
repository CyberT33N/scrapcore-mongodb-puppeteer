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











                           var t33n = {}







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
                                MongoClient = require('mongodb').MongoClient,
                                            assert = require('assert'),
                     MongoDB_DB_URL = json_config.MongoDB_DB_URL,
                 MongoDB_DB_NAME = json_config.MongoDB_DB_NAME;






























                      /*



                      █████████████████████████████████████████████████████████████████████████████



                      */
















                      // Use connect method to connect to the server
                      var MongoDB;
                      MongoClient.connect(MongoDB_DB_URL, { useNewUrlParser: true }, function(e, client) {

                        if(e){
                        log( chalk.red.bold('❌ ERROR') + ' Error while try to connect to MongoDB Database - ' + chalk.white.bold('error:\n') + e );
                        //assert.equal(null, e);
                        return;
                      } //   if(e){

                        log( 'MongoDB - Connected successfully to server..' );

                        MongoDB = client.db( MongoDB_DB_NAME );
                          checkDB(client);

                        //client.close();

                      }); // MongoClient.connect(url, function(err, client) {






















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















log( chalk.green.bold('Welcome! :)\n\nThis script will import your scrap.js file from the INSTALL THIS folder to your MongoDB Database! Please read the Install Area of the DOCS for full details ..\n\n\n\n') );
















































































  function checkDB(client){
log( 'ENTER checkDB()' );


    var collection = MongoDB.collection('import');

    // Find some documents
      collection.find().limit( 1 ).toArray(function(e, docs) {

        if(e){
        log( chalk.red.bold('❌ ERROR') + ' There was an error while try to get the current page - ' + chalk.white.bold('error:\n') + e );
        //assert.equal(null, e);
        return;
      } //   if(e){


        if( docs[0] ){

                  log( 'Found the following records:\n' + JSON.stringify(docs, null, 4) );
                  log( chalk.green.bold('❌ DATABASE ALREADY EXIST') + ' - As it seems your database already exist.. We will skip the creation process..' );
                  end(client);

        } //     if( docs[0] ){
        else{

                 log( chalk.green.bold('✔ SUCCESS') + ' The database was not found.. This means we will create it now..' );
                 importDB(client);

        } // else from  if( docs[0] ){


   }); //       collection.find().limit( 1 ).toArray(function(e, docs) {


 }// function checkDB(){














































function importDB(client){
console.log( gradient('white', 'black')('\n\n=======================================\n\n') );
 log('We will import now the file "./INSTALL THIS/scrap.js".. Please wait..');

 var collection = MongoDB.collection('import');
 var databaseARRAY = require('./INSTALL THIS/scrap').database;
 log( 'databaseARRAY: ' + JSON.stringify(databaseARRAY, null, 4) );

 collection.insertMany(databaseARRAY, function(e, result) {

           if(e){
           log( chalk.red.bold('❌ ERROR') + ' There was an error while try to import your database - ' + chalk.white.bold('error:\n') + e );
           //assert.equal(null, e);
           return;
         } //   if(e){

        log( chalk.green.bold('✔ SUCCESS') + ' The database was successfully imported... You can use MongoDB Compass to check your database structure..' );
        end(client);
  });



} // function importDB(){




















































             function end(client){
               console.log( gradient('white', 'black')('\n\n=======================================\n\n') );

                  log('We reached the end of this script! I hope that everything runs correctly!\n\nIf something was not correctly done please contact me and send me your logs!\n\nYou can close this Terminal Window now..\n\n')

                  client.close();
                  process.exit();

             } // function end(){

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
             log = require('fancy-log'),
             chalk = require('chalk'),
             chalkAnimation = require('chalk-animation'),
             gradient = require('gradient-string'),
             json_configFile = fs.readFileSync('./admin/config.json', 'utf8'),
             json_config = JSON.parse(json_configFile),



                                   //############## MongoDB ##################################
                                             MongoClient = require('mongodb').MongoClient,
                                                         assert = require('assert'),
                                  MongoDB_DB_URL = json_config.MongoDB_DB_URL,
                              MongoDB_DB_NAME = json_config.MongoDB_DB_NAME;




     /*
     ████████████████████████████████████████████████████████████████████████████████
     */




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
                                  markimportasNOTUSED(client);
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
























      function markimportasNOTUSED(client){

            log('\n\nWe will mark now the import table as used=1')



            var collection = MongoDB.collection('import');
            collection.updateMany({}, { $set: { used: 1 } }, function(e, res) {
                if(e){
                     log(chalk.red.bold('❌ ERROR') + ' #1 There was an error while try to mark the mark the the import table as used=1 - ' + chalk.white.bold('error:\n') + e);
                     return;
                 } // if(e){

                                  log('Successfully set the import table to used=1');
                                  client.close();
                                  process.exit();

              }); // collection.updateOne(query, newvalues, function(e, res) {







      } // function markimportasNOTUSED(){

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

     var t33n = {}

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
             //const path = require('path');
             //const shuffle = require('shuffle-array');
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
                               console.log( '\nCheck my Upwork Profile: ' + chalk.white.bgGreen.bold(' github.com/CyberT33N ')  + '\n\n');
                               console.log( gradient('white', 'black')('\n\n=======================================\n\n') );






















     // Use connect method to connect to the server
     var MongoDB;
     MongoClient.connect(MongoDB_DB_URL, { useNewUrlParser: true }, function(e, client) {

       if(e){
       log( chalk.red.bold('❌ ERROR') + ' Error while try to connect to MongoDB Database - ' + chalk.white.bold('error:\n') + e );
       //assert.equal(null, e);
       return;
     } //   if(e){

       log( 'MongoDB - Connected successfully to server..\n\nAuth Check was successfully..' );

       MongoDB = client.db( MongoDB_DB_NAME );
       client.close();

     }); // MongoClient.connect(url, function(err, client) {

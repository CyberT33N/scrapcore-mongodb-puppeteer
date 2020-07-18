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

     var t33n = {};















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

  const os = require( 'os' ),

        //C:\Users\Administrator
        os_HOMEpath = os.homedir(),

        os_Architecture = os.arch();


const fs = require('fs'),
      path = require('path'),
      simpleTimestamp = require('simple-timestamp'),
      CircularJSON = require('circular-json'),
      mime = require('mime-types'),
      chalk = require('chalk'),
      chalkAnimation = require('chalk-animation'),
      gradient = require('gradient-string'),
      log = require('fancy-log');





const readline = require('readline'),
      { google } = require('googleapis'),
      service = google.drive('v3'),
      { OAuth2Client } = require('google-auth-library'),
      googleAuth = require('google-auth-library');









const json_configFile = fs.readFileSync( path.join(__dirname, '../../../../admin/config.json'), 'utf8'),
           json_config = JSON.parse(json_configFile),

      //############### CREDITS FILE #####################################
      gdrive_credentials = json_config.gdrive_credentials;





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






// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/drive-nodejs-quickstart.json
var SCOPES = ['https://www.googleapis.com/auth/drive'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-nodejs-quickstart.json';


// Load client secrets from a local file.
fs.readFile( gdrive_credentials, function processClientSecrets(e, content) {

  if (e) {
    log( chalk.red.bold('❌ ERROR') + ' Google Auth Area - We faced an error while try to fs.readFile with file: ' + chalk.blue.bold( gdrive_credentials ) + '\n\nIf the following error will tell you that client_secret does not exist then you may didn´t use the Auth Creator for Google Drive yet.\n\nPlease read the DOCS to understand where you get the client_secret.json from. When you get the client_secret.json please move it to ' + gdrive_credentials + '\n\nerror:' + e )
    return;
  }
  // Authorize a client with the loaded credentials, then call the
  // Drive API.
  //authorize(JSON.parse(content), listFiles);
    authorize(JSON.parse(content), real_upload_files);
});
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret,
      clientId = credentials.installed.client_id,
      redirectUrl = credentials.installed.redirect_uris[0],
      oauth2Client = new OAuth2Client(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(e, token) {
    if(e) getNewToken(oauth2Client, callback)
    else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}























































function real_upload_files(auth) {
log(':\n' + '█████████████████████ ## ENTER Google Drive Area ## █████████████████████' +  '\n\n')



var drive = google.drive({ version: 'v3', auth: auth })














// LIST CURRENT FILES FROM ROOT ..
  drive.files.list({
    auth: auth,
    pageSize: 1000,
    fields: "nextPageToken, files(id, name)"
  }, function(e, r) {
    if (e) {
      log( chalk.red.bold('❌ ERROR') + ' We faced an error while try to list files at Google Drive - Error:\n' + chalk.white.bold( e ) )
      return;
    } //   if (e) {


    var files = r.data.files


   if (!files) {
     log(':\nNo files found.\n')
     create_folder_googledrive()
   } // if (!files) {
   else {
    log('#90132dd23')


      for (var i = 0; i < files.length; i++) {
        var file = files[i]
        log( chalk.blue.bold('INFO') + ' Found this files in your Google Drive Storage - File Name:\n' + chalk.white.bold( file.name ) + '\n File ID:\n' + chalk.white.bold( file.id ) )
      } // for (var i = 0; i < files.length; i++) {

      log('#3248923489234')
      create_folder_googledrive()

   } // else from if (!files) {


}) // }, function(e, r) {



























  function create_folder_googledrive() {


  var resource = {
    mimeType: 'application/vnd.google-apps.folder',
    name: 'TEST - '  + simpleTimestamp()
    }



    drive.files.create({

          auth: auth,
          fields: 'id',
          resource: resource

    },function(e, r){
              if (e) {
                 log( chalk.red.bold('❌ ERROR') + ' Google Drive - We faced an error while try to create your folder - Error:\n' + chalk.white.bold( e ) )
                 return;
              }
                  log( chalk.green.bold('✔ SUCCESS') + ' Google Drive - Successfully create folder - Response:\n' + chalk.white.bold( JSON.stringify(r.data, null, 4) ) )

                  t33n.foldername_folderid = r.data.id
                  //log(':\n Response id :\n', r.id)
                  if (t33n.foldername_folderid) uploadFile_googledrive()
                  else log( chalk.red.bold('❌ ERROR') + ' Google Drive -  We can´t find folder ID..' )

          }) //  },function(e, r){
  } // function create_folder_googledrive() {


















function uploadFile_googledrive() {
log('ENTER uploadFile_googledrive()')


  var samplefilePATH = './sample.jpg'

  var mimedata = mime.lookup( samplefilePATH )
  log( 'mimedata: ' + mimedata )



          var fileMetadata = {
              'name': 'sample.jpg',
              parents: [ t33n.foldername_folderid ]
          } // var fileMetadata = {

          var media = {
              mimeType: mimedata,
              body: fs.createReadStream( samplefilePATH )
          } // var media = {

          drive.files.create({
              resource: fileMetadata,
              media: media,
              auth: auth,
              fields: 'id'
          }, function(e, file) {
              if (e) {
                log( chalk.red.bold('❌ ERROR') + ' Google Drive - We faced an error while try to upload your file - Error:\n' + chalk.white.bold( e ) )
                return;
              } //   if (e) {

            //    log( '#92349 file: ' + JSON.stringify(file, null, 4) )


            var test = CircularJSON.stringify(file);
            log('#98249 response: ' + test + '\n\n\n\n');



                  log( chalk.green.bold('✔ SUCCESS') + ' Successfully uploaded your file to your Google Drive Storage - File ID:\n' + chalk.white.bold( file.data.id ) + '\n\n\n\n' )
                  log( 'If you see this message here than your Auth Check was successfully. This script created a test folder in your Google Drive storage and uploaded inside of this folder the sample.jpg!' )



          }); // drive.files.create({

/*
                    log('\n\nGoogle Drive - Upload will be started now .. '  + '\n\n' );
                    chalkAnimation.neon( 'WAIT.. We upload :)' );
*/



} // function uploadFile_googledrive() {
















} // function real_upload_files(auth) {

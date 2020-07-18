#pwd <-- current directory
#-------------------------------------------------------------------------------
cd "$(dirname "$0")"
pwd
printf "\nWe will display now the current directory used:"
echo "$(dirname "$0")"
printf "\n\nWe will start now your browser for this bot! The scrap process will NOT be started! Only the browser window will start\n\nPlease wait.. This maybe take some time..\n"
node "BOT - Start ONLY Browser without main script.js"
printf "\nWe finished the .sh file :) - Created by Dennis Demand( github.com/CyberT33N )\n"

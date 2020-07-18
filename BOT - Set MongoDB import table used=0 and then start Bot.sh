#pwd <-- current directory
#-------------------------------------------------------------------------------
cd "$(dirname "$0")"
pwd
printf "\nWe will display now the current directory used:"
echo "$(dirname "$0")"

printf "\n\nWe will mark now your import table as used=0\n\nPlease wait.. This maybe take some time..\n"
node "MongoDB - set import table to used=0.js"
printf "\n\nWe should be done with marking the import table as used=0\n"

printf "\n\nWe will start now the scrap process..\n\nPlease wait.. This maybe take some time..\n"
node "BOT - Start.js"

printf "\nWe finished the .sh file :) - Created by Dennis Demand( github.com/CyberT33N )\n"

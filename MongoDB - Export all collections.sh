#pwd <-- current directory
#-------------------------------------------------------------------------------
cd "$(dirname "$0")"
pwd
printf "\nWe will display now the current directory used:"
echo "$(dirname "$0")"
printf "\n\nWe will start now: MongoDB - Export all collections.js..\n\nPlease wait.. This maybe take some time..\n"
node "MongoDB - Export all collections.js"
printf "\nWe finished the .sh file :) - Created by Dennis Demand( github.com/CyberT33N )\n"

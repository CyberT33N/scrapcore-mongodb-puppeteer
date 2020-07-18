#pwd <-- current directory
#-------------------------------------------------------------------------------
cd "$(dirname "$0")"
pwd
printf "\nWe will display now the current directory used:"
echo "$(dirname "$0")"
printf "\n\nWe will mark now your single_item_url collection as used=1\n\nPlease wait.. This maybe take some time..\n"
node "MongoDB - set single_item_url table to used=1.js"
printf "\nWe finished the .sh file :) - Created by Dennis Demand( github.com/CyberT33N )\n"

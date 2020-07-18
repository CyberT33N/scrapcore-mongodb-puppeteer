#pwd <-- current directory
#-------------------------------------------------------------------------------
cd "$(dirname "$0")"
pwd
printf "\nWe will display now the current directory used:"
echo "$(dirname "$0")"
printf "\n\nWe will check now your MongoDB Connection..\n\nPlease wait.. This maybe take some time..\n"
sudo "MongoDB - Auth Checker Tool.js"
printf "\nWe finished the .sh file :) - Created by Dennis Demand( github.com/CyberT33N )\n"

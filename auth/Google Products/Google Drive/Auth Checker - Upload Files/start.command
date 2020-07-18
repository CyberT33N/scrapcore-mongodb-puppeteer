#pwd <-- current directory
#-------------------------------------------------------------------------------
cd "$(dirname "$0")"
pwd
printf "\nWe will display now the current directory used:"
echo "$(dirname "$0")"
printf "\n\nWe will start now your bot!\n\nPlease wait.. This maybe take some time..\n"
sudo node --optimize_for_size --max-old-space-size=8192 --expose-gc start.js
printf "\nWe finished the .sh file :) - Created by Dennis Demand( github.com/CyberT33N )\n"

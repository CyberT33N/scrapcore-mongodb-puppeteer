#pwd <-- current directory
#-------------------------------------------------------------------------------
cd "$(dirname "$0")"
pwd
printf "\nWe will display now the current directory used:"
echo "$(dirname "$0")"
printf "\n\nWe will install now your needed dependencies..\n"
#-------------------------------------------------------------------------------
sudo dnf install gnome-terminal curl httpd gnome-screenshot
#-------------------------------------------------------------------------------
printf "\nWe finished the file :) - Created by Dennis Demand( github.com/CyberT33N )\n"

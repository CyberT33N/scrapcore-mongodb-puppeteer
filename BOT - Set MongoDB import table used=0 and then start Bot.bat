cd /d %~dp0
color 7
start cmd /k call "MongoDB - set import table to used=0.bat"
timeout /t 30
start cmd /k call "BOT - Start.bat"
exit
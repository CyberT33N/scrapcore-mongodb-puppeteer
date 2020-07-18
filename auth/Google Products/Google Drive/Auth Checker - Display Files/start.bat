cd /d %~dp0
color 7
node --optimize_for_size --max-old-space-size=8192 --expose-gc start.js
pause
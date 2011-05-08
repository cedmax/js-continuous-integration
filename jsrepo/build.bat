@echo off
call "%~dp0tools\ant-1.8.2\bin\ant.bat" -Dprj=%1 -emacs -logger org.apache.tools.ant.NoBannerLogger
EXIT /B

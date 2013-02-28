:: Windows script.
cls

:: %username%
:: set mongoose_path=
if "%COMPUTERNAME%"=="UB1868-4538" set mongoose_path=Z:\Dropbox\programs\mongoose

:: PUSHD %mongoose_path%

%mongoose_path%\mongoose-3.7.exe -e error.log -r "..\."
:: -root "F:\dev\GitHub\backbone-websql-table\tests" 
:: -e log.txt
:: -ports 8080

::POPD
:: pause
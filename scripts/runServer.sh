#!/bin/bash
# Linux script
clear

#:: %username%
#:: set mongoose_path=
#if "%COMPUTERNAME%"=="UB1868-4538" set mongoose_path=Z:\Dropbox\programs\mongoose

#:: PUSHD %mongoose_path%

mongoose -e error.log -r "../."
#:: -root "F:\dev\GitHub\backbone-websql-table\tests" 
#:: -e log.txt
#:: -ports 8080

#::POPD
#:: pause
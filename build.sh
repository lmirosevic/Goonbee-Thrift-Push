#! /bin/sh

#clean up old stuff
rm -rf gen-*

#generate latest
thrift -r -o thrift --gen js:node --gen cocoa thrift/GoonbeeChatService.thrift

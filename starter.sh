#!/bin/sh
export PATH=/usr/local/bin:$PATH
forever start -l /logs/forever.log -o /logs/output.log -e /logs/error.log app.js
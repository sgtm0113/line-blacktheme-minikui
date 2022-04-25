#!/bin/bash
filename=`ls themefile*`
unzip $filename
node change.js && zip $filename -r theme.json images
rm -rf images theme.json
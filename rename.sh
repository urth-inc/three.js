#!/bin/bash

find ./ -type f | xargs sed -i "s/from 'three-r148'/from 'three-r148'/g"
find ./ -type f | xargs sed -i "s;from 'three-r148/examples;from 'three-r148/examples;g"

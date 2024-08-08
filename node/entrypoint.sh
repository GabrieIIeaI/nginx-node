#!/bin/sh

# Install node module
npm install

# Await for the db container is up and running ok
dockerize -wait tcp://db:3306 -timeout 20s

# starts the server
node index.js
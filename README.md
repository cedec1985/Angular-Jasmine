## Description

This project shows how to do tests with Typescript and the framework Jasmine inside an Angular project.

## Initialize node configuration 

Run 'npm init', this will create the files for the packages

## Install Jasmine and dependencies 

Run 'npm i --save-dev typescript jasmine @types/jasmine', 
notice : --save-dev is for a local repository access and -g is for a general repository access.
Make sure to install all the dependencies for the framework to be functionnal

## Initialize project with Typescript 

Run 'npx tsc -- init', this will create the files for tsconfig

## Generate Jasmine file configuration 

Run 'npx jasmine init'

## Build

Run 'npm run build'
Run 'ng build' as well whether it is a angular project

## Running unit tests

Run 'jasmine [filename.spec.mjs]' from the build respository



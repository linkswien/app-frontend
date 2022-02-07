#!/bin/sh

if [ $1 = develop ]
then
   echo "Deploying changes to DEV environment..."
   docker-compose up -d --build
else
   echo "Deploying changes to PROD environment..."
   docker-compose -f docker-compose.prod.yml up -d --build
fi

echo "Deployed!"
#!/bin/bash

# Check if environment argument is provided
if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh [dev|test|prod]"
  echo "Example: ./deploy.sh dev"
  exit 1
fi

ENV=$1

# Validate environment
if [ "$ENV" != "dev" ] && [ "$ENV" != "test" ] && [ "$ENV" != "prod" ]; then
  echo "Error: Environment must be dev, test, or prod"
  exit 1
fi

echo "Deploying $ENV environment..."

# Stop existing containers
docker compose -f docker-compose.yml -f ${ENV}.yml down

# Build the image
docker compose -f docker-compose.yml -f ${ENV}.yml build

# Start containers in detached mode
docker compose -f docker-compose.yml -f ${ENV}.yml up -d

echo "$ENV environment deployed successfully!"
echo ""
docker compose -f docker-compose.yml -f ${ENV}.yml ps

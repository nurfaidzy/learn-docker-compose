# Docker Compose Extend Service Documentation

This project demonstrates how to use Docker Compose's `extends` feature to create different configurations for multiple environments (development, test, production) while reusing a base service definition.

## Project Structure

- `docker-compose.yml` - Base service configuration
- `test.yml` - Test environment override
- `prod.yml` - Production environment override
- `dockerfile` - Docker image definition
- `index.js` - Express.js application

## How It Works

The `extends` directive allows you to reuse service configurations from a base file and override specific settings for different environments.

**Base Configuration (`docker-compose.yml`):**
- Defines the core service setup (build, image, base ports, base environment)
- Used as the foundation for all environments

**Test Configuration (`test.yml`):**
- Extends the base service
- Overrides environment variables (ENV=test, PORT=4000)
- Uses a different container name and host port (5002)

**Production Configuration (`prod.yml`):**
- Extends the base service  
- Overrides environment variables (ENV=production, PORT=3000)
- Uses a different container name and host port (5001)

## Usage

### Run Development Environment

```sh
docker compose up -d
```

Access at: `http://localhost:5000`

### Run Test Environment

```sh
docker compose -f docker-compose.yml -f test.yml up -d
```

Access at: `http://localhost:5002`

### Run Production Environment

```sh
docker compose -f docker-compose.yml -f prod.yml up -d
```

Access at: `http://localhost:5001`

### Stop Services

```sh
# Stop development
docker compose down

# Stop test
docker compose -f docker-compose.yml -f test.yml down

# Stop production
docker compose -f docker-compose.yml -f prod.yml down
```

## Rebuild After Code Changes

When you make changes to `index.js` or other source files, you need to rebuild:

```sh
# Development
docker compose down
docker compose build
docker compose up -d

# Test
docker compose -f docker-compose.yml -f test.yml down
docker compose -f docker-compose.yml -f test.yml build
docker compose -f docker-compose.yml -f test.yml up -d

# Production
docker compose -f docker-compose.yml -f prod.yml down
docker compose -f docker-compose.yml -f prod.yml build
docker compose -f docker-compose.yml -f prod.yml up -d
```

## Verify Which Environment is Running

Visit the application in your browser or use curl:

```sh
# Development (port 5000)
curl http://localhost:5000

# Test (port 5002)
curl http://localhost:5002

# Production (port 5001)
curl http://localhost:5001
```

Each will display: `Hello World nurfaidzy, running in [environment] mode`

## Check Container Status

```sh
docker ps
```

Look for containers named:
- `express-js-container` (development)
- `express-js-container-test` (test)
- `express-js-container-prod` (production)

## Benefits of Using Extends

1. **DRY Principle** - Don't repeat yourself; define common configuration once
2. **Easy Maintenance** - Update the base config and all environments inherit changes
3. **Clear Overrides** - Each environment file shows only what's different
4. **Flexibility** - Run multiple environments simultaneously on different ports
5. **Environment Separation** - Clear distinction between dev, test, and prod settings

## Notes

- The base `docker-compose.yml` must always be included when using extended configurations
- You can run multiple environments simultaneously since they use different ports and container names
- Environment variables set in the override files take precedence over the base configuration

# Docker Compose Learning Project

This repository contains hands-on examples and exercises for learning Docker Compose. Each folder demonstrates a specific Docker Compose concept with working implementations.

## About This Project

This is a learning project based on Docker Compose tutorials. The repository is organized into different modules, each focusing on a specific Docker Compose feature or concept.

## Project Structure

### 📁 Core Concepts

- **`services/`** - Basic service definitions and multi-service applications
- **`port/`** - Port mapping and exposure configurations
- **`environment/`** - Environment variable management
- **`configFile/`** - Configuration file management
- **`volume/`** - Data persistence with volumes
- **`bind/`** - Bind mounts for development workflows
- **`network/`** - Custom network configurations and service communication

### 📁 Advanced Features

- **`dockerFile/`** - Custom Dockerfile integration with Docker Compose
  - Express.js application example
  - Automated deployment script (`deploy.sh`)
  - Build and run workflow

- **`extendService/`** - Service extension and environment-specific configurations
  - Base service definition
  - Development, Test, and Production environments
  - Shared configuration with environment overrides
  - Multi-environment deployment script

- **`healthCheck/`** - Container health monitoring
  - Health check endpoint implementation
  - Health status monitoring
  - Random health/unhealthy simulation for testing

- **`dependsOn/`** - Service dependencies and startup order
- **`restart/`** - Restart policies and container resilience
- **`limitResource/`** - CPU and memory resource limits

## Quick Start

### Prerequisites

- Docker installed on your system
- Docker Compose (included with Docker Desktop)
- Basic understanding of containers

### Running Examples

Each folder contains its own `docker-compose.yml` and related files. Navigate to any folder and run:

```bash
# Basic usage
docker compose up -d

# View running containers
docker compose ps

# View logs
docker compose logs -f

# Stop and remove containers
docker compose down
```

## Key Learning Topics

### 1. Service Configuration
Learn how to define and configure services in `docker-compose.yml`:
- Image selection
- Container naming
- Port mapping
- Environment variables

### 2. Multi-Environment Setup (`extendService/`)
Understand how to manage multiple environments:
```bash
# Development
sh deploy.sh dev

# Test
sh deploy.sh test

# Production
sh deploy.sh prod
```

### 3. Health Checks (`healthCheck/`)
Implement container health monitoring:
- Custom health check endpoints
- Health check intervals and retries
- Monitoring container health status

### 4. Networking (`network/`)
Configure custom networks for service communication:
- Bridge networks
- Service discovery
- Inter-service communication

### 5. Data Persistence (`volume/` and `bind/`)
Manage data with volumes and bind mounts:
- Named volumes for production
- Bind mounts for development
- Data persistence across container restarts

### 6. Resource Management (`limitResource/`)
Control resource allocation:
- CPU limits
- Memory constraints
- Resource reservation

## Deployment Scripts

Several folders include `deploy.sh` scripts for automated deployment:

```bash
# Make script executable (first time only)
chmod +x deploy.sh

# Run deployment
sh deploy.sh [environment]
```

## Best Practices Demonstrated

✅ **Separation of Concerns** - Each concept in its own folder  
✅ **Environment-Specific Configs** - Dev, test, prod configurations  
✅ **Health Monitoring** - Container health checks  
✅ **Network Isolation** - Custom networks for service communication  
✅ **Resource Limits** - CPU and memory constraints  
✅ **Automated Deployment** - Scripts for consistent deployments  
✅ **Documentation** - Each folder includes deployment guides  

## Common Commands Reference

```bash
# Start services in background
docker compose up -d

# View running services
docker compose ps

# View logs (follow mode)
docker compose logs -f [service_name]

# Stop services
docker compose stop

# Stop and remove containers
docker compose down

# Rebuild images
docker compose build

# Rebuild and restart
docker compose up -d --build

# View service configuration
docker compose config

# Execute command in running container
docker compose exec [service_name] [command]

# Scale services
docker compose up -d --scale [service_name]=3
```

## Learning Path Recommendation

1. **Start with basics**: `services/`, `port/`, `environment/`
2. **Data management**: `volume/`, `bind/`
3. **Networking**: `network/`
4. **Custom builds**: `dockerFile/`
5. **Advanced features**: `extendService/`, `healthCheck/`
6. **Production ready**: `limitResource/`, `restart/`, `dependsOn/`

## Additional Resources

- [Official Docker Compose Documentation](https://docs.docker.com/compose/)
- [Docker Compose File Reference](https://docs.docker.com/compose/compose-file/)
- [Best Practices Guide](https://docs.docker.com/develop/dev-best-practices/)

## Notes

- Each folder may contain its own `DEPLOYMENT.md` with specific instructions
- Make sure to run `docker compose down` in one folder before moving to another to avoid port conflicts
- Use `docker ps` to check all running containers across different examples

## Contributing

Feel free to explore, experiment, and enhance these examples as you learn Docker Compose!

---

**Happy Learning! 🐳**
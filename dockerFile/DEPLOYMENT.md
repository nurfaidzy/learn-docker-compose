# Deployment Script Documentation

This project uses Docker Compose to build and run the application inside containers. To simplify the deployment process, a shell script named `deploy.sh` is provided.

## Usage

To build and start the application, simply run the following command in your terminal from the `dockerFile` directory:

```sh
sh deploy.sh
```

## What the Script Does

1. **docker compose down**
   - Stops and removes any running containers defined in the Docker Compose file.
   - Cleans up the environment before rebuilding.

2. **docker compose build**
   - Rebuilds the Docker images using the latest code and configuration.
   - Ensures that any changes to your application are included in the new image.

3. **docker compose up -d**
   - Starts the containers in detached mode (in the background).
   - Allows you to continue using your terminal after starting the app.

## Why Use This Script?
- Ensures you always run the latest version of your code after making changes.
- Automates the build and deployment steps, reducing manual errors.
- Runs containers in the background so your terminal is not blocked.

## Notes
- Make sure you have Docker and Docker Compose installed.
- Run the script from the directory containing `deploy.sh` and your Docker Compose files.
- If you make changes to your code (e.g., `index.js`), re-run this script to update the running app.

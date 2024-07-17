# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:18.16.0-alpine3.17

# Create and change to the app directory.
WORKDIR /usr/app

# Install app dependencies using the `npm i` command.
# This command uses package.json to install dependencies.
COPY package.json ./

RUN npm install

# Copy the app files to the container.
COPY . .

# Expose the port the app runs on
ENV SERVER_PORT 5173
EXPOSE $SERVER_PORT

# Start the app
CMD [ "npm", "run", "dev"]
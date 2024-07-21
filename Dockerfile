# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:18.16.0-alpine3.17 as build

# Create and change to the app directory.
WORKDIR /usr/app

# This command uses package.json to install dependencies.
COPY package.json ./

# Install app dependencies using the `npm install` command.
RUN npm install

# Copy the app files to the container.
COPY . .

# Build the application => TJ => JS
RUN npm run build


FROM nginx:stable

COPY --from=build /usr/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
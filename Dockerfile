# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.15.1-slim as build

# Create and change to the app directory.
WORKDIR /usr/app

# This command uses package.json to install dependencies.
COPY package.json ./

# Install app dependencies using the `npm install` command.
RUN npm install

# Copy the app files to the container.
COPY . .

ARG BASE_BACK_URL
ENV VITE_API_BASE_URL=${BASE_BACK_URL:-'http://192.168.1.75:3000/'}

# Build the application => TJ => JS
RUN npm run build


FROM nginx:stable

COPY --from=build /usr/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
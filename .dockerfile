# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Expose a port if your Node.js application listens on a specific port
EXPOSE 3000

# Specify the command to run your Node.js application
CMD ["node", "index.js"]

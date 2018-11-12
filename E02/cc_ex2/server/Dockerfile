# Group 60, ex2

# Getting base img
FROM node:alpine

# Creating directory in container and cd there
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Copy dependency list and installing dependencies
COPY package.json /usr/srv/serer/
RUN npm install

# Now copy the rest. This is delayed because if we change 
# some file we don't repeat the above.
COPY . /usr/src/server/

# Expose port
EXPOSE 3000

# Exec server app
CMD ["node", "server.js"]
 
#eof


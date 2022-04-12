# pull official base image
FROM node:17-alpine3.14

# set working directory
WORKDIR /app-frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app-frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]



# see https://mherman.org/blog/dockerizing-a-react-app/
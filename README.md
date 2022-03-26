# app-frontend

Used [tutorial](https://mherman.org/blog/dockerizing-a-react-app/)

Using [Airbnb JS Style](https://github.com/airbnb/javascript)

## Development
### Prerequisites
- Docker
- npm

### Running locally without a container (with hot reload)

- `npm install`
- `npm start`

The app will be available at [localhost:3000](http://localhost:3000)
Hot reloads should work.

### As a conatiner

- `docker-compose up -d --build`

The app will be available at [localhost:3000](http://localhost:3000)

Kill the service with `docker-compose stop`

## Deploy

- `docker-compose -f docker-compose.prod.yml up -d --build`

Creates an optimised production build available at [localhost:1337](http://localhost:1337)

User `docker-compose -f docker-compose.prod.yml stop` to stop.




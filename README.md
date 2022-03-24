# app-frontend

Used [tutorial](https://mherman.org/blog/dockerizing-a-react-app/)

Using [Airbnb JS Style](https://github.com/airbnb/javascript)

## Development
### Prerequisites
- Docker
- npm

Build and run dev container: (hot reload enabled)

- `docker-compose up -d --build`

The app will be available at [localhost:3000](http://localhost:3000)

Kill the service with `docker-compose stop`

## Deploy

- `docker-compose -f docker-compose.prod.yml up -d --build`

Creates an optimised production build available at [localhost:1337](http://localhost:1337)

User `docker-compose -f docker-compose.prod.yml stop` to stop.




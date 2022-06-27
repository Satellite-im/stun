# Stun server

### Installing
- `yarn`

### start server locally
- `cp .env.example .env`
- `yarn dev`

### build and run server using docker
- Local: `yarn deploy:local`
- Production: `yarn deploy:prod`

Note: hot-reload is setup for local docker development using `nodemon` and volumes to avoid recreating a container.

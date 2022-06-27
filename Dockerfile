FROM  node:18.4.0-alpine3.15
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
	then yarn; \
	else yarn --prod; \
	fi
COPY . .
EXPOSE 3478
CMD ["node", "server.js"]
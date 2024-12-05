FROM mongo:6.0.6

COPY ./kltn.js /docker-entrypoint-initdb.d/kltn.js

ENV MONGO_INITDB_DATABASE=kltn

EXPOSE 27017

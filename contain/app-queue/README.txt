
$ docker build -t de0-app-queue-0 .

$ docker run -d -p 3000:3000 -e APP_PORT=3000 -e SRV_HOST=$SRV_HOST de0-app-queue-0

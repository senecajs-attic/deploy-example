# SenecaJS and Docker

## Example code for a simple deployment

This builds on some of the examples at [senecajs.org](http://senecajs.org).

## What you'll need:

   * beanstalkd
   * Docker (on Mac, also boot2docker is useful)
   * Node.js (any flavor)
   * Seneca


## Files

The main web apps are in the top level folder. The _plugins_ folder contains micro-service business logic (but not the services themselves!). The _services_ folder contains the micro-service definition scripts.

## Run Scenarios

Note: a custom logger is used (defined in _seneca.options.js_) to pretty print messages of interest. You can always override this on the command line with `--seneca.log.all`.


### Simple pattern matching

```sh
$ node salestax.js
```


### Basic web server with separate micro-service

```sh
$ node app-basic.js
```

```sh
$ node services/salestax-basic-srv.js
```


### Web server and micro-service over a queue

Run `beanstalkd` first!

```sh
$ node app-queue.js
```

```sh
$ node services/salestax-queue-srv.js
```


### Adding more complexity to the business logic

```sh
$ node app-queue.js
```

```sh
$ node services/salestax-queue-country-srv.js
```


### Splitting traffic to validate a new micro-service version

```sh
$ node app-queue.js
```

```sh
$ node services/salestax-splitter-srv.js
```

```sh
$ node services/salestax-current-srv.js
```

```sh
$ node services/salestax-update-srv.js
```


### Build and deploy to Docker

Note: shut down all previous processes

In the _contain_ folder, each docker container has a sub-folder. In
each sub-folder is a README showing the commands to build, and then
run the container.

The above scenarios can be run again, this time using docker.

Some useful commands:

```sh
$ docker images # show built images (these can then be run!)
$ docker ps # show current running containers
$ docker ps -a # show all containers - useful for restarting
$ docker stop -t 0 <container-name> # stop a running container
$ docker start <container-name> # start a previously stopped container - useful for rollbacks!
```








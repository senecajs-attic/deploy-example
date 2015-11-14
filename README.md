![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js][] example module

# deploy-example

[![Gitter][gitter-badge]][gitter-url]

[![js-standard-style][standard-badge]][standard-style]

This builds on some of the examples at [senecajs.org](http://senecajs.org).

If you're using this module, and need help, you can:

- Post a [github issue][],
- Tweet to [@senecajs][],
- Ask on the [Gitter][gitter-url].

If you are new to Seneca in general, please take a look at [senecajs.org][]. We have everything from
tutorials to sample apps to help get you up and running quickly.

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


## Contributing
The [Senecajs org][] encourage open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License
Copyright Richard Rodger and other contributors 2015, Licensed under [MIT][].

[gitter-badge]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/senecajs/seneca
[standard-badge]: https://raw.githubusercontent.com/feross/standard/master/badge.png
[standard-style]: https://github.com/feross/standard

[MIT]: ./LICENSE
[Senecajs org]: https://github.com/senecajs/
[Seneca.js]: https://www.npmjs.com/package/seneca
[senecajs.org]: http://senecajs.org/
[github issue]: https://github.com/senecajs/deploy-example/issues
[@senecajs]: http://twitter.com/senecajs

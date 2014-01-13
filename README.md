# Kraken_Example_Bootstrap
An example of a Kraken application using Twitter Bootstrap

# Introduction
Kraken generator provides a ready to launch application with a very basic index.html page based on a dustjs template. In this example we're going to add the examples available in the [Bootstrap](http://getbootstrap.com) website.

The topics covered here are:

* Using the generator to build an application
* Installing the Bootstrap files
* Configuration

## Prerequisites
* You will --of course-- need [Node](http://nodejs.org) (Version >= 0.10.20 preferred)
* The Kraken generator. If you haven't yet installed it, simply do: `sudo npm install -g generator-kraken`

## Create an application
```bash
$ yo kraken

     ,'""`.
    / _  _ \
    |(@)(@)|   Release the Kraken!
    )  __  (
   /,'))((`.\
  (( ((  )) ))
   `\ `)(' /'

[?] Application name: Kraken_Example_Bootstrap
[?] Description: An example using Twitter Bootstrap
[?] Author: @ajvsms
[?] Use RequireJS? (Y/n) n

```
The generator will set up the app and install the dependencies. After it's done, just go into the newly created directory
```bash
$ cd Kraken_Example_Bootstrap
```
## Installing Bootstrap
The example uses the distribution version of the bootstrap files, available [here](https://github.com/twbs/bootstrap/releases/download/v3.0.3/bootstrap-3.0.3-dist.zip).

1. Unzip the file into the public/ directory.

From now on, bootstrap is available on our application.
Let's add some examples from the Bootstrap website!

## Configuring the Jumbotron Example
For this first example, we'll use the [Jumbotron](http://getbootstrap.com/examples/jumbotron/) example.

1. To be able to go to this new page, first we need a router. For this, let's create a file called jumbotron.js on the controllers/ directory:
```
'use strict';
var IndexModel = require('../models/index');
module.exports = function (app) {
    var model = new IndexModel();
    app.get('/jumbotron', function (req, res) {       
        res.render('jumbotron', model);    
    });
};
```
2. We want to have the same "Hello name of the application" message in our bootstrap page. To pass the name of the application using the internationalization capabilities of Kraken, simply do:

```bash
$ cp locales/US/en/index.properties locales/US/en/jumbotron.properties
```
3. Now the final part: the dust template to produce the jumbotron page. For this, simply copy the source code of the jumbotron example from the Bootstrap example to a file called jumbotron.dust under public/templates and let's go for the changes necessary to have it working under Kraken:
* Split the file in two: create a file called *jumbotron_master.dust* under ```public/templates/layouts``` and copy the headers and footers of the page, changing the location of the files from ```href="../../dist/css/"``` to ```href="dist/css/"``` where necessary.
* Include the partials {+body /}
* On the *jumbotron.dust* file, delete the headers and footer copied to the layout template and insert change the title from

```
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1>Hello, world!</h1>
```
to
```
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1>{@pre type="content" key="greeting"/}</h1>
```

## And you're done!
After this, just issue: `$ npm start` and go to [http://localhost:8000/jumbotron](http://localhost:8000/jumbotron) and see.

# backend
$ node_modules/.bin/seed
  (populate database)
$ docker-compose up
---
$ docker-build up


# to use bootstrap installed via npm update angular.json
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ],

# other installs needed
{Angular material installation}
npm i ng2-search-filter --save
npm install ngx-pagination --save
// for delete confirmation pop up
npm install --save angular-confirmation-popover

# JSON
// convert js object to json:
    jsObj = JSON.stringify(jsObj)
// convert json object to js:
    localJsObj = JSON.parse(jsonObj)

#snag
* close pipe once information has been received (GET)

# ComicStock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

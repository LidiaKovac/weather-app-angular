# Weather App - Angular
## Design

![design](https://imgur.com/stIPvMa.png)

## Branches: 

- The `master` branch is the branch that uses `json-server`
  - To run this, create a .env file in your root folder and add this: 
  ```API_KEY= XXXXXXXXX ```
  replacing the Xs with your actual weather api key. 
  Then, run the project with `npm run dev`. 
  This will run json server as well as the `writeEnv.ts` file, ensuring your key doesn't get pushed to the repo. 
- The `demo` branch is the branch made for <a href='https://angular-weather-app-epicode.netlify.app' target='_blank'> THIS PRODUCTION DEMO </a>, it uses my own API. 

The functionalities are exactly the same, but the demo branch had been added to allow me to ship the app to production, which is not possible with `json-server`.

### To run locally: `npm i` && `npm run dev` => only works on the `master` branch. 
The `dev` command also starts json-server as well as setups the env file. 

YOU WILL NEED A .env FILE IN YOUR ROOT PROJECT CONTAINING THE API KEY FOR THE WEATHER API. 

The syntax is as follows: 
```
API_KEY = key here, no quotes
```

## Angular README


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Search Images - Zehitomo
Search Images - Zehitomo, provides a friendly and easy-to-use interface to search for images from Unsplash, utilising their public API, and allows you to view, download or save each image in custom-created favourite lists.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

# Set Up
- `git clone https://github.com/mauro86/zehitomo.git`
- `cd zehitomo`
- IMPORTANT! Store your Unsplash API Auth Key within the attribute `environment.unsplashAuthKey` in `./environments.environment.ts`
- `npm install`
- `npm run start`
- Navigate to `http://localhost:4200/`

# Build
- Run `npm run build-prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Running unit tests
- Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Documenation

## Technology Utilised

#### Angular 10
https://angular.io/

Given my lack of experience among the required technologies (Angular, React, Vue), I had to make a choice based on the time constraint. I researched and briefly tried them for finally settling for Angular.

Even though Angular learning curve is said to be higher than the other 2 frameworks, since the simplicity of the project, I reckoned it would be more efficient as out of the box it provides a full MVC framework with functionalities such as two-way data binding, routing and testing.
Also, being already familiar with MVC frameworks it was relatively easy to gain an understanding of the concepts of modularity, controllers, models and views that Angular offers.

On the contrary, the challenge of utilising this framework has been becoming familiar with unfamiliar concepts such as decorators and dependency injections.

#### Angular Material
https://material.angular.io/

For what concerns the front-end components, I decided to utilise Angular Material. This library provides ready to use modules such as Modal Windows and Buttons, which facilitated and sped up my work by allowing me to take advantage of its ready-to-use styles and features.
An example is the Modal Box utilised in the project. The open/close functionalities are taken care of by Angular Material, allowing me to focus on the logic of the feature contained in the modal.

#### Unsplash-js 
https://www.npmjs.com/package/unsplash-js

Unsplash-js is a third-party JS wrapper for Unsplash API, which provides fast and easy-to-use methods which facilitate the communication with the Unsplash API.

#### Local Storage
For what concerns the backend and storage I opted for the local storage provided by browsers. Even in this case the choice was dictated by the time constraint, as local storage allows to quickly and simply store and fetch data. Also due to the simplicity of the scope, it wasn't required a large amount and different types of data to be stored.

The cons of this choice is in the limitation of space available, which is in the control of the user utilising the browser, and also the fact that it only allows strings to be stored.

## Assumptions
- The Unsplash API has been set as default to return max 10 images.
- The Favourite Lists' name is unique, hence 2 lists with the same name cannot be created.
- The lists' name are case senstivie, hence two lists 'Zehitomo' and 'zehitomo' can exist.
- It will be the user responsibility to take action by freeing some space, if the local storage memory runs out of space.

## Design and Architecture
For what concerns the design and architecture, I took advantage of the modularity provided by Angular.

Starting from the angular App module, the project forks in two further modules `search-images` and `favourite-lists`, each one representing a page of the application. A third `shared` module without routing functionalities was created, which contains components and services used by multiple external modules.

For what concerns the components, a parent component has been created for each page, which contains child components from its own module or the shared module.

The logic and communication with backend and external API has been kept in the services, which are injected in the components requiring their methods.

The choices stated above were made in order to facilitate modularity and scalability for a potential future development and improvement of the application. 

#### Lazy loading
https://angular.io/guide/lazy-loading-ngmodules

Lazy loading was implemented to improve performances.
As per documentation linked:
`By default, NgModules are eagerly loaded, which means that as soon as the app loads, so do all the NgModules, whether or not they are immediately necessary. For large apps with lots of routes, consider lazy loading—a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.`

#### Error handling
Based on some of the assumptions listed above, a basic error handling has been provided, including feedback to the user based on input validation and lack of memory space.

#### Test coverage
Unit Tests have been written for some of the service methods.

#### Legacy browser compatibility
https://angular.io/guide/browser-support

Angular supports most recent browsers. In order to support older versions, it allows to load polyfill scripts for the required browsers.

## Asymptotic analysis
The most costly methods implemented in the project are the ones utilised in the services.

Among them the the most costly have a linear space and time cost O(n).

## TODO Improvements
- Increase code coverage which at the moment doesn't cover all methods and scenarios.
- Write E2E tests https://angular.io/cli/e2e.
- Improve UI by providing more attractive and easy to use components.
- Utilise an alternative data storage architecture (eg Database) which can provide more flexibility and scalability.
- Additional refactoring of the code. Eg. moving certain methods such as validators outside the services and in a dedicated helper.
- Additional features to make the application more attractive, a few examples:
  - Allowing the app to load more images as the user scrolls down
  - Enable the user to share her favourite lists
- Improve Accessibility implementing steps such as:
  - improving keyboard nagivation
  - testing the UI styles for visually impaired people

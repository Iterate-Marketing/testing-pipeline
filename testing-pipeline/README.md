# communitymgt-iteratemarketing-tests 

### Usage

#### Requirements

* nodejs
* npm
* chrome browser

#### Setup
```
git clone 
npm install
```

### Running Tests
These test can be ran using the web browsers on your local machine or using BrowserStack's environments. The tests can be targeting against any provided hosted browser endpoint.

#### Run tests using your local system web browsers

##### Run on chrome
```
npm run e2e 
```

##### Run on firefox
```
npm run e2e -- --browser firefox
```

#### Run using tag
```
npm run e2e -- --cucumberOpts.tags @tag_name
```
#### Run using Scenario name
```
npm run e2e -- --cucumberOpts.name "scenario namw"
```

#### Run tests Browserstack web browsers

In order to run tests against BrowserStack, auth credentials must be passed as browserstackUser, browserstackKey argument and 
browsers where its value can be set as chrome, firefox, ie, and for more check capabilities.js file.

```
npm run e2e-browserstack -- --browserstackUser user --browserstackKey key --browsers=browsername
```

#### To create HTML report:
```
npm run report
```

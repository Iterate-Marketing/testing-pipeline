/**
 * To learn more about the protractor.conf.js check out:
 * https://github.com/angular/protractor/blob/master/lib/config.ts
 */
exports.config = {

    baseUrl: 'http://communitymgt.iteratemarketing.com',

    // directConnect: true,
    seleniumAddress: 'http://10.138.150.250:4444/wd/hub',

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    // Load Serenity/JS
    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: ['features/**/*.feature'],

    cucumberOpts: {
        require: ['features/**/*.ts'],
        format: 'pretty',
        compiler: 'ts:ts-node/register'
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--disable-infobars',
                '--headless',
                '--disable-gpu',
                '--window-size=800,600'
            ]
        }
    },
    params:{
        Trigger_Delay: 2000,
        Not_Long_Enough: 500,
        Long_Enough: 10000
    }
};

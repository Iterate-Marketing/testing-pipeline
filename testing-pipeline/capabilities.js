const capabilitiesList = {
    'chrome': {
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'Chrome',
        'acceptSslCerts': true,
    },
    'firefox': {
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'Firefox',
        'resolution': '1024x768',
        'acceptSslCerts': true,
    },

    'safari': {
        'browserName' : 'Safari',
        'browser_version' : '10.0',
        'os' : 'OS X',
        'os_version' : 'Sierra',
        'resolution' : '1024x768',
        'acceptSslCerts': true,
    },

    'ie': {
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'IE',
        'browser_version': '11.0',
        'resolution': '1024x768',
        'acceptSslCerts': true,
    },
    'edge':{
        'browserName' : 'Edge',
        'browser_version' : '15.0',
        'os' : 'Windows',
        'os_version' : '10',
        'resolution' : '1024x768',
    }
};

exports.get = function (browsers) {
    if (!!browsers) {

        let multiCapabilities = [];

        browsers = browsers.split('=')[1].trim();

        browsers.split(',').forEach(function (browser) {
            browser = browser.trim();
            if (capabilitiesList.hasOwnProperty(browser)) {
                multiCapabilities.push(capabilitiesList[browser]);
            }
        });
        console.log('multiCapabilities - ' + multiCapabilities.length);
        return multiCapabilities.length === 0 ? undefined : multiCapabilities;
    }
};

exports.getValue = function (str) {
    const value =  str.split('=')[1].trim();
    console.log(str + ' Value - ' + value);
    return value;
};

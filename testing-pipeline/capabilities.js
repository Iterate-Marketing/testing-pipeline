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
    'S6': {
        'os_version': '5.0',
        'device': 'Samsung Galaxy S6',
        'real_mobile': 'true',
        'browserstack.local': 'false',
        'resolution': '800x600',
        'acceptSslCerts': true,
        'deviceOrientation': 'landscape'
    },

    'iPhone6': {
        'os_version': '11.2',
        'device': 'iPhone 6',
        'real_mobile': 'true',
        'browserstack.local': 'false',
        'browserName': 'Chrome',
        'browser_version': '68.0',
        'acceptSslCerts': true,
        'resolution': '800x600',
    },

    'iPad4': {
        'os_version': '9.1',
        'device': 'iPad Mini 4',
        'browserstack.local': 'false',
        'acceptSslCerts': true
    },

    'ie': {
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'IE',
        'browser_version': '11.0',
        'resolution': '1024x768',
        'acceptSslCerts': true,
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

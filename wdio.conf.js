exports.config = {
    
   
    specs: [
        './test/specs/**/*.js'
    ],
   
    maxInstances: 10,
   
    capabilities: [{
        browserName: 'chrome', browserVersion: "latest", platformName: "Windows 10", 'sauce:options': {'tunnelIdentifer': 'circleTunne'}
    }],
   
    sync: true,
   
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'debug',
    
    coloredLogs: true,
    
    deprecationWarnings: true,
    
    bail: 0,
    
    screenshotPath: './errorShots/',
   
    baseUrl: 'http://devhost:3000',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 900000,
    
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],
    
    // Sauce-specific settings
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: [
        ['sauce', {
            sauceConnect: true,
        }]
    ]
}

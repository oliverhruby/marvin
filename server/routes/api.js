const express = require('express');
const process = require('process');
const os = require('os');
const router = express.Router();

/**
 * Example test method
 */
router.get('/test', (req, res) => {
  res.send('api works');
});

/**
 * Retrieve server information 
 */
router.get('/version', (req, res) => {
  res.send('{\n'
    + '  \'nodejs\': \'' + process.version + '\',\n'
    + '  \'os\': {\n'
    + '    \'freemem\': \'' + os.freemem() + '\'\n'
    + '    \'hostname\': \'' + os.hostname() + '\'\n'
    + '    \'platform\': \'' + os.platform() + '\'\n'
    + '    \'release\': \'' + os.release() + '\'\n'
    + '    \'totalmem\': \'' + os.totalmem() + '\'\n'
    + '    \'type\': \'' + os.type() + '\'\n'
    + '    \'uptime\': \'' + os.uptime() + '\'\n'
    + '  }\n'
    + '}');
});

/**
 * Retrieves list of registered users
 */
router.get('/users', (req, res) => {
  User.find({}).complete(function (err,data) {
    console.log(data);
  });
});

module.exports = router;
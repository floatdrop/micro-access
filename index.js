'use strict';
const controlAccess = require('control-access');

module.exports = (req, res, opts) => {
	return controlAccess(opts)(req, res);
};

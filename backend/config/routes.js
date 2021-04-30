const express = require('express');

module.exports = function(server){
    const router = express.Router();

    server.use('/api', router);

    const billingCycleService = require('./../api/billingCycle/billingCyclesService');
    billingCycleService.register(router, '/billingCycles');

    const billingSummaryService = require('../api/billingSummary/billingSumaryService');

    router.route('/billingSummary').get( billingSummaryService.getSummary );
}
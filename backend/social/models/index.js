const users = require('./users.js');
const tenant = require('./tenant.js');
const { user } = require('pg/lib/defaults');

users.belongsTo(tenant, {
    as: 'tenantId'
})
module.exports = {
    users,
    tenant
}